# 🤠  Regex-combined-emojis 🧐
A single JavaScript regular expression that matches All Emojis, that is, the combined lists:
https://unicode.org/emoji/charts/full-emoji-list.html and https://unicode.org/emoji/charts-13.1/full-emoji-modifiers.html

**-> Current as of 4/30/2021**

**-> Includes all Skin Tone & Flag patterns**

**-> Emoji Count: 3,521**

**-> Regex101 demo: https://regex101.com/r/2ia4m2/7**


```A Simpler Approach to Matching Emojis```


The expression is built programmatically from the source of the webpages listed above. The builder script is included, and will generate an expression updated with the newest emojis. 
The pattern itself is a single, simple alternation with the longest sequences first, and it runs fast.  By not worrying about character ranges or surrogate pair sequences, and just matching each character individually, pattern complexity is kept to a bare minimum.

## Usage

The pattern matches one single emoji.
It can be used as is to extract, count, or strip a string of emojis, or you can build your own regex with the pattern string.


```javascript
/*compile the pattern string into a regex*/
let emoRegex = new RegExp(emojiPattern, "g")

/*extracting the emojis*/
let emojis = [..."This 😀👩‍⚖️is the 🧗‍♀️text🥣.".matchAll(emoRegex)];
// "😀,👩‍⚖️,🧗‍♀️,🥣"

/*count of emojis*/
let emoCount = [..."This 😀👩‍⚖️is the 🧗‍♀️text🥣.".matchAll(emoRegex)].length
// 4

/*strip emojis from text*/
let stripped = "This 😀👩‍⚖️is the 🧗‍♀️text🥣.".replaceAll(emoRegex, "")
// "This is the text."

/*use the pattern string to build a custom regex*/
let customRegex = new RegExp(".*"+emojiPattern+"{3}$") //match a string ending in 3 emojis
let isMatch= customRegex.test("yep three here 😀👩‍⚖️🥣") //true
isMatch = customRegex.test("nope 🥣😀") //false    
```
