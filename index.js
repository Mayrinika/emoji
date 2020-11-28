import {EmojiWidget} from './emojiWidget.js';

const inputList = document.querySelectorAll('input');
for(const input of inputList) {
    new EmojiWidget(input);
}
