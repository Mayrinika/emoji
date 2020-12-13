import {EmojiWidget} from './EmojiWidget.js';

const inputList = document.querySelectorAll('input');
for(const input of inputList) {
    new EmojiWidget(input);
}
