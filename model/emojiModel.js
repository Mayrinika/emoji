import {EmojiWidget} from '../EmojiWidget.js';
import {Context} from "../Context.js";

export default class EmojiModel {
    keywords;
    emotion;
    view;

    constructor(settings) {
        this.emotion = settings.emotion;
        this.keywords = settings.keywords;
    }

    onClick (params) {
        const emoji = this.emotion[Context.color] || this.emotion.gold;
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