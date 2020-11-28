import {EmojiWidget} from '../EmojiWidget.js';

export default class EmojiModel {
    keywords;
    emotion;
    _view;

    constructor(settings) {
        this.emotion = settings.emotion;
        this.keywords = settings.keywords;
    }

    onClick (params) {
        EmojiWidget.targetInput.value += this.emotion;
    }

    set view(value) {
        this._view = value;
    }
    get view() {
        return this._view;
    }

    visibleView(isVisible) {
        if(isVisible) {
            this._view.classList.remove('hide');
        } else {
            this._view.classList.add('hide');
        }
    }
}