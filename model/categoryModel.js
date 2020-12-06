import EmojiModel from './emojiModel.js';

export default class CategoryModel {
    title;
    icon;
    emojiList = [];
    _view;
    
    constructor(settings) {
        this.title = settings.title;
        this.icon = settings.icon;
        for(const emoji of settings.emojiList) {
            this.emojiList.push(new EmojiModel(emoji));
        }
    }

    set view(value) {
        this._view = value;
    }
    get view() {
        return this._view;
    }

    setHidden(isVisible) {
        if(isVisible) {
            this._view.classList.remove('hide');
        } else {
            this._view.classList.add('hide');
        }
    }
}