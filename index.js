import {emojiWidget} from './emojiWidget.js';

const inputList = document.querySelectorAll('input');
for(const input of inputList) {
    new emojiWidget(input);
}
