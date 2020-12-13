import {EmojiWidget} from '../EmojiWidget.js';

export default class EmojiModel {
    keywords;
    emotion;
    view;

    constructor(settings) {
        this.emotion = settings.emotion;
        this.keywords = settings.keywords;
    }

    onClick (params) {
        EmojiWidget.targetInput.value += this.emotion;
    }

    setHidden(isVisible) {
        if(isVisible) {
            this.view.classList.remove('hide');
        } else {
            this.view.classList.add('hide');
        }
    }
}