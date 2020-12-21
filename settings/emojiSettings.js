import emojiData from './emojiData.js';

function parsing() {
    const result = [];
    let category = {
        title: '',
        emojiList: [],
    };
    const strings = emojiData.toLowerCase().split('\n');
    for (const string of strings) {
        if (string === '' || string.includes('unqualified') || string.includes('component')) continue;
        if (string[0] === '#') {
            if (string.includes('subgroup')) continue;
            else if (string.includes('group')) {
                category.title = string.slice(9);
            } else if (string.includes('modifiers')) {
                category.icon = category.emojiList[0].emotion.gold; //TODO
                result.push(category);
                category = {
                    title: '',
                    emojiList: [],
                };
            }
        } else {
            const emoji = parseEmojiList(string); //TODO
            if (emoji)
                category.emojiList.push(emoji);
        }
    }
    return result;
}

function parseEmojiList(string) {
    const partsOfString = string
        .split(/[;|#]/)
        .map(str => str.trim());
    if (partsOfString[2].includes('tone')) return; //TODO
    const firstSpaceAfterEmoji = partsOfString[2].indexOf(' ');
    return {
        emotion: {gold: partsOfString[2].slice(0, firstSpaceAfterEmoji)},
        keywords: partsOfString[2].slice(firstSpaceAfterEmoji + 1),
    }
}

export default parsing();