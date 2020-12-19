import {EmojiWidget} from '../EmojiWidget.js';
import defaultSettings from "../settings/defaultSettings.js";

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
            this.view.classList.remove(defaultSettings.classes.emoji.hide);
        } else {
            this.view.classList.add(defaultSettings.classes.emoji.hide);
        }
    }
}