import EmojiModel from './emojiModel.js';

export default class CategoryModel {
    title;
    icon;
    emojiList = [];
    view;
    
    constructor(settings) {
        this.title = settings.title;
        this.icon = settings.icon;
        for(const emoji of settings.emojiList) {
            this.emojiList.push(new EmojiModel(emoji));
        }
    }

    setHidden(isVisible) {
        if(isVisible) {
            this.view.classList.remove('hide');
        } else {
            this.view.classList.add('hide');
        }
    }
}