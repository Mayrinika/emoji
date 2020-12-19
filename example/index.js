import EmojiWidget from '../dist/index.js';

const inputList = document.querySelectorAll('input');
for(const input of inputList) {
    new EmojiWidget(input);
}