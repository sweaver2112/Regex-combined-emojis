/*
Author:Scott Weaver @sweaver2112 4/27/2021
Updater script that builds the 'all Emoji' regex by extracting the current list from unicode.org.
(run in browser console from unicode.org for best results)
*/
let regex =  await buildPattern()
console.log(regex)
async function fetchHTML(){
    let rez = await fetch('https://unicode.org/emoji/charts/full-emoji-list.html')
    let html = await rez.text()
    rez = await fetch('https://unicode.org/emoji/charts-13.1/full-emoji-modifiers.html')
    html += await rez.text()
    return html
}
async function buildPattern(){
    let htm = await fetchHTML()
    let reg = new RegExp("(?<=<td class='chars'>).*?(?=</td>)", "g")
    let matches = htm.matchAll(reg);
    let regex = "(?:"+[...matches].map(e=>e[0].split('').map(s=>String.raw`\u${padHex(s.codePointAt(0).toString(16))}`).join("")).sort((a,b)=>b.length-a.length).join("|")+")"
    return regex;
}
function padHex(hex){
 while(hex.length<4) hex = "0"+hex
 return hex;
}
