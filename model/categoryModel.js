import EmojiModel from './emojiModel.js';

export default class CategoryModel {
    input;
    title;
    icon;
    emojiList = [];
    
    constructor(settings, input) {
        this.input = input;
        this.title = settings.title;
        this.icon = settings.icon;
        for(const emoji of settings.emojiList) {
            //console.log(emoji);
            this.emojiList.push(new EmojiModel(emoji, this.input));
        }
    }
}