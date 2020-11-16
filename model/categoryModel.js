import EmojiModel from './emojiModel.js';

export default class CategoryModel {
    title;
    icon;
    emojiList = [];
    
    constructor(title, icon) {
        this.title = title;
        this.icon = icon;
        for(let i = 0; i < 18; i++) {
            this.emojiList.push(new EmojiModel());
        }
    }
}