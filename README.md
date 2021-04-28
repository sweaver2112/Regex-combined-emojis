# 🤠  Regex-combined-emojis 🧐
A single JavaScript regular expression that matches All Emojis, that is, the combined lists:
https://unicode.org/emoji/charts/full-emoji-list.html and https://unicode.org/emoji/charts-13.1/full-emoji-modifiers.html

**-> Current as of 4/27/2021**

**-> Includes all Skin Tone & Flag patterns**

**-> Emoji Count: 3,507**

**-> Regex101 demo: https://regex101.com/r/2ia4m2/5**


```A Simpler Approach to Matching Emojis```


The expression is built programmatically from the source of the webpages listed above. The builder script is included, and will generate an expression updated with the newest emojis. 
The pattern itself is a single, simple alternation with the longest sequences first, and it runs fast.  By not trying to figure out any character ranges or surrogate pair sequences and just matching each character individually, pattern complexity is kept to a bare minimum.

## Usage

The pattern matches one single emoji.  So, it can be quantified, put in an alternation, whatever:


```javascript
let pattern = new RegExp(emojiPattern, "g")

/* extracting the emojis */
let emojis = [..."This 😀👩‍⚖️is the 🧗‍♀️text🥣.".matchAll(pattern)];

/*count of emojis*/
let emoCount = [..."This 😀👩‍⚖️is the 🧗‍♀️text🥣.".matchAll(pattern)].length

/* replacing emojis */
let stripped = "This 😀👩‍⚖️is the 🧗‍♀️text🥣.".replaceAll(pattern, "")
/* => "This is the text."*/

/*use the pattern string to build a custom regex*/
let quantified = new RegExp(".*"+emojiPattern+"{3}$") //match a string ending in 3 emojis
console.log(quantified.test("yep three here 😀👩‍⚖️")) //true
console.log(quantified.test("😀 nope")) //false   
```
