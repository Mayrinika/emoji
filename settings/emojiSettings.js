import emojiData from './emojiData.js';

function parsing() {
    const result = [];
    let category = {
        title: '',
        emojiList: [],
    };
    const strings = emojiData
        .toLowerCase()
        .split('\n')
        .filter(str =>
            str !== '' &&
            !str.includes('minimally') &&
            !str.includes('unqualified') &&
            !str.includes('component') &&
            !str.includes('subgroup')
        );
    for (let i = 0; i < strings.length;) {
        const string = strings[i];
        if (string[0] === '#') {
            if (string.includes('group')) {
                category.title = string.slice(9);
            }
            if (string.includes('modifiers')) {
                category.icon = category.emojiList[0].emotions.gold;
                result.push(category);
                category = {
                    title: '',
                    emojiList: [],
                };
            }
            i++;
        } else {
            const emoji = getEmoji(strings, i);
            category.emojiList.push(emoji);
            if (emoji.emotions['light']) i += 6;
            else i++;
        }
    }
    return result;
}

function getEmoji(strings, i) {
    let emotions = {};
    const [code, qualifications, emojiData] = strings[i]
        .split(/[;|#]/)
        .map(str => str.trim());
    const firstSpaceAfterEmoji = emojiData.indexOf(' ');
    const keywords = emojiData.slice(firstSpaceAfterEmoji + 1);
    if (strings[i + 1].includes(' tone')) {
        emotions = getEmotions(strings, i);
    } else {
        emotions['gold'] = emojiData.slice(0, firstSpaceAfterEmoji);
    }
    return {emotions, keywords};
}

function getEmotions(strings, i) {
    const colors = ['gold', 'light', 'medium-light', 'medium', 'medium-dark', 'dark'];
    const emotions = {};
    for (let j = i, c = 0; j < i + 6, c < colors.length; j++, c++) {
        const [code, qualifications, emojiData] = strings[j]
            .split(/[;|#]/)
            .map(str => str.trim());
        const firstSpaceAfterEmoji = emojiData.indexOf(' ');
        emotions[colors[c]] = emojiData.slice(0, firstSpaceAfterEmoji);
    }
    return emotions;
}

export default parsing();