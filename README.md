# Regex-combined-emojis
A JavaScript string regex that matches All Emojis (updated: May 2021), that is, the combined lists:
https://unicode.org/emoji/charts/full-emoji-list.html and https://unicode.org/emoji/charts-13.1/full-emoji-modifiers.html

**->includes Flag patterns**

**->current emoji count: 3507**

The pattern is built programmatically from the source of the webpages listed above. 
It's a simple alternation with the longest sequences first, and it's pretty fast.

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


*Regex101 demo:*

https://regex101.com/r/2ia4m2/5

*Used In:*

Automatic ASCII (Emoji World Edition):

https://codepen.io/sweaver2112/pen/NWRxKra
