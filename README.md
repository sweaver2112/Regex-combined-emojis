# Regex-combined-emojis
A JavaScript regular expression that matches the combined lists https://unicode.org/emoji/charts/full-emoji-list.html and https://unicode.org/emoji/charts-13.1/full-emoji-modifiers.html


Usage:

The string represents a single "emoji" token.  So, it can be quantified, put in an alternation, whatever:

`
/*match exactly 42 emojis*/
let num = 42 

let regex = new RegExp(emojiPattern+`{${num}}`, "g")

let matches = someString.matchAll(regex)
`

https://regex101.com/r/2ia4m2/1
