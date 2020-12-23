import createEmoji from './createEmoji.js';
import defaultSettings from "../settings/defaultSettings.js";

export default function createCategory(categoryModel) {
    const category = document.createElement('article');
    const title = document.createElement('div');
    const list = document.createElement('ul');

    category.classList.add(defaultSettings.classes.category.main);
    title.classList.add(defaultSettings.classes.category.title);
    list.classList.add(defaultSettings.classes.category.list);

    title.textContent = categoryModel.title;
    for(const emoji of categoryModel.emojiList) {
        const emojiView = createEmoji(emoji);
        list.appendChild(emojiView);
        emoji.view = emojiView;
    }

    category.appendChild(title);
    category.appendChild(list);

    return category;
}