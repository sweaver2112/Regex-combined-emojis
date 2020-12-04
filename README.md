# Regex-combined-emojis
A JavaScript string regex that matches the combined lists:
https://unicode.org/emoji/charts/full-emoji-list.html and https://unicode.org/emoji/charts-13.1/full-emoji-modifiers.html

It's a programmatically built simple alternation, with the longest sequences first. 

Usage:

The string represents a single "emoji" token.  So, it can be quantified, put in an alternation, whatever:

---------------------------------------------------
let num = 42;

let regex = new RegExp(emojiPattern+\`{${num}}\`);

let match = someString.match(regex) /\*should match exactly 42 contiguous emojis\*/; 

----------------------------------------------------

Regex101 demo:

https://regex101.com/r/2ia4m2/1

Automatic ASCII (Emoji World Edition):

https://codepen.io/sweaver2112/pen/NWRxKra
