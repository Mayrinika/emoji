import emojiData from './emojiData.js';

function parsing() {
    const result = [];
    let category = {
        title: '',
        emojiList: [],
    };
    let numberOfSubtotal = 0;
    const strings = emojiData.split('\n');
    for (const string of strings) {
        if (string === '') continue;
        if (string.indexOf('unqualified') !== -1) continue;
        if (string[0] === '#') {
            if (string.indexOf('subgroup') !== -1) continue;
            else if (string.indexOf('group') !== -1) {
                category.title = string.slice(9);
            } else if (string.indexOf('subtotal') !== -1) {
                numberOfSubtotal++;
                if (numberOfSubtotal === 2) {
                    category.icon = category.emojiList[0].emotion;
                    result.push(category);
                    category = {
                        title: '',
                        emojiList: [],
                    };
                    numberOfSubtotal = 0;
                }
            } else continue;
        } else {
            const partsOfString = string.split(';');
            const emojiIndex = partsOfString[1].indexOf('#') + 2;
            const firstSpaceAfterEmoji = partsOfString[1].indexOf(' ', emojiIndex);
            const emotion = partsOfString[1].slice(emojiIndex, firstSpaceAfterEmoji);
            category.emojiList.push({
                emotion,
                keywords: partsOfString[1].slice(emojiIndex + emotion.length + 1),
            });
        }
    }
    return result;
}

export default parsing();