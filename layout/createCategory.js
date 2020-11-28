import createEmoji from './createEmoji.js';

export default function createCategory(categoryModel) {
    const category = document.createElement('article');
    const title = document.createElement('h2');
    const list = document.createElement('ul');

    category.classList.add('category');
    title.classList.add('category_title');
    list.classList.add('category_list');

    title.textContent = categoryModel.title;
    for(const emoji of categoryModel.emojiList) {
        list.appendChild(createEmoji(emoji));
    }

    category.appendChild(title);
    category.appendChild(list);

    return category;
}