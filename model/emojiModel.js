import {EmojiWidget} from '../EmojiWidget.js';
import {Context} from "../Context.js";

export default class EmojiModel {
    keywords;
    emotions;
    view;

    constructor(settings) {
        this.emotions = settings.emotions;
        this.keywords = settings.keywords;
    }

    onClick (params) {
        const emoji = this.emotions[Context.color] || this.emotions.gold;
        EmojiWidget.targetInput.value += emoji;
    }

    setHidden(isVisible) {
        if(isVisible) {
            this.view.classList.remove('hide');
        } else {
            this.view.classList.add('hide');
        }
    }
}