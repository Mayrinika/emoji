import {Context} from "../Context.js";
import defaultSettings from "../settings/defaultSettings.js";

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
        Context.targetInput.value += emoji;
    }

    setHidden(isVisible) {
        if(isVisible) {
            this.view.classList.remove(defaultSettings.classes.category.hide);
        } else {
            this.view.classList.add(defaultSettings.classes.category.hide);
        }
    }
}