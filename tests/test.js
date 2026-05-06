import { emojiPattern, compactEmojiPattern } from '../index.js';

/* use the command: node test.js */

/*compile the pattern string into a regex*/
let emoRegex = new RegExp(compactEmojiPattern, "g")

console.log("This 🙆🏿‍♂️👩‍⚖️is the 🧗‍♀️text🥣.")

/*extracting the emojis*/
let emojis = [...`This 🙆🏿‍♂️👩‍⚖️is the 🧗‍♀️text🥣.`.matchAll(emoRegex)];
console.log(JSON.stringify(emojis.flat())) //["🙆🏿‍♂️","👩‍⚖️","🧗‍♀️","🥣"]

/*count of emojis*/
let emoCount = [..."This 🙆🏿‍♂️👩‍⚖️is the 🧗‍♀️text🥣.".matchAll(emoRegex)].length;
console.log(`emoCount (should be 4):${emoCount}`);//4

/*strip emojis from text*/
let stripped =  "This 🙆🏿‍♂️👩‍⚖️is the 🧗‍♀️text to be stripped🥣 of emojis.".replace(emoRegex, "");
console.log(`${stripped}`) //"This is the text."

/*use the pattern string to build a custom regex*/
/*match a string ending in 3 emojis*/
let customRegex = new RegExp(".*"+emojiPattern+"{3}$") 

let isMatch= customRegex.test("yep three here 🙆🏿‍♂️👩‍⚖️🥣")
console.log(`true test for ending in exactly 3 emojis:${isMatch}`)

isMatch = customRegex.test("nope 🥣🙆🏿‍♂️") 
console.log(`false test for not ending in exactly 3 emojis:${isMatch}`)

/*run against everyEmoji.txt and report count*/
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const everyEmojiText = readFileSync(join(__dirname, 'everyEmoji.txt'), 'utf8');
const everyEmojiRegex = new RegExp(compactEmojiPattern, 'g');
const everyEmojiMatches = [...everyEmojiText.matchAll(everyEmojiRegex)];
console.log(`everyEmoji.txt match count (should be 3953): ${everyEmojiMatches.length}`);

/*round-trip: strip all matches, re-run, expect 0*/
const stripped2 = everyEmojiText.replace(new RegExp(compactEmojiPattern, 'g'), '');
const afterStrip = [...stripped2.matchAll(new RegExp(compactEmojiPattern, 'g'))].length;
console.log(`everyEmoji.txt match count after strip (should be 0): ${afterStrip}`);
