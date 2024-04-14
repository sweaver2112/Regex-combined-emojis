/*
Author:Scott Weaver @sweaver2112 4/11/2024
Updater script that builds the 'all Emoji' regex by extracting the current list from unicode.org.
(due to CORS and the prohibitive size of Unicode's pages, easier just to paste the raw HTML instead of trying to fetch)
*/
let HTML = `<raw HTML from https://unicode.org/emoji/charts/full-emoji-list.html & https://unicode.org/emoji/charts/full-emoji-modifiers.html>` 
let regex = buildPattern()
console.log(regex)

function buildPattern(){

    let reg = new RegExp("(?<=<td class=\"chars\">).*?(?=</td>)", "g")
    let matches = HTML.matchAll(reg);
    //console.log([...matches].join(" ")) <---generate plaintext space-separated string of all Emojis
    let regex = "(?:"+[...matches]
        .map(e=>e[0] //get full match for each emoji
            .split('') //split each character of the emoji into an array
            .map(s=>String.raw`\u${padHex(s.codePointAt(0).toString(16))}`) //map array of chars to their hex codepoint prefixed with \u
        .join("")) //join the /u{hex} sequences together
        .sort((a,b)=>b.length-a.length)//sort the sequences longest to shortest
        .join("|")+")" //join the sequences with | for alternation

    //return regex; //safe version
    return regex.replace(/\\u(?!002a)([0-9A-F]{4})/ig, (m, g1) => String.fromCharCode(`0x${g1}`)); //compact "just the emojis" version (with tweak to exclude the asterisk emoji)
}
function padHex(hex){
 while(hex.length<4) hex = "0"+hex
 return hex;
}
