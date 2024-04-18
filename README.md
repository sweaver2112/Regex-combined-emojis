# 🤠  Regex-combined-emojis 🧐
A single JavaScript (also works in .NET and Java, and (compact version) Python) regular expression that matches All Emojis, that is, the combined lists:
https://unicode.org/emoji/charts/full-emoji-list.html and https://unicode.org/emoji/charts/full-emoji-modifiers.html

**-> Current against Unicode.org's public lists as of 4/11/2024**

**-> Includes all Skin Tone & Flag patterns**

**-> Emoji Count: 3782 | Version: 15.1**

**-> Regex101 demo (safe version): https://regex101.com/r/2ia4m2/16**

**-> Regex101 demo (compact version): https://regex101.com/r/NpduZT/1**

```A Simpler Approach to Matching Emojis```

The expression is built programmatically from the source of the webpages listed above. 
The builder script is included and will generate an expression updated with the newest emojis (provided Unicode.org's HTML structure is the same). 
The pattern itself is a single, simple alternation with the longest sequences first, and it runs fast.  
By not worrying about character ranges or surrogate pair sequences, and just matching each character individually, pattern complexity is kept to a bare minimum.

## Installation

```javascript
npm install regex-combined-emojis`
```

## Usage

The pattern matches one single emoji.
It can be used "as is" to extract, count, or strip a string of emojis, or you can build your own regex with the pattern string.


```javascript
import { emojiPattern, compactEmojiPattern } from 'regex-combined-emojis';

/*compile to regex using either pattern string*/
let emoRegex = new RegExp(emojiPattern, "g")

/*extracting the emojis*/
let emojis = [...`This 🙆🏿‍♂️👩‍⚖️is the 🧗‍♀️text🥣.`.matchAll(emoRegex)];
console.log(emojis.flat()) //["🙆🏿‍♂️","👩‍⚖️","🧗‍♀️","🥣"]

/*count of emojis*/
let emoCount = [..."This 🙆🏿‍♂️👩‍⚖️is the 🧗‍♀️text🥣.".matchAll(emoRegex)].length;
console.log(`emoCount:${emoCount}`);//4

/*strip emojis from text*/
let stripped =  "This 🙆🏿‍♂️👩‍⚖️is the 🧗‍♀️text🥣.".replace(emoRegex, "");
console.log(`${stripped}`) //"This is the text."

/*build a custom regex: match a string ending in 3 emojis*/
let customRegex = new RegExp(".*"+emojiPattern+"{3}$") 

let isMatch= customRegex.test("yep three here 🙆🏿‍♂️👩‍⚖️🥣")
console.log(`true test for ending in 3 emojis:${isMatch}`)

isMatch = customRegex.test("nope 🥣🙆🏿‍♂️") 
console.log(`false test for ending in 3 emojis:${isMatch}`)
```

## The Pattern (compact version)
(?:🧑🏻‍❤️‍💋‍🧑🏼|🧑🏻‍❤️‍💋‍🧑🏽|🧑🏻‍❤️‍💋‍🧑🏾|🧑🏻‍❤️‍💋‍🧑🏿|🧑🏼‍❤️‍💋‍🧑🏻|🧑🏼‍❤️‍💋‍🧑🏽|🧑🏼‍❤️‍💋‍🧑🏾|🧑🏼‍❤️‍💋‍🧑🏿|🧑🏽‍❤️‍💋‍🧑🏻|🧑🏽‍❤️‍💋‍🧑🏼|🧑🏽‍❤️‍💋‍🧑🏾|🧑🏽‍❤️‍💋‍🧑🏿|🧑🏾‍❤️‍💋‍🧑🏻|🧑🏾‍❤️‍💋‍🧑🏼|🧑🏾‍❤️‍💋‍🧑🏽|🧑🏾‍❤️‍💋‍🧑🏿|🧑🏿‍❤️‍💋‍🧑🏻|🧑🏿‍❤️‍💋‍🧑🏼|🧑🏿‍❤️‍💋‍🧑🏽|🧑🏿‍❤️‍💋‍🧑🏾|👩🏻‍❤️‍💋‍👨🏻|👩🏻‍❤️‍💋‍👨🏼|👩🏻‍❤️‍💋‍👨🏽|👩🏻‍❤️‍💋‍👨🏾|👩🏻‍❤️‍💋‍👨🏿|👩🏼‍❤️‍💋‍👨🏻|👩🏼‍❤️‍💋‍👨🏼|👩🏼‍❤️‍💋‍👨🏽|👩🏼‍❤️‍💋‍👨🏾|👩🏼‍❤️‍💋‍👨🏿|👩🏽‍❤️‍💋‍👨🏻|👩🏽‍❤️‍💋‍👨🏼|👩🏽‍❤️‍💋‍👨🏽|👩🏽‍❤️‍💋‍👨🏾|👩🏽‍❤️‍💋‍👨🏿|👩🏾‍❤️‍💋‍👨🏻|👩🏾‍❤️‍💋‍👨🏼|👩🏾‍❤️‍💋‍👨🏽|👩🏾‍❤️‍💋‍👨🏾|👩🏾‍❤️‍💋‍👨🏿|👩🏿‍❤️‍💋‍👨🏻|👩🏿‍❤️‍💋‍👨🏼|👩🏿‍❤️‍💋‍👨🏽|👩🏿‍❤️‍💋‍👨🏾|👩🏿‍❤️‍💋‍👨🏿|👨🏻‍❤️‍💋‍👨🏻|👨🏻‍❤️‍💋‍👨🏼|👨🏻‍❤️‍💋‍👨🏽|👨🏻‍❤️‍💋‍👨🏾|👨🏻‍❤️‍💋‍👨🏿|👨🏼‍❤️‍💋‍👨🏻|👨🏼‍❤️‍💋‍👨🏼|👨🏼‍❤️‍💋‍👨🏽|👨🏼‍❤️‍💋‍👨🏾|👨🏼‍❤️‍💋‍👨🏿|👨🏽‍❤️‍💋‍👨🏻|👨🏽‍❤️‍💋‍👨🏼|👨🏽‍❤️‍💋‍👨🏽|👨🏽‍❤️‍💋‍👨🏾|👨🏽‍❤️‍💋‍👨🏿|👨🏾‍❤️‍💋‍👨🏻|👨🏾‍❤️‍💋‍👨🏼|👨🏾‍❤️‍💋‍👨🏽|👨🏾‍❤️‍💋‍👨🏾|👨🏾‍❤️‍💋‍👨🏿|👨🏿‍❤️‍💋‍👨🏻|👨🏿‍❤️‍💋‍👨🏼|👨🏿‍❤️‍💋‍👨🏽|👨🏿‍❤️‍💋‍👨🏾|👨🏿‍❤️‍💋‍👨🏿|👩🏻‍❤️‍💋‍👩🏻|👩🏻‍❤️‍💋‍👩🏼|👩🏻‍❤️‍💋‍👩🏽|👩🏻‍❤️‍💋‍👩🏾|👩🏻‍❤️‍💋‍👩🏿|👩🏼‍❤️‍💋‍👩🏻|👩🏼‍❤️‍💋‍👩🏼|👩🏼‍❤️‍💋‍👩🏽|👩🏼‍❤️‍💋‍👩🏾|👩🏼‍❤️‍💋‍👩🏿|👩🏽‍❤️‍💋‍👩🏻|👩🏽‍❤️‍💋‍👩🏼|👩🏽‍❤️‍💋‍👩🏽|👩🏽‍❤️‍💋‍👩🏾|👩🏽‍❤️‍💋‍👩🏿|👩🏾‍❤️‍💋‍👩🏻|👩🏾‍❤️‍💋‍👩🏼|👩🏾‍❤️‍💋‍👩🏽|👩🏾‍❤️‍💋‍👩🏾|👩🏾‍❤️‍💋‍👩🏿|👩🏿‍❤️‍💋‍👩🏻|👩🏿‍❤️‍💋‍👩🏼|👩🏿‍❤️‍💋‍👩🏽|👩🏿‍❤️‍💋‍👩🏾|👩🏿‍❤️‍💋‍👩🏿|🏴󠁧󠁢󠁥󠁮󠁧󠁿|🏴󠁧󠁢󠁳󠁣󠁴󠁿|🏴󠁧󠁢󠁷󠁬󠁳󠁿|🧑🏻‍🤝‍🧑🏻|🧑🏻‍🤝‍🧑🏼|🧑🏻‍🤝‍🧑🏽|🧑🏻‍🤝‍🧑🏾|🧑🏻‍🤝‍🧑🏿|🧑🏼‍🤝‍🧑🏻|🧑🏼‍🤝‍🧑🏼|🧑🏼‍🤝‍🧑🏽|🧑🏼‍🤝‍🧑🏾|🧑🏼‍🤝‍🧑🏿|🧑🏽‍🤝‍🧑🏻|🧑🏽‍🤝‍🧑🏼|🧑🏽‍🤝‍🧑🏽|🧑🏽‍🤝‍🧑🏾|🧑🏽‍🤝‍🧑🏿|🧑🏾‍🤝‍🧑🏻|🧑🏾‍🤝‍🧑🏼|🧑🏾‍🤝‍🧑🏽|🧑🏾‍🤝‍🧑🏾|🧑🏾‍🤝‍🧑🏿|🧑🏿‍🤝‍🧑🏻|🧑🏿‍🤝‍🧑🏼|🧑🏿‍🤝‍🧑🏽|🧑🏿‍🤝‍🧑🏾|🧑🏿‍🤝‍🧑🏿|👩🏻‍🤝‍👩🏼|👩🏻‍🤝‍👩🏽|👩🏻‍🤝‍👩🏾|👩🏻‍🤝‍👩🏿|👩🏼‍🤝‍👩🏻|👩🏼‍🤝‍👩🏽|👩🏼‍🤝‍👩🏾|👩🏼‍🤝‍👩🏿|👩🏽‍🤝‍👩🏻|👩🏽‍🤝‍👩🏼|👩🏽‍🤝‍👩🏾|👩🏽‍🤝‍👩🏿|👩🏾‍🤝‍👩🏻|👩🏾‍🤝‍👩🏼|👩🏾‍🤝‍👩🏽|👩🏾‍🤝‍👩🏿|👩🏿‍🤝‍👩🏻|👩🏿‍🤝‍👩🏼|👩🏿‍🤝‍👩🏽|👩🏿‍🤝‍👩🏾|👩🏻‍🤝‍👨🏼|👩🏻‍🤝‍👨🏽|👩🏻‍🤝‍👨🏾|👩🏻‍🤝‍👨🏿|👩🏼‍🤝‍👨🏻|👩🏼‍🤝‍👨🏽|👩🏼‍🤝‍👨🏾|👩🏼‍🤝‍👨🏿|👩🏽‍🤝‍👨🏻|👩🏽‍🤝‍👨🏼|👩🏽‍🤝‍👨🏾|👩🏽‍🤝‍👨🏿|👩🏾‍🤝‍👨🏻|👩🏾‍🤝‍👨🏼|👩🏾‍🤝‍👨🏽|👩🏾‍🤝‍👨🏿|👩🏿‍🤝‍👨🏻|👩🏿‍🤝‍👨🏼|👩🏿‍🤝‍👨🏽|👩🏿‍🤝‍👨🏾|👨🏻‍🤝‍👨🏼|👨🏻‍🤝‍👨🏽|👨🏻‍🤝‍👨🏾|👨🏻‍🤝‍👨🏿|👨🏼‍🤝‍👨🏻|👨🏼‍🤝‍👨🏽|👨🏼‍🤝‍👨🏾|👨🏼‍🤝‍👨🏿|👨🏽‍🤝‍👨🏻|👨🏽‍🤝‍👨🏼|👨🏽‍🤝‍👨🏾|👨🏽‍🤝‍👨🏿|👨🏾‍🤝‍👨🏻|👨🏾‍🤝‍👨🏼|👨🏾‍🤝‍👨🏽|👨🏾‍🤝‍👨🏿|👨🏿‍🤝‍👨🏻|👨🏿‍🤝‍👨🏼|👨🏿‍🤝‍👨🏽|👨🏿‍🤝‍👨🏾|🧑🏻‍❤️‍🧑🏼|🧑🏻‍❤️‍🧑🏽|🧑🏻‍❤️‍🧑🏾|🧑🏻‍❤️‍🧑🏿|🧑🏼‍❤️‍🧑🏻|🧑🏼‍❤️‍🧑🏽|🧑🏼‍❤️‍🧑🏾|🧑🏼‍❤️‍🧑🏿|🧑🏽‍❤️‍🧑🏻|🧑🏽‍❤️‍🧑🏼|🧑🏽‍❤️‍🧑🏾|🧑🏽‍❤️‍🧑🏿|🧑🏾‍❤️‍🧑🏻|🧑🏾‍❤️‍🧑🏼|🧑🏾‍❤️‍🧑🏽|🧑🏾‍❤️‍🧑🏿|🧑🏿‍❤️‍🧑🏻|🧑🏿‍❤️‍🧑🏼|🧑🏿‍❤️‍🧑🏽|🧑🏿‍❤️‍🧑🏾|👩🏻‍❤️‍👨🏻|👩🏻‍❤️‍👨🏼|👩🏻‍❤️‍👨🏽|👩🏻‍❤️‍👨🏾|👩🏻‍❤️‍👨🏿|👩🏼‍❤️‍👨🏻|👩🏼‍❤️‍👨🏼|👩🏼‍❤️‍👨🏽|👩🏼‍❤️‍👨🏾|👩🏼‍❤️‍👨🏿|👩🏽‍❤️‍👨🏻|👩🏽‍❤️‍👨🏼|👩🏽‍❤️‍👨🏽|👩🏽‍❤️‍👨🏾|👩🏽‍❤️‍👨🏿|👩🏾‍❤️‍👨🏻|👩🏾‍❤️‍👨🏼|👩🏾‍❤️‍👨🏽|👩🏾‍❤️‍👨🏾|👩🏾‍❤️‍👨🏿|👩🏿‍❤️‍👨🏻|👩🏿‍❤️‍👨🏼|👩🏿‍❤️‍👨🏽|👩🏿‍❤️‍👨🏾|👩🏿‍❤️‍👨🏿|👨🏻‍❤️‍👨🏻|👨🏻‍❤️‍👨🏼|👨🏻‍❤️‍👨🏽|👨🏻‍❤️‍👨🏾|👨🏻‍❤️‍👨🏿|👨🏼‍❤️‍👨🏻|👨🏼‍❤️‍👨🏼|👨🏼‍❤️‍👨🏽|👨🏼‍❤️‍👨🏾|👨🏼‍❤️‍👨🏿|👨🏽‍❤️‍👨🏻|👨🏽‍❤️‍👨🏼|👨🏽‍❤️‍👨🏽|👨🏽‍❤️‍👨🏾|👨🏽‍❤️‍👨🏿|👨🏾‍❤️‍👨🏻|👨🏾‍❤️‍👨🏼|👨🏾‍❤️‍👨🏽|👨🏾‍❤️‍👨🏾|👨🏾‍❤️‍👨🏿|👨🏿‍❤️‍👨🏻|👨🏿‍❤️‍👨🏼|👨🏿‍❤️‍👨🏽|👨🏿‍❤️‍👨🏾|👨🏿‍❤️‍👨🏿|👩🏻‍❤️‍👩🏻|👩🏻‍❤️‍👩🏼|👩🏻‍❤️‍👩🏽|👩🏻‍❤️‍👩🏾|👩🏻‍❤️‍👩🏿|👩🏼‍❤️‍👩🏻|👩🏼‍❤️‍👩🏼|👩🏼‍❤️‍👩🏽|👩🏼‍❤️‍👩🏾|👩🏼‍❤️‍👩🏿|👩🏽‍❤️‍👩🏻|👩🏽‍❤️‍👩🏼|👩🏽‍❤️‍👩🏽|👩🏽‍❤️‍👩🏾|👩🏽‍❤️‍👩🏿|👩🏾‍❤️‍👩🏻|👩🏾‍❤️‍👩🏼|👩🏾‍❤️‍👩🏽|👩🏾‍❤️‍👩🏾|👩🏾‍❤️‍👩🏿|👩🏿‍❤️‍👩🏻|👩🏿‍❤️‍👩🏼|👩🏿‍❤️‍👩🏽|👩🏿‍❤️‍👩🏾|👩🏿‍❤️‍👩🏿|👩‍❤️‍💋‍👨|👨‍❤️‍💋‍👨|👩‍❤️‍💋‍👩|👨‍👩‍👧‍👦|👨‍👩‍👦‍👦|👨‍👩‍👧‍👧|👨‍👨‍👧‍👦|👨‍👨‍👦‍👦|👨‍👨‍👧‍👧|👩‍👩‍👧‍👦|👩‍👩‍👦‍👦|👩‍👩‍👧‍👧|🧑‍🧑‍🧒‍🧒|🚶🏻‍♀️‍➡️|🚶🏼‍♀️‍➡️|🚶🏽‍♀️‍➡️|🚶🏾‍♀️‍➡️|🚶🏿‍♀️‍➡️|🚶🏻‍♂️‍➡️|🚶🏼‍♂️‍➡️|🚶🏽‍♂️‍➡️|🚶🏾‍♂️‍➡️|🚶🏿‍♂️‍➡️|🧎🏻‍♀️‍➡️|🧎🏼‍♀️‍➡️|🧎🏽‍♀️‍➡️|🧎🏾‍♀️‍➡️|🧎🏿‍♀️‍➡️|🧎🏻‍♂️‍➡️|🧎🏼‍♂️‍➡️|🧎🏽‍♂️‍➡️|🧎🏾‍♂️‍➡️|🧎🏿‍♂️‍➡️|🧑🏻‍🦯‍➡️|🧑🏼‍🦯‍➡️|🧑🏽‍🦯‍➡️|🧑🏾‍🦯‍➡️|🧑🏿‍🦯‍➡️|👨🏻‍🦯‍➡️|👨🏼‍🦯‍➡️|👨🏽‍🦯‍➡️|👨🏾‍🦯‍➡️|👨🏿‍🦯‍➡️|👩🏻‍🦯‍➡️|👩🏼‍🦯‍➡️|👩🏽‍🦯‍➡️|👩🏾‍🦯‍➡️|👩🏿‍🦯‍➡️|🧑🏻‍🦼‍➡️|🧑🏼‍🦼‍➡️|🧑🏽‍🦼‍➡️|🧑🏾‍🦼‍➡️|🧑🏿‍🦼‍➡️|👨🏻‍🦼‍➡️|👨🏼‍🦼‍➡️|👨🏽‍🦼‍➡️|👨🏾‍🦼‍➡️|👨🏿‍🦼‍➡️|👩🏻‍🦼‍➡️|👩🏼‍🦼‍➡️|👩🏽‍🦼‍➡️|👩🏾‍🦼‍➡️|👩🏿‍🦼‍➡️|🧑🏻‍🦽‍➡️|🧑🏼‍🦽‍➡️|🧑🏽‍🦽‍➡️|🧑🏾‍🦽‍➡️|🧑🏿‍🦽‍➡️|👨🏻‍🦽‍➡️|👨🏼‍🦽‍➡️|👨🏽‍🦽‍➡️|👨🏾‍🦽‍➡️|👨🏿‍🦽‍➡️|👩🏻‍🦽‍➡️|👩🏼‍🦽‍➡️|👩🏽‍🦽‍➡️|👩🏾‍🦽‍➡️|👩🏿‍🦽‍➡️|🏃🏻‍♀️‍➡️|🏃🏼‍♀️‍➡️|🏃🏽‍♀️‍➡️|🏃🏾‍♀️‍➡️|🏃🏿‍♀️‍➡️|🏃🏻‍♂️‍➡️|🏃🏼‍♂️‍➡️|🏃🏽‍♂️‍➡️|🏃🏾‍♂️‍➡️|🏃🏿‍♂️‍➡️|🫱🏻‍🫲🏼|🫱🏻‍🫲🏽|🫱🏻‍🫲🏾|🫱🏻‍🫲🏿|🫱🏼‍🫲🏻|🫱🏼‍🫲🏽|🫱🏼‍🫲🏾|🫱🏼‍🫲🏿|🫱🏽‍🫲🏻|🫱🏽‍🫲🏼|🫱🏽‍🫲🏾|🫱🏽‍🫲🏿|🫱🏾‍🫲🏻|🫱🏾‍🫲🏼|🫱🏾‍🫲🏽|🫱🏾‍🫲🏿|🫱🏿‍🫲🏻|🫱🏿‍🫲🏼|🫱🏿‍🫲🏽|🫱🏿‍🫲🏾|🚶‍♀️‍➡️|🚶‍♂️‍➡️|🧎‍♀️‍➡️|🧎‍♂️‍➡️|🧑‍🦯‍➡️|👨‍🦯‍➡️|👩‍🦯‍➡️|🧑‍🦼‍➡️|👨‍🦼‍➡️|👩‍🦼‍➡️|🧑‍🦽‍➡️|👨‍🦽‍➡️|👩‍🦽‍➡️|🏃‍♀️‍➡️|🏃‍♂️‍➡️|🧑‍🤝‍🧑|👩‍❤️‍👨|👨‍❤️‍👨|👩‍❤️‍👩|👨‍👩‍👦|👨‍👩‍👧|👨‍👨‍👦|👨‍👨‍👧|👩‍👩‍👦|👩‍👩‍👧|👨‍👦‍👦|👨‍👧‍👦|👨‍👧‍👧|👩‍👦‍👦|👩‍👧‍👦|👩‍👧‍👧|🧑‍🧑‍🧒|🧑‍🧒‍🧒|👁️‍🗨️|🧔🏻‍♂️|🧔🏼‍♂️|🧔🏽‍♂️|🧔🏾‍♂️|🧔🏿‍♂️|🧔🏻‍♀️|🧔🏼‍♀️|🧔🏽‍♀️|🧔🏾‍♀️|🧔🏿‍♀️|👨🏻‍🦰|👨🏼‍🦰|👨🏽‍🦰|👨🏾‍🦰|👨🏿‍🦰|👨🏻‍🦱|👨🏼‍🦱|👨🏽‍🦱|👨🏾‍🦱|👨🏿‍🦱|👨🏻‍🦳|👨🏼‍🦳|👨🏽‍🦳|👨🏾‍🦳|👨🏿‍🦳|👨🏻‍🦲|👨🏼‍🦲|👨🏽‍🦲|👨🏾‍🦲|👨🏿‍🦲|👩🏻‍🦰|👩🏼‍🦰|👩🏽‍🦰|👩🏾‍🦰|👩🏿‍🦰|🧑🏻‍🦰|🧑🏼‍🦰|🧑🏽‍🦰|🧑🏾‍🦰|🧑🏿‍🦰|👩🏻‍🦱|👩🏼‍🦱|👩🏽‍🦱|👩🏾‍🦱|👩🏿‍🦱|🧑🏻‍🦱|🧑🏼‍🦱|🧑🏽‍🦱|🧑🏾‍🦱|🧑🏿‍🦱|👩🏻‍🦳|👩🏼‍🦳|👩🏽‍🦳|👩🏾‍🦳|👩🏿‍🦳|🧑🏻‍🦳|🧑🏼‍🦳|🧑🏽‍🦳|🧑🏾‍🦳|🧑🏿‍🦳|👩🏻‍🦲|👩🏼‍🦲|👩🏽‍🦲|👩🏾‍🦲|👩🏿‍🦲|🧑🏻‍🦲|🧑🏼‍🦲|🧑🏽‍🦲|🧑🏾‍🦲|🧑🏿‍🦲|👱🏻‍♀️|👱🏼‍♀️|👱🏽‍♀️|👱🏾‍♀️|👱🏿‍♀️|👱🏻‍♂️|👱🏼‍♂️|👱🏽‍♂️|👱🏾‍♂️|👱🏿‍♂️|🙍🏻‍♂️|🙍🏼‍♂️|🙍🏽‍♂️|🙍🏾‍♂️|🙍🏿‍♂️|🙍🏻‍♀️|🙍🏼‍♀️|🙍🏽‍♀️|🙍🏾‍♀️|🙍🏿‍♀️|🙎🏻‍♂️|🙎🏼‍♂️|🙎🏽‍♂️|🙎🏾‍♂️|🙎🏿‍♂️|🙎🏻‍♀️|🙎🏼‍♀️|🙎🏽‍♀️|🙎🏾‍♀️|🙎🏿‍♀️|🙅🏻‍♂️|🙅🏼‍♂️|🙅🏽‍♂️|🙅🏾‍♂️|🙅🏿‍♂️|🙅🏻‍♀️|🙅🏼‍♀️|🙅🏽‍♀️|🙅🏾‍♀️|🙅🏿‍♀️|🙆🏻‍♂️|🙆🏼‍♂️|🙆🏽‍♂️|🙆🏾‍♂️|🙆🏿‍♂️|🙆🏻‍♀️|🙆🏼‍♀️|🙆🏽‍♀️|🙆🏾‍♀️|🙆🏿‍♀️|💁🏻‍♂️|💁🏼‍♂️|💁🏽‍♂️|💁🏾‍♂️|💁🏿‍♂️|💁🏻‍♀️|💁🏼‍♀️|💁🏽‍♀️|💁🏾‍♀️|💁🏿‍♀️|🙋🏻‍♂️|🙋🏼‍♂️|🙋🏽‍♂️|🙋🏾‍♂️|🙋🏿‍♂️|🙋🏻‍♀️|🙋🏼‍♀️|🙋🏽‍♀️|🙋🏾‍♀️|🙋🏿‍♀️|🧏🏻‍♂️|🧏🏼‍♂️|🧏🏽‍♂️|🧏🏾‍♂️|🧏🏿‍♂️|🧏🏻‍♀️|🧏🏼‍♀️|🧏🏽‍♀️|🧏🏾‍♀️|🧏🏿‍♀️|🙇🏻‍♂️|🙇🏼‍♂️|🙇🏽‍♂️|🙇🏾‍♂️|🙇🏿‍♂️|🙇🏻‍♀️|🙇🏼‍♀️|🙇🏽‍♀️|🙇🏾‍♀️|🙇🏿‍♀️|🤦🏻‍♂️|🤦🏼‍♂️|🤦🏽‍♂️|🤦🏾‍♂️|🤦🏿‍♂️|🤦🏻‍♀️|🤦🏼‍♀️|🤦🏽‍♀️|🤦🏾‍♀️|🤦🏿‍♀️|🤷🏻‍♂️|🤷🏼‍♂️|🤷🏽‍♂️|🤷🏾‍♂️|🤷🏿‍♂️|🤷🏻‍♀️|🤷🏼‍♀️|🤷🏽‍♀️|🤷🏾‍♀️|🤷🏿‍♀️|🧑🏻‍⚕️|🧑🏼‍⚕️|🧑🏽‍⚕️|🧑🏾‍⚕️|🧑🏿‍⚕️|👨🏻‍⚕️|👨🏼‍⚕️|👨🏽‍⚕️|👨🏾‍⚕️|👨🏿‍⚕️|👩🏻‍⚕️|👩🏼‍⚕️|👩🏽‍⚕️|👩🏾‍⚕️|👩🏿‍⚕️|🧑🏻‍🎓|🧑🏼‍🎓|🧑🏽‍🎓|🧑🏾‍🎓|🧑🏿‍🎓|👨🏻‍🎓|👨🏼‍🎓|👨🏽‍🎓|👨🏾‍🎓|👨🏿‍🎓|👩🏻‍🎓|👩🏼‍🎓|👩🏽‍🎓|👩🏾‍🎓|👩🏿‍🎓|🧑🏻‍🏫|🧑🏼‍🏫|🧑🏽‍🏫|🧑🏾‍🏫|🧑🏿‍🏫|👨🏻‍🏫|👨🏼‍🏫|👨🏽‍🏫|👨🏾‍🏫|👨🏿‍🏫|👩🏻‍🏫|👩🏼‍🏫|👩🏽‍🏫|👩🏾‍🏫|👩🏿‍🏫|🧑🏻‍⚖️|🧑🏼‍⚖️|🧑🏽‍⚖️|🧑🏾‍⚖️|🧑🏿‍⚖️|👨🏻‍⚖️|👨🏼‍⚖️|👨🏽‍⚖️|👨🏾‍⚖️|👨🏿‍⚖️|👩🏻‍⚖️|👩🏼‍⚖️|👩🏽‍⚖️|👩🏾‍⚖️|👩🏿‍⚖️|🧑🏻‍🌾|🧑🏼‍🌾|🧑🏽‍🌾|🧑🏾‍🌾|🧑🏿‍🌾|👨🏻‍🌾|👨🏼‍🌾|👨🏽‍🌾|👨🏾‍🌾|👨🏿‍🌾|👩🏻‍🌾|👩🏼‍🌾|👩🏽‍🌾|👩🏾‍🌾|👩🏿‍🌾|🧑🏻‍🍳|🧑🏼‍🍳|🧑🏽‍🍳|🧑🏾‍🍳|🧑🏿‍🍳|👨🏻‍🍳|👨🏼‍🍳|👨🏽‍🍳|👨🏾‍🍳|👨🏿‍🍳|👩🏻‍🍳|👩🏼‍🍳|👩🏽‍🍳|👩🏾‍🍳|👩🏿‍🍳|🧑🏻‍🔧|🧑🏼‍🔧|🧑🏽‍🔧|🧑🏾‍🔧|🧑🏿‍🔧|👨🏻‍🔧|👨🏼‍🔧|👨🏽‍🔧|👨🏾‍🔧|👨🏿‍🔧|👩🏻‍🔧|👩🏼‍🔧|👩🏽‍🔧|👩🏾‍🔧|👩🏿‍🔧|🧑🏻‍🏭|🧑🏼‍🏭|🧑🏽‍🏭|🧑🏾‍🏭|🧑🏿‍🏭|👨🏻‍🏭|👨🏼‍🏭|👨🏽‍🏭|👨🏾‍🏭|👨🏿‍🏭|👩🏻‍🏭|👩🏼‍🏭|👩🏽‍🏭|👩🏾‍🏭|👩🏿‍🏭|🧑🏻‍💼|🧑🏼‍💼|🧑🏽‍💼|🧑🏾‍💼|🧑🏿‍💼|👨🏻‍💼|👨🏼‍💼|👨🏽‍💼|👨🏾‍💼|👨🏿‍💼|👩🏻‍💼|👩🏼‍💼|👩🏽‍💼|👩🏾‍💼|👩🏿‍💼|🧑🏻‍🔬|🧑🏼‍🔬|🧑🏽‍🔬|🧑🏾‍🔬|🧑🏿‍🔬|👨🏻‍🔬|👨🏼‍🔬|👨🏽‍🔬|👨🏾‍🔬|👨🏿‍🔬|👩🏻‍🔬|👩🏼‍🔬|👩🏽‍🔬|👩🏾‍🔬|👩🏿‍🔬|🧑🏻‍💻|🧑🏼‍💻|🧑🏽‍💻|🧑🏾‍💻|🧑🏿‍💻|👨🏻‍💻|👨🏼‍💻|👨🏽‍💻|👨🏾‍💻|👨🏿‍💻|👩🏻‍💻|👩🏼‍💻|👩🏽‍💻|👩🏾‍💻|👩🏿‍💻|🧑🏻‍🎤|🧑🏼‍🎤|🧑🏽‍🎤|🧑🏾‍🎤|🧑🏿‍🎤|👨🏻‍🎤|👨🏼‍🎤|👨🏽‍🎤|👨🏾‍🎤|👨🏿‍🎤|👩🏻‍🎤|👩🏼‍🎤|👩🏽‍🎤|👩🏾‍🎤|👩🏿‍🎤|🧑🏻‍🎨|🧑🏼‍🎨|🧑🏽‍🎨|🧑🏾‍🎨|🧑🏿‍🎨|👨🏻‍🎨|👨🏼‍🎨|👨🏽‍🎨|👨🏾‍🎨|👨🏿‍🎨|👩🏻‍🎨|👩🏼‍🎨|👩🏽‍🎨|👩🏾‍🎨|👩🏿‍🎨|🧑🏻‍✈️|🧑🏼‍✈️|🧑🏽‍✈️|🧑🏾‍✈️|🧑🏿‍✈️|👨🏻‍✈️|👨🏼‍✈️|👨🏽‍✈️|👨🏾‍✈️|👨🏿‍✈️|👩🏻‍✈️|👩🏼‍✈️|👩🏽‍✈️|👩🏾‍✈️|👩🏿‍✈️|🧑🏻‍🚀|🧑🏼‍🚀|🧑🏽‍🚀|🧑🏾‍🚀|🧑🏿‍🚀|👨🏻‍🚀|👨🏼‍🚀|👨🏽‍🚀|👨🏾‍🚀|👨🏿‍🚀|👩🏻‍🚀|👩🏼‍🚀|👩🏽‍🚀|👩🏾‍🚀|👩🏿‍🚀|🧑🏻‍🚒|🧑🏼‍🚒|🧑🏽‍🚒|🧑🏾‍🚒|🧑🏿‍🚒|👨🏻‍🚒|👨🏼‍🚒|👨🏽‍🚒|👨🏾‍🚒|👨🏿‍🚒|👩🏻‍🚒|👩🏼‍🚒|👩🏽‍🚒|👩🏾‍🚒|👩🏿‍🚒|👮🏻‍♂️|👮🏼‍♂️|👮🏽‍♂️|👮🏾‍♂️|👮🏿‍♂️|👮🏻‍♀️|👮🏼‍♀️|👮🏽‍♀️|👮🏾‍♀️|👮🏿‍♀️|🕵🏻‍♂️|🕵🏼‍♂️|🕵🏽‍♂️|🕵🏾‍♂️|🕵🏿‍♂️|🕵🏻‍♀️|🕵🏼‍♀️|🕵🏽‍♀️|🕵🏾‍♀️|🕵🏿‍♀️|💂🏻‍♂️|💂🏼‍♂️|💂🏽‍♂️|💂🏾‍♂️|💂🏿‍♂️|💂🏻‍♀️|💂🏼‍♀️|💂🏽‍♀️|💂🏾‍♀️|💂🏿‍♀️|👷🏻‍♂️|👷🏼‍♂️|👷🏽‍♂️|👷🏾‍♂️|👷🏿‍♂️|👷🏻‍♀️|👷🏼‍♀️|👷🏽‍♀️|👷🏾‍♀️|👷🏿‍♀️|👳🏻‍♂️|👳🏼‍♂️|👳🏽‍♂️|👳🏾‍♂️|👳🏿‍♂️|👳🏻‍♀️|👳🏼‍♀️|👳🏽‍♀️|👳🏾‍♀️|👳🏿‍♀️|🤵🏻‍♂️|🤵🏼‍♂️|🤵🏽‍♂️|🤵🏾‍♂️|🤵🏿‍♂️|🤵🏻‍♀️|🤵🏼‍♀️|🤵🏽‍♀️|🤵🏾‍♀️|🤵🏿‍♀️|👰🏻‍♂️|👰🏼‍♂️|👰🏽‍♂️|👰🏾‍♂️|👰🏿‍♂️|👰🏻‍♀️|👰🏼‍♀️|👰🏽‍♀️|👰🏾‍♀️|👰🏿‍♀️|👩🏻‍🍼|👩🏼‍🍼|👩🏽‍🍼|👩🏾‍🍼|👩🏿‍🍼|👨🏻‍🍼|👨🏼‍🍼|👨🏽‍🍼|👨🏾‍🍼|👨🏿‍🍼|🧑🏻‍🍼|🧑🏼‍🍼|🧑🏽‍🍼|🧑🏾‍🍼|🧑🏿‍🍼|🧑🏻‍🎄|🧑🏼‍🎄|🧑🏽‍🎄|🧑🏾‍🎄|🧑🏿‍🎄|🦸🏻‍♂️|🦸🏼‍♂️|🦸🏽‍♂️|🦸🏾‍♂️|🦸🏿‍♂️|🦸🏻‍♀️|🦸🏼‍♀️|🦸🏽‍♀️|🦸🏾‍♀️|🦸🏿‍♀️|🦹🏻‍♂️|🦹🏼‍♂️|🦹🏽‍♂️|🦹🏾‍♂️|🦹🏿‍♂️|🦹🏻‍♀️|🦹🏼‍♀️|🦹🏽‍♀️|🦹🏾‍♀️|🦹🏿‍♀️|🧙🏻‍♂️|🧙🏼‍♂️|🧙🏽‍♂️|🧙🏾‍♂️|🧙🏿‍♂️|🧙🏻‍♀️|🧙🏼‍♀️|🧙🏽‍♀️|🧙🏾‍♀️|🧙🏿‍♀️|🧚🏻‍♂️|🧚🏼‍♂️|🧚🏽‍♂️|🧚🏾‍♂️|🧚🏿‍♂️|🧚🏻‍♀️|🧚🏼‍♀️|🧚🏽‍♀️|🧚🏾‍♀️|🧚🏿‍♀️|🧛🏻‍♂️|🧛🏼‍♂️|🧛🏽‍♂️|🧛🏾‍♂️|🧛🏿‍♂️|🧛🏻‍♀️|🧛🏼‍♀️|🧛🏽‍♀️|🧛🏾‍♀️|🧛🏿‍♀️|🧜🏻‍♂️|🧜🏼‍♂️|🧜🏽‍♂️|🧜🏾‍♂️|🧜🏿‍♂️|🧜🏻‍♀️|🧜🏼‍♀️|🧜🏽‍♀️|🧜🏾‍♀️|🧜🏿‍♀️|🧝🏻‍♂️|🧝🏼‍♂️|🧝🏽‍♂️|🧝🏾‍♂️|🧝🏿‍♂️|🧝🏻‍♀️|🧝🏼‍♀️|🧝🏽‍♀️|🧝🏾‍♀️|🧝🏿‍♀️|💆🏻‍♂️|💆🏼‍♂️|💆🏽‍♂️|💆🏾‍♂️|💆🏿‍♂️|💆🏻‍♀️|💆🏼‍♀️|💆🏽‍♀️|💆🏾‍♀️|💆🏿‍♀️|💇🏻‍♂️|💇🏼‍♂️|💇🏽‍♂️|💇🏾‍♂️|💇🏿‍♂️|💇🏻‍♀️|💇🏼‍♀️|💇🏽‍♀️|💇🏾‍♀️|💇🏿‍♀️|🚶🏻‍♂️|🚶🏼‍♂️|🚶🏽‍♂️|🚶🏾‍♂️|🚶🏿‍♂️|🚶🏻‍♀️|🚶🏼‍♀️|🚶🏽‍♀️|🚶🏾‍♀️|🚶🏿‍♀️|🚶🏻‍➡️|🚶🏼‍➡️|🚶🏽‍➡️|🚶🏾‍➡️|🚶🏿‍➡️|🧍🏻‍♂️|🧍🏼‍♂️|🧍🏽‍♂️|🧍🏾‍♂️|🧍🏿‍♂️|🧍🏻‍♀️|🧍🏼‍♀️|🧍🏽‍♀️|🧍🏾‍♀️|🧍🏿‍♀️|🧎🏻‍♂️|🧎🏼‍♂️|🧎🏽‍♂️|🧎🏾‍♂️|🧎🏿‍♂️|🧎🏻‍♀️|🧎🏼‍♀️|🧎🏽‍♀️|🧎🏾‍♀️|🧎🏿‍♀️|🧎🏻‍➡️|🧎🏼‍➡️|🧎🏽‍➡️|🧎🏾‍➡️|🧎🏿‍➡️|🧑🏻‍🦯|🧑🏼‍🦯|🧑🏽‍🦯|🧑🏾‍🦯|🧑🏿‍🦯|👨🏻‍🦯|👨🏼‍🦯|👨🏽‍🦯|👨🏾‍🦯|👨🏿‍🦯|👩🏻‍🦯|👩🏼‍🦯|👩🏽‍🦯|👩🏾‍🦯|👩🏿‍🦯|🧑🏻‍🦼|🧑🏼‍🦼|🧑🏽‍🦼|🧑🏾‍🦼|🧑🏿‍🦼|👨🏻‍🦼|👨🏼‍🦼|👨🏽‍🦼|👨🏾‍🦼|👨🏿‍🦼|👩🏻‍🦼|👩🏼‍🦼|👩🏽‍🦼|👩🏾‍🦼|👩🏿‍🦼|🧑🏻‍🦽|🧑🏼‍🦽|🧑🏽‍🦽|🧑🏾‍🦽|🧑🏿‍🦽|👨🏻‍🦽|👨🏼‍🦽|👨🏽‍🦽|👨🏾‍🦽|👨🏿‍🦽|👩🏻‍🦽|👩🏼‍🦽|👩🏽‍🦽|👩🏾‍🦽|👩🏿‍🦽|🏃🏻‍♂️|🏃🏼‍♂️|🏃🏽‍♂️|🏃🏾‍♂️|🏃🏿‍♂️|🏃🏻‍♀️|🏃🏼‍♀️|🏃🏽‍♀️|🏃🏾‍♀️|🏃🏿‍♀️|🏃🏻‍➡️|🏃🏼‍➡️|🏃🏽‍➡️|🏃🏾‍➡️|🏃🏿‍➡️|🧖🏻‍♂️|🧖🏼‍♂️|🧖🏽‍♂️|🧖🏾‍♂️|🧖🏿‍♂️|🧖🏻‍♀️|🧖🏼‍♀️|🧖🏽‍♀️|🧖🏾‍♀️|🧖🏿‍♀️|🧗🏻‍♂️|🧗🏼‍♂️|🧗🏽‍♂️|🧗🏾‍♂️|🧗🏿‍♂️|🧗🏻‍♀️|🧗🏼‍♀️|🧗🏽‍♀️|🧗🏾‍♀️|🧗🏿‍♀️|🏌🏻‍♂️|🏌🏼‍♂️|🏌🏽‍♂️|🏌🏾‍♂️|🏌🏿‍♂️|🏌🏻‍♀️|🏌🏼‍♀️|🏌🏽‍♀️|🏌🏾‍♀️|🏌🏿‍♀️|🏄🏻‍♂️|🏄🏼‍♂️|🏄🏽‍♂️|🏄🏾‍♂️|🏄🏿‍♂️|🏄🏻‍♀️|🏄🏼‍♀️|🏄🏽‍♀️|🏄🏾‍♀️|🏄🏿‍♀️|🚣🏻‍♂️|🚣🏼‍♂️|🚣🏽‍♂️|🚣🏾‍♂️|🚣🏿‍♂️|🚣🏻‍♀️|🚣🏼‍♀️|🚣🏽‍♀️|🚣🏾‍♀️|🚣🏿‍♀️|🏊🏻‍♂️|🏊🏼‍♂️|🏊🏽‍♂️|🏊🏾‍♂️|🏊🏿‍♂️|🏊🏻‍♀️|🏊🏼‍♀️|🏊🏽‍♀️|🏊🏾‍♀️|🏊🏿‍♀️|🏋🏻‍♂️|🏋🏼‍♂️|🏋🏽‍♂️|🏋🏾‍♂️|🏋🏿‍♂️|🏋🏻‍♀️|🏋🏼‍♀️|🏋🏽‍♀️|🏋🏾‍♀️|🏋🏿‍♀️|🚴🏻‍♂️|🚴🏼‍♂️|🚴🏽‍♂️|🚴🏾‍♂️|🚴🏿‍♂️|🚴🏻‍♀️|🚴🏼‍♀️|🚴🏽‍♀️|🚴🏾‍♀️|🚴🏿‍♀️|🚵🏻‍♂️|🚵🏼‍♂️|🚵🏽‍♂️|🚵🏾‍♂️|🚵🏿‍♂️|🚵🏻‍♀️|🚵🏼‍♀️|🚵🏽‍♀️|🚵🏾‍♀️|🚵🏿‍♀️|🤸🏻‍♂️|🤸🏼‍♂️|🤸🏽‍♂️|🤸🏾‍♂️|🤸🏿‍♂️|🤸🏻‍♀️|🤸🏼‍♀️|🤸🏽‍♀️|🤸🏾‍♀️|🤸🏿‍♀️|🤽🏻‍♂️|🤽🏼‍♂️|🤽🏽‍♂️|🤽🏾‍♂️|🤽🏿‍♂️|🤽🏻‍♀️|🤽🏼‍♀️|🤽🏽‍♀️|🤽🏾‍♀️|🤽🏿‍♀️|🤾🏻‍♂️|🤾🏼‍♂️|🤾🏽‍♂️|🤾🏾‍♂️|🤾🏿‍♂️|🤾🏻‍♀️|🤾🏼‍♀️|🤾🏽‍♀️|🤾🏾‍♀️|🤾🏿‍♀️|🤹🏻‍♂️|🤹🏼‍♂️|🤹🏽‍♂️|🤹🏾‍♂️|🤹🏿‍♂️|🤹🏻‍♀️|🤹🏼‍♀️|🤹🏽‍♀️|🤹🏾‍♀️|🤹🏿‍♀️|🧘🏻‍♂️|🧘🏼‍♂️|🧘🏽‍♂️|🧘🏾‍♂️|🧘🏿‍♂️|🧘🏻‍♀️|🧘🏼‍♀️|🧘🏽‍♀️|🧘🏾‍♀️|🧘🏿‍♀️|😶‍🌫️|🕵️‍♂️|🕵️‍♀️|🏌️‍♂️|🏌️‍♀️|🏋️‍♂️|🏋️‍♀️|🏳️‍🌈|🏳️‍⚧️|⛹🏻‍♂️|⛹🏼‍♂️|⛹🏽‍♂️|⛹🏾‍♂️|⛹🏿‍♂️|⛹🏻‍♀️|⛹🏼‍♀️|⛹🏽‍♀️|⛹🏾‍♀️|⛹🏿‍♀️|😮‍💨|🙂‍↔️|🙂‍↕️|😵‍💫|❤️‍🔥|❤️‍🩹|🧔‍♂️|🧔‍♀️|👨‍🦰|👨‍🦱|👨‍🦳|👨‍🦲|👩‍🦰|🧑‍🦰|👩‍🦱|🧑‍🦱|👩‍🦳|🧑‍🦳|👩‍🦲|🧑‍🦲|👱‍♀️|👱‍♂️|🙍‍♂️|🙍‍♀️|🙎‍♂️|🙎‍♀️|🙅‍♂️|🙅‍♀️|🙆‍♂️|🙆‍♀️|💁‍♂️|💁‍♀️|🙋‍♂️|🙋‍♀️|🧏‍♂️|🧏‍♀️|🙇‍♂️|🙇‍♀️|🤦‍♂️|🤦‍♀️|🤷‍♂️|🤷‍♀️|🧑‍⚕️|👨‍⚕️|👩‍⚕️|🧑‍🎓|👨‍🎓|👩‍🎓|🧑‍🏫|👨‍🏫|👩‍🏫|🧑‍⚖️|👨‍⚖️|👩‍⚖️|🧑‍🌾|👨‍🌾|👩‍🌾|🧑‍🍳|👨‍🍳|👩‍🍳|🧑‍🔧|👨‍🔧|👩‍🔧|🧑‍🏭|👨‍🏭|👩‍🏭|🧑‍💼|👨‍💼|👩‍💼|🧑‍🔬|👨‍🔬|👩‍🔬|🧑‍💻|👨‍💻|👩‍💻|🧑‍🎤|👨‍🎤|👩‍🎤|🧑‍🎨|👨‍🎨|👩‍🎨|🧑‍✈️|👨‍✈️|👩‍✈️|🧑‍🚀|👨‍🚀|👩‍🚀|🧑‍🚒|👨‍🚒|👩‍🚒|👮‍♂️|👮‍♀️|💂‍♂️|💂‍♀️|👷‍♂️|👷‍♀️|👳‍♂️|👳‍♀️|🤵‍♂️|🤵‍♀️|👰‍♂️|👰‍♀️|👩‍🍼|👨‍🍼|🧑‍🍼|🧑‍🎄|🦸‍♂️|🦸‍♀️|🦹‍♂️|🦹‍♀️|🧙‍♂️|🧙‍♀️|🧚‍♂️|🧚‍♀️|🧛‍♂️|🧛‍♀️|🧜‍♂️|🧜‍♀️|🧝‍♂️|🧝‍♀️|🧞‍♂️|🧞‍♀️|🧟‍♂️|🧟‍♀️|💆‍♂️|💆‍♀️|💇‍♂️|💇‍♀️|🚶‍♂️|🚶‍♀️|🚶‍➡️|🧍‍♂️|🧍‍♀️|🧎‍♂️|🧎‍♀️|🧎‍➡️|🧑‍🦯|👨‍🦯|👩‍🦯|🧑‍🦼|👨‍🦼|👩‍🦼|🧑‍🦽|👨‍🦽|👩‍🦽|🏃‍♂️|🏃‍♀️|🏃‍➡️|👯‍♂️|👯‍♀️|🧖‍♂️|🧖‍♀️|🧗‍♂️|🧗‍♀️|🏄‍♂️|🏄‍♀️|🚣‍♂️|🚣‍♀️|🏊‍♂️|🏊‍♀️|⛹️‍♂️|⛹️‍♀️|🚴‍♂️|🚴‍♀️|🚵‍♂️|🚵‍♀️|🤸‍♂️|🤸‍♀️|🤼‍♂️|🤼‍♀️|🤽‍♂️|🤽‍♀️|🤾‍♂️|🤾‍♀️|🤹‍♂️|🤹‍♀️|🧘‍♂️|🧘‍♀️|👨‍👦|👨‍👧|👩‍👦|👩‍👧|🧑‍🧒|🐕‍🦺|🐻‍❄️|🐦‍🔥|🍋‍🟩|🍄‍🟫|⛓️‍💥|🏴‍☠️|🐈‍⬛|🐦‍⬛|🇦🇨|🇦🇩|🇦🇪|🇦🇫|🇦🇬|🇦🇮|🇦🇱|🇦🇲|🇦🇴|🇦🇶|🇦🇷|🇦🇸|🇦🇹|🇦🇺|🇦🇼|🇦🇽|🇦🇿|🇧🇦|🇧🇧|🇧🇩|🇧🇪|🇧🇫|🇧🇬|🇧🇭|🇧🇮|🇧🇯|🇧🇱|🇧🇲|🇧🇳|🇧🇴|🇧🇶|🇧🇷|🇧🇸|🇧🇹|🇧🇻|🇧🇼|🇧🇾|🇧🇿|🇨🇦|🇨🇨|🇨🇩|🇨🇫|🇨🇬|🇨🇭|🇨🇮|🇨🇰|🇨🇱|🇨🇲|🇨🇳|🇨🇴|🇨🇵|🇨🇷|🇨🇺|🇨🇻|🇨🇼|🇨🇽|🇨🇾|🇨🇿|🇩🇪|🇩🇬|🇩🇯|🇩🇰|🇩🇲|🇩🇴|🇩🇿|🇪🇦|🇪🇨|🇪🇪|🇪🇬|🇪🇭|🇪🇷|🇪🇸|🇪🇹|🇪🇺|🇫🇮|🇫🇯|🇫🇰|🇫🇲|🇫🇴|🇫🇷|🇬🇦|🇬🇧|🇬🇩|🇬🇪|🇬🇫|🇬🇬|🇬🇭|🇬🇮|🇬🇱|🇬🇲|🇬🇳|🇬🇵|🇬🇶|🇬🇷|🇬🇸|🇬🇹|🇬🇺|🇬🇼|🇬🇾|🇭🇰|🇭🇲|🇭🇳|🇭🇷|🇭🇹|🇭🇺|🇮🇨|🇮🇩|🇮🇪|🇮🇱|🇮🇲|🇮🇳|🇮🇴|🇮🇶|🇮🇷|🇮🇸|🇮🇹|🇯🇪|🇯🇲|🇯🇴|🇯🇵|🇰🇪|🇰🇬|🇰🇭|🇰🇮|🇰🇲|🇰🇳|🇰🇵|🇰🇷|🇰🇼|🇰🇾|🇰🇿|🇱🇦|🇱🇧|🇱🇨|🇱🇮|🇱🇰|🇱🇷|🇱🇸|🇱🇹|🇱🇺|🇱🇻|🇱🇾|🇲🇦|🇲🇨|🇲🇩|🇲🇪|🇲🇫|🇲🇬|🇲🇭|🇲🇰|🇲🇱|🇲🇲|🇲🇳|🇲🇴|🇲🇵|🇲🇶|🇲🇷|🇲🇸|🇲🇹|🇲🇺|🇲🇻|🇲🇼|🇲🇽|🇲🇾|🇲🇿|🇳🇦|🇳🇨|🇳🇪|🇳🇫|🇳🇬|🇳🇮|🇳🇱|🇳🇴|🇳🇵|🇳🇷|🇳🇺|🇳🇿|🇴🇲|🇵🇦|🇵🇪|🇵🇫|🇵🇬|🇵🇭|🇵🇰|🇵🇱|🇵🇲|🇵🇳|🇵🇷|🇵🇸|🇵🇹|🇵🇼|🇵🇾|🇶🇦|🇷🇪|🇷🇴|🇷🇸|🇷🇺|🇷🇼|🇸🇦|🇸🇧|🇸🇨|🇸🇩|🇸🇪|🇸🇬|🇸🇭|🇸🇮|🇸🇯|🇸🇰|🇸🇱|🇸🇲|🇸🇳|🇸🇴|🇸🇷|🇸🇸|🇸🇹|🇸🇻|🇸🇽|🇸🇾|🇸🇿|🇹🇦|🇹🇨|🇹🇩|🇹🇫|🇹🇬|🇹🇭|🇹🇯|🇹🇰|🇹🇱|🇹🇲|🇹🇳|🇹🇴|🇹🇷|🇹🇹|🇹🇻|🇹🇼|🇹🇿|🇺🇦|🇺🇬|🇺🇲|🇺🇳|🇺🇸|🇺🇾|🇺🇿|🇻🇦|🇻🇨|🇻🇪|🇻🇬|🇻🇮|🇻🇳|🇻🇺|🇼🇫|🇼🇸|🇽🇰|🇾🇪|🇾🇹|🇿🇦|🇿🇲|🇿🇼|👋🏻|👋🏼|👋🏽|👋🏾|👋🏿|🤚🏻|🤚🏼|🤚🏽|🤚🏾|🤚🏿|🖐🏻|🖐🏼|🖐🏽|🖐🏾|🖐🏿|🖖🏻|🖖🏼|🖖🏽|🖖🏾|🖖🏿|🫱🏻|🫱🏼|🫱🏽|🫱🏾|🫱🏿|🫲🏻|🫲🏼|🫲🏽|🫲🏾|🫲🏿|🫳🏻|🫳🏼|🫳🏽|🫳🏾|🫳🏿|🫴🏻|🫴🏼|🫴🏽|🫴🏾|🫴🏿|🫷🏻|🫷🏼|🫷🏽|🫷🏾|🫷🏿|🫸🏻|🫸🏼|🫸🏽|🫸🏾|🫸🏿|👌🏻|👌🏼|👌🏽|👌🏾|👌🏿|🤌🏻|🤌🏼|🤌🏽|🤌🏾|🤌🏿|🤏🏻|🤏🏼|🤏🏽|🤏🏾|🤏🏿|🤞🏻|🤞🏼|🤞🏽|🤞🏾|🤞🏿|🫰🏻|🫰🏼|🫰🏽|🫰🏾|🫰🏿|🤟🏻|🤟🏼|🤟🏽|🤟🏾|🤟🏿|🤘🏻|🤘🏼|🤘🏽|🤘🏾|🤘🏿|🤙🏻|🤙🏼|🤙🏽|🤙🏾|🤙🏿|👈🏻|👈🏼|👈🏽|👈🏾|👈🏿|👉🏻|👉🏼|👉🏽|👉🏾|👉🏿|👆🏻|👆🏼|👆🏽|👆🏾|👆🏿|🖕🏻|🖕🏼|🖕🏽|🖕🏾|🖕🏿|👇🏻|👇🏼|👇🏽|👇🏾|👇🏿|🫵🏻|🫵🏼|🫵🏽|🫵🏾|🫵🏿|👍🏻|👍🏼|👍🏽|👍🏾|👍🏿|👎🏻|👎🏼|👎🏽|👎🏾|👎🏿|👊🏻|👊🏼|👊🏽|👊🏾|👊🏿|🤛🏻|🤛🏼|🤛🏽|🤛🏾|🤛🏿|🤜🏻|🤜🏼|🤜🏽|🤜🏾|🤜🏿|👏🏻|👏🏼|👏🏽|👏🏾|👏🏿|🙌🏻|🙌🏼|🙌🏽|🙌🏾|🙌🏿|🫶🏻|🫶🏼|🫶🏽|🫶🏾|🫶🏿|👐🏻|👐🏼|👐🏽|👐🏾|👐🏿|🤲🏻|🤲🏼|🤲🏽|🤲🏾|🤲🏿|🤝🏻|🤝🏼|🤝🏽|🤝🏾|🤝🏿|🙏🏻|🙏🏼|🙏🏽|🙏🏾|🙏🏿|💅🏻|💅🏼|💅🏽|💅🏾|💅🏿|🤳🏻|🤳🏼|🤳🏽|🤳🏾|🤳🏿|💪🏻|💪🏼|💪🏽|💪🏾|💪🏿|🦵🏻|🦵🏼|🦵🏽|🦵🏾|🦵🏿|🦶🏻|🦶🏼|🦶🏽|🦶🏾|🦶🏿|👂🏻|👂🏼|👂🏽|👂🏾|👂🏿|🦻🏻|🦻🏼|🦻🏽|🦻🏾|🦻🏿|👃🏻|👃🏼|👃🏽|👃🏾|👃🏿|👶🏻|👶🏼|👶🏽|👶🏾|👶🏿|🧒🏻|🧒🏼|🧒🏽|🧒🏾|🧒🏿|👦🏻|👦🏼|👦🏽|👦🏾|👦🏿|👧🏻|👧🏼|👧🏽|👧🏾|👧🏿|🧑🏻|🧑🏼|🧑🏽|🧑🏾|🧑🏿|👱🏻|👱🏼|👱🏽|👱🏾|👱🏿|👨🏻|👨🏼|👨🏽|👨🏾|👨🏿|🧔🏻|🧔🏼|🧔🏽|🧔🏾|🧔🏿|👩🏻|👩🏼|👩🏽|👩🏾|👩🏿|🧓🏻|🧓🏼|🧓🏽|🧓🏾|🧓🏿|👴🏻|👴🏼|👴🏽|👴🏾|👴🏿|👵🏻|👵🏼|👵🏽|👵🏾|👵🏿|🙍🏻|🙍🏼|🙍🏽|🙍🏾|🙍🏿|🙎🏻|🙎🏼|🙎🏽|🙎🏾|🙎🏿|🙅🏻|🙅🏼|🙅🏽|🙅🏾|🙅🏿|🙆🏻|🙆🏼|🙆🏽|🙆🏾|🙆🏿|💁🏻|💁🏼|💁🏽|💁🏾|💁🏿|🙋🏻|🙋🏼|🙋🏽|🙋🏾|🙋🏿|🧏🏻|🧏🏼|🧏🏽|🧏🏾|🧏🏿|🙇🏻|🙇🏼|🙇🏽|🙇🏾|🙇🏿|🤦🏻|🤦🏼|🤦🏽|🤦🏾|🤦🏿|🤷🏻|🤷🏼|🤷🏽|🤷🏾|🤷🏿|👮🏻|👮🏼|👮🏽|👮🏾|👮🏿|🕵🏻|🕵🏼|🕵🏽|🕵🏾|🕵🏿|💂🏻|💂🏼|💂🏽|💂🏾|💂🏿|🥷🏻|🥷🏼|🥷🏽|🥷🏾|🥷🏿|👷🏻|👷🏼|👷🏽|👷🏾|👷🏿|🫅🏻|🫅🏼|🫅🏽|🫅🏾|🫅🏿|🤴🏻|🤴🏼|🤴🏽|🤴🏾|🤴🏿|👸🏻|👸🏼|👸🏽|👸🏾|👸🏿|👳🏻|👳🏼|👳🏽|👳🏾|👳🏿|👲🏻|👲🏼|👲🏽|👲🏾|👲🏿|🧕🏻|🧕🏼|🧕🏽|🧕🏾|🧕🏿|🤵🏻|🤵🏼|🤵🏽|🤵🏾|🤵🏿|👰🏻|👰🏼|👰🏽|👰🏾|👰🏿|🤰🏻|🤰🏼|🤰🏽|🤰🏾|🤰🏿|🫃🏻|🫃🏼|🫃🏽|🫃🏾|🫃🏿|🫄🏻|🫄🏼|🫄🏽|🫄🏾|🫄🏿|🤱🏻|🤱🏼|🤱🏽|🤱🏾|🤱🏿|👼🏻|👼🏼|👼🏽|👼🏾|👼🏿|🎅🏻|🎅🏼|🎅🏽|🎅🏾|🎅🏿|🤶🏻|🤶🏼|🤶🏽|🤶🏾|🤶🏿|🦸🏻|🦸🏼|🦸🏽|🦸🏾|🦸🏿|🦹🏻|🦹🏼|🦹🏽|🦹🏾|🦹🏿|🧙🏻|🧙🏼|🧙🏽|🧙🏾|🧙🏿|🧚🏻|🧚🏼|🧚🏽|🧚🏾|🧚🏿|🧛🏻|🧛🏼|🧛🏽|🧛🏾|🧛🏿|🧜🏻|🧜🏼|🧜🏽|🧜🏾|🧜🏿|🧝🏻|🧝🏼|🧝🏽|🧝🏾|🧝🏿|💆🏻|💆🏼|💆🏽|💆🏾|💆🏿|💇🏻|💇🏼|💇🏽|💇🏾|💇🏿|🚶🏻|🚶🏼|🚶🏽|🚶🏾|🚶🏿|🧍🏻|🧍🏼|🧍🏽|🧍🏾|🧍🏿|🧎🏻|🧎🏼|🧎🏽|🧎🏾|🧎🏿|🏃🏻|🏃🏼|🏃🏽|🏃🏾|🏃🏿|💃🏻|💃🏼|💃🏽|💃🏾|💃🏿|🕺🏻|🕺🏼|🕺🏽|🕺🏾|🕺🏿|🕴🏻|🕴🏼|🕴🏽|🕴🏾|🕴🏿|🧖🏻|🧖🏼|🧖🏽|🧖🏾|🧖🏿|🧗🏻|🧗🏼|🧗🏽|🧗🏾|🧗🏿|🏇🏻|🏇🏼|🏇🏽|🏇🏾|🏇🏿|🏂🏻|🏂🏼|🏂🏽|🏂🏾|🏂🏿|🏌🏻|🏌🏼|🏌🏽|🏌🏾|🏌🏿|🏄🏻|🏄🏼|🏄🏽|🏄🏾|🏄🏿|🚣🏻|🚣🏼|🚣🏽|🚣🏾|🚣🏿|🏊🏻|🏊🏼|🏊🏽|🏊🏾|🏊🏿|🏋🏻|🏋🏼|🏋🏽|🏋🏾|🏋🏿|🚴🏻|🚴🏼|🚴🏽|🚴🏾|🚴🏿|🚵🏻|🚵🏼|🚵🏽|🚵🏾|🚵🏿|🤸🏻|🤸🏼|🤸🏽|🤸🏾|🤸🏿|🤽🏻|🤽🏼|🤽🏽|🤽🏾|🤽🏿|🤾🏻|🤾🏼|🤾🏽|🤾🏾|🤾🏿|🤹🏻|🤹🏼|🤹🏽|🤹🏾|🤹🏿|🧘🏻|🧘🏼|🧘🏽|🧘🏾|🧘🏿|🛀🏻|🛀🏼|🛀🏽|🛀🏾|🛀🏿|🛌🏻|🛌🏼|🛌🏽|🛌🏾|🛌🏿|👭🏻|👭🏼|👭🏽|👭🏾|👭🏿|👫🏻|👫🏼|👫🏽|👫🏾|👫🏿|👬🏻|👬🏼|👬🏽|👬🏾|👬🏿|💏🏻|💏🏼|💏🏽|💏🏾|💏🏿|💑🏻|💑🏼|💑🏽|💑🏾|💑🏿|#️⃣|\u002a️⃣|0️⃣|1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|7️⃣|8️⃣|9️⃣|✋🏻|✋🏼|✋🏽|✋🏾|✋🏿|✌🏻|✌🏼|✌🏽|✌🏾|✌🏿|☝🏻|☝🏼|☝🏽|☝🏾|☝🏿|✊🏻|✊🏼|✊🏽|✊🏾|✊🏿|✍🏻|✍🏼|✍🏽|✍🏾|✍🏿|⛹🏻|⛹🏼|⛹🏽|⛹🏾|⛹🏿|😀|😃|😄|😁|😆|😅|🤣|😂|🙂|🙃|🫠|😉|😊|😇|🥰|😍|🤩|😘|😗|😚|😙|🥲|😋|😛|😜|🤪|😝|🤑|🤗|🤭|🫢|🫣|🤫|🤔|🫡|🤐|🤨|😐|😑|😶|🫥|😏|😒|🙄|😬|🤥|🫨|😌|😔|😪|🤤|😴|😷|🤒|🤕|🤢|🤮|🤧|🥵|🥶|🥴|😵|🤯|🤠|🥳|🥸|😎|🤓|🧐|😕|🫤|😟|🙁|😮|😯|😲|😳|🥺|🥹|😦|😧|😨|😰|😥|😢|😭|😱|😖|😣|😞|😓|😩|😫|🥱|😤|😡|😠|🤬|😈|👿|💀|💩|🤡|👹|👺|👻|👽|👾|🤖|😺|😸|😹|😻|😼|😽|🙀|😿|😾|🙈|🙉|🙊|💌|💘|💝|💖|💗|💓|💞|💕|💟|💔|🩷|🧡|💛|💚|💙|🩵|💜|🤎|🖤|🩶|🤍|💋|💯|💢|💥|💫|💦|💨|🕳|💬|🗨|🗯|💭|💤|👋|🤚|🖐|🖖|🫱|🫲|🫳|🫴|🫷|🫸|👌|🤌|🤏|🤞|🫰|🤟|🤘|🤙|👈|👉|👆|🖕|👇|🫵|👍|👎|👊|🤛|🤜|👏|🙌|🫶|👐|🤲|🤝|🙏|💅|🤳|💪|🦾|🦿|🦵|🦶|👂|🦻|👃|🧠|🫀|🫁|🦷|🦴|👀|👁|👅|👄|🫦|👶|🧒|👦|👧|🧑|👱|👨|🧔|👩|🧓|👴|👵|🙍|🙎|🙅|🙆|💁|🙋|🧏|🙇|🤦|🤷|👮|🕵|💂|🥷|👷|🫅|🤴|👸|👳|👲|🧕|🤵|👰|🤰|🫃|🫄|🤱|👼|🎅|🤶|🦸|🦹|🧙|🧚|🧛|🧜|🧝|🧞|🧟|🧌|💆|💇|🚶|🧍|🧎|🏃|💃|🕺|🕴|👯|🧖|🧗|🤺|🏇|🏂|🏌|🏄|🚣|🏊|🏋|🚴|🚵|🤸|🤼|🤽|🤾|🤹|🧘|🛀|🛌|👭|👫|👬|💏|💑|🗣|👤|👥|🫂|👪|👣|🦰|🦱|🦳|🦲|🐵|🐒|🦍|🦧|🐶|🐕|🦮|🐩|🐺|🦊|🦝|🐱|🐈|🦁|🐯|🐅|🐆|🐴|🫎|🫏|🐎|🦄|🦓|🦌|🦬|🐮|🐂|🐃|🐄|🐷|🐖|🐗|🐽|🐏|🐑|🐐|🐪|🐫|🦙|🦒|🐘|🦣|🦏|🦛|🐭|🐁|🐀|🐹|🐰|🐇|🐿|🦫|🦔|🦇|🐻|🐨|🐼|🦥|🦦|🦨|🦘|🦡|🐾|🦃|🐔|🐓|🐣|🐤|🐥|🐦|🐧|🕊|🦅|🦆|🦢|🦉|🦤|🪶|🦩|🦚|🦜|🪽|🪿|🐸|🐊|🐢|🦎|🐍|🐲|🐉|🦕|🦖|🐳|🐋|🐬|🦭|🐟|🐠|🐡|🦈|🐙|🐚|🪸|🪼|🐌|🦋|🐛|🐜|🐝|🪲|🐞|🦗|🪳|🕷|🕸|🦂|🦟|🪰|🪱|🦠|💐|🌸|💮|🪷|🏵|🌹|🥀|🌺|🌻|🌼|🌷|🪻|🌱|🪴|🌲|🌳|🌴|🌵|🌾|🌿|🍀|🍁|🍂|🍃|🪹|🪺|🍄|🍇|🍈|🍉|🍊|🍋|🍌|🍍|🥭|🍎|🍏|🍐|🍑|🍒|🍓|🫐|🥝|🍅|🫒|🥥|🥑|🍆|🥔|🥕|🌽|🌶|🫑|🥒|🥬|🥦|🧄|🧅|🥜|🫘|🌰|🫚|🫛|🍞|🥐|🥖|🫓|🥨|🥯|🥞|🧇|🧀|🍖|🍗|🥩|🥓|🍔|🍟|🍕|🌭|🥪|🌮|🌯|🫔|🥙|🧆|🥚|🍳|🥘|🍲|🫕|🥣|🥗|🍿|🧈|🧂|🥫|🍱|🍘|🍙|🍚|🍛|🍜|🍝|🍠|🍢|🍣|🍤|🍥|🥮|🍡|🥟|🥠|🥡|🦀|🦞|🦐|🦑|🦪|🍦|🍧|🍨|🍩|🍪|🎂|🍰|🧁|🥧|🍫|🍬|🍭|🍮|🍯|🍼|🥛|🫖|🍵|🍶|🍾|🍷|🍸|🍹|🍺|🍻|🥂|🥃|🫗|🥤|🧋|🧃|🧉|🧊|🥢|🍽|🍴|🥄|🔪|🫙|🏺|🌍|🌎|🌏|🌐|🗺|🗾|🧭|🏔|🌋|🗻|🏕|🏖|🏜|🏝|🏞|🏟|🏛|🏗|🧱|🪨|🪵|🛖|🏘|🏚|🏠|🏡|🏢|🏣|🏤|🏥|🏦|🏨|🏩|🏪|🏫|🏬|🏭|🏯|🏰|💒|🗼|🗽|🕌|🛕|🕍|🕋|🌁|🌃|🏙|🌄|🌅|🌆|🌇|🌉|🎠|🛝|🎡|🎢|💈|🎪|🚂|🚃|🚄|🚅|🚆|🚇|🚈|🚉|🚊|🚝|🚞|🚋|🚌|🚍|🚎|🚐|🚑|🚒|🚓|🚔|🚕|🚖|🚗|🚘|🚙|🛻|🚚|🚛|🚜|🏎|🏍|🛵|🦽|🦼|🛺|🚲|🛴|🛹|🛼|🚏|🛣|🛤|🛢|🛞|🚨|🚥|🚦|🛑|🚧|🛟|🛶|🚤|🛳|🛥|🚢|🛩|🛫|🛬|🪂|💺|🚁|🚟|🚠|🚡|🛰|🚀|🛸|🛎|🧳|🕰|🕛|🕧|🕐|🕜|🕑|🕝|🕒|🕞|🕓|🕟|🕔|🕠|🕕|🕡|🕖|🕢|🕗|🕣|🕘|🕤|🕙|🕥|🕚|🕦|🌑|🌒|🌓|🌔|🌕|🌖|🌗|🌘|🌙|🌚|🌛|🌜|🌡|🌝|🌞|🪐|🌟|🌠|🌌|🌤|🌥|🌦|🌧|🌨|🌩|🌪|🌫|🌬|🌀|🌈|🌂|🔥|💧|🌊|🎃|🎄|🎆|🎇|🧨|🎈|🎉|🎊|🎋|🎍|🎎|🎏|🎐|🎑|🧧|🎀|🎁|🎗|🎟|🎫|🎖|🏆|🏅|🥇|🥈|🥉|🥎|🏀|🏐|🏈|🏉|🎾|🥏|🎳|🏏|🏑|🏒|🥍|🏓|🏸|🥊|🥋|🥅|🎣|🤿|🎽|🎿|🛷|🥌|🎯|🪀|🪁|🔫|🎱|🔮|🪄|🎮|🕹|🎰|🎲|🧩|🧸|🪅|🪩|🪆|🃏|🀄|🎴|🎭|🖼|🎨|🧵|🪡|🧶|🪢|👓|🕶|🥽|🥼|🦺|👔|👕|👖|🧣|🧤|🧥|🧦|👗|👘|🥻|🩱|🩲|🩳|👙|👚|🪭|👛|👜|👝|🛍|🎒|🩴|👞|👟|🥾|🥿|👠|👡|🩰|👢|🪮|👑|👒|🎩|🎓|🧢|🪖|📿|💄|💍|💎|🔇|🔈|🔉|🔊|📢|📣|📯|🔔|🔕|🎼|🎵|🎶|🎙|🎚|🎛|🎤|🎧|📻|🎷|🪗|🎸|🎹|🎺|🎻|🪕|🥁|🪘|🪇|🪈|📱|📲|📞|📟|📠|🔋|🪫|🔌|💻|🖥|🖨|🖱|🖲|💽|💾|💿|📀|🧮|🎥|🎞|📽|🎬|📺|📷|📸|📹|📼|🔍|🔎|🕯|💡|🔦|🏮|🪔|📔|📕|📖|📗|📘|📙|📚|📓|📒|📃|📜|📄|📰|🗞|📑|🔖|🏷|💰|🪙|💴|💵|💶|💷|💸|💳|🧾|💹|📧|📨|📩|📤|📥|📦|📫|📪|📬|📭|📮|🗳|🖋|🖊|🖌|🖍|📝|💼|📁|📂|🗂|📅|📆|🗒|🗓|📇|📈|📉|📊|📋|📌|📍|📎|🖇|📏|📐|🗃|🗄|🗑|🔒|🔓|🔏|🔐|🔑|🗝|🔨|🪓|🛠|🗡|💣|🪃|🏹|🛡|🪚|🔧|🪛|🔩|🗜|🦯|🔗|🪝|🧰|🧲|🪜|🧪|🧫|🧬|🔬|🔭|📡|💉|🩸|💊|🩹|🩼|🩺|🩻|🚪|🛗|🪞|🪟|🛏|🛋|🪑|🚽|🪠|🚿|🛁|🪤|🪒|🧴|🧷|🧹|🧺|🧻|🪣|🧼|🫧|🪥|🧽|🧯|🛒|🚬|🪦|🧿|🪬|🗿|🪧|🪪|🏧|🚮|🚰|🚹|🚺|🚻|🚼|🚾|🛂|🛃|🛄|🛅|🚸|🚫|🚳|🚭|🚯|🚱|🚷|📵|🔞|🔃|🔄|🔙|🔚|🔛|🔜|🔝|🛐|🕉|🕎|🔯|🪯|🔀|🔁|🔂|🔼|🔽|🎦|🔅|🔆|📶|🛜|📳|📴|🟰|💱|💲|🔱|📛|🔰|🔟|🔠|🔡|🔢|🔣|🔤|🅰|🆎|🅱|🆑|🆒|🆓|🆔|🆕|🆖|🅾|🆗|🅿|🆘|🆙|🆚|🈁|🈂|🈷|🈶|🈯|🉐|🈹|🈚|🈲|🉑|🈸|🈴|🈳|🈺|🈵|🔴|🟠|🟡|🟢|🔵|🟣|🟤|🟥|🟧|🟨|🟩|🟦|🟪|🟫|🔶|🔷|🔸|🔹|🔺|🔻|💠|🔘|🔳|🔲|🏁|🚩|🎌|🏴|🏳|🏻|🏼|🏽|🏾|🏿|☺|☹|☠|❣|❤|✋|✌|☝|✊|✍|⛷|⛹|☘|☕|⛰|⛪|⛩|⛲|⛺|♨|⛽|⚓|⛵|⛴|✈|⌛|⏳|⌚|⏰|⏱|⏲|☀|⭐|☁|⛅|⛈|☂|☔|⛱|⚡|❄|☃|⛄|☄|✨|⚽|⚾|⛳|⛸|♠|♥|♦|♣|♟|⛑|☎|⌨|✉|✏|✒|✂|⛏|⚒|⚔|⚙|⚖|⛓|⚗|⚰|⚱|♿|⚠|⛔|☢|☣|⬆|↗|➡|↘|⬇|↙|⬅|↖|↕|↔|↩|↪|⤴|⤵|⚛|✡|☸|☯|✝|☦|☪|☮|♈|♉|♊|♋|♌|♍|♎|♏|♐|♑|♒|♓|⛎|▶|⏩|⏭|⏯|◀|⏪|⏮|⏫|⏬|⏸|⏹|⏺|⏏|♀|♂|⚧|✖|➕|➖|➗|♾|‼|⁉|❓|❔|❕|❗|〰|⚕|♻|⚜|⭕|✅|☑|✔|❌|❎|➰|➿|〽|✳|✴|❇|©|®|™|ℹ|Ⓜ|㊗|㊙|⚫|⚪|⬛|⬜|◼|◻|◾|◽|▪|▫)

