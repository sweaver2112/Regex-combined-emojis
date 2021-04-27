# Regex-combined-emojis
A JavaScript string regex that matches All Emojis, that is, the combined lists:
https://unicode.org/emoji/charts/full-emoji-list.html and https://unicode.org/emoji/charts-13.1/full-emoji-modifiers.html

**-> Current as of 4/27/2021**

**-> Includes Flag patterns**

**-> Emoji Count: 3507**

**-> Regex101 demo: https://regex101.com/r/2ia4m2/5**

The expression is built programmatically from the source of the webpages listed above. The builder script is included, and will generate the updated pattern. 
The pattern itself is a single, simple alternation with the longest sequences first, and it runs fast.

## Usage

The string represents a single "emoji" token.  So, it can be quantified, put in an alternation, whatever:


```javascript
let num = 42;

let quantifiedRegex = new RegExp(emojiPattern+\`{${num}}\`);

let match = someString.match(quantifiedRegex);/*will match exactly 42 contiguous emojis*/ 

let globalRegex = new RegExp(emojiPattern, "g");

let matches = [...someString.matchAll(globalRegex)]; /*extracts all emojis*/
    
let emoCount = matches.length; /*count of emojis*/
```
