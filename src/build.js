/*
Author: Scott Weaver @sweaver2112 5/5/2026
Builder script that parses Unicode emoji HTML, writes a raw source list,
and regenerates index.js exports automatically.
*/
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const htmlPath = join(__dirname, 'rawHTML.html');
const rawEmojiPath = join(__dirname, 'rawEmoji.txt');
const indexPath = join(projectRoot, 'index.js');

const html = readFileSync(htmlPath, 'utf8');
const emojiListFromHtml = extractEmojiFromHtml(html);

if (emojiListFromHtml.length === 0) {
    throw new Error('No emoji rows found in rawHTML.html. The source HTML structure may have changed.');
}

// Keep a plain-text source-of-truth file that can be diffed and reused.
writeFileSync(rawEmojiPath, emojiListFromHtml.join('\n') + '\n', 'utf8');

const rawEmojiText = readFileSync(rawEmojiPath, 'utf8');
const emojiList = rawEmojiText
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);

const regex = buildPatternFromEmojiList(emojiList);
const indexContents = buildIndexFile(regex);
writeFileSync(indexPath, indexContents, 'utf8');

console.log(`Wrote ${emojiList.length} emoji entries to ${rawEmojiPath}`);
console.log(`Regenerated ${indexPath}`);

function extractEmojiFromHtml(sourceHtml) {
    const reg = new RegExp("(?<=<td class='chars'>).*?(?=</td>)", 'g');
    return [...sourceHtml.matchAll(reg)].map((m) => m[0]);
}

function buildPatternFromEmojiList(list) {
    return '(?:' + list
        .map((emoji) => toUtf16Escapes(emoji))
        .sort((a, b) => b.length - a.length)
        .join('|') + ')';
}

function toUtf16Escapes(emoji) {
    return emoji
        .split('')
        .map((unit) => String.raw`\u${padHex(unit.codePointAt(0).toString(16))}`)
        .join('');
}

function buildIndexFile(regex) {
    return [
        '/* Author:Scott Weaver May 2026 */',
        `var emojiPattern = String.raw\`${regex}\`;`,
        "var compactEmojiPattern = emojiPattern.replace(/\\\\u(?!002a)([0-9A-F]{4})/ig, (m, g1) => String.fromCharCode(`0x${g1}`));",
        '',
        'export { emojiPattern, compactEmojiPattern }',
        ''
    ].join('\n');
}

function padHex(hex) {
    let value = hex;
    while (value.length < 4) value = '0' + value;
    return value;
}
