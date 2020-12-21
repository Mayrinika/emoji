import {EmojiWidget} from '../EmojiWidget.js';
import defaultSettings from '../settings/defaultSettings.js';
import createCategory from './createCategory.js';
import CategoryModel from '../model/categoryModel.js';
import {Context} from "../Context.js";

export function createModal(emojiCategoryList) {
    //console.log(emojiCategoryList); //TODO
    const modal = document.createElement('div');
    modal.classList.add(defaultSettings.classes.modal);

    const nav = document.createElement('nav');
    nav.classList.add('navigation');

    const search = document.createElement('div');
    search.classList.add('search');
    const searchInput = document.createElement('input');
    searchInput.classList.add('search-input');
    searchInput.placeholder = 'Search';
    search.appendChild(searchInput);

    searchInput.addEventListener('input', (e) => {
        const searchString = e.target.value.toLowerCase();
        EmojiWidget.filterEmoji(searchString);
    });

    Context.searchInput = searchInput;

    const content = document.createElement('div');
    content.classList.add('content');
    for (const category of emojiCategoryList) {
        const button = createNavTab(category);
        const categoryBlock = createCategory(category);

        category.view = categoryBlock;

        button.addEventListener('click', () => {
            const contentOffset = 80;
            content.scrollTop = categoryBlock.offsetTop - contentOffset;
        });

        nav.appendChild(button);
        content.appendChild(categoryBlock);
    }

    const footer = document.createElement('footer');
    footer.classList.add('settings');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    const label = document.createElement('label');
    label.textContent = 'dark';
    label.appendChild(checkbox);

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            modal.classList.add(defaultSettings.classes.dark);
        } else {
            modal.classList.remove(defaultSettings.classes.dark);
        }
    });

    const radioGold = document.createElement('input');
    radioGold.setAttribute('type', 'radio');
    radioGold.setAttribute('name', 'color');
    radioGold.setAttribute('checked', 'true');
    radioGold.addEventListener('change', () => {
        Context.changeColor('gold');
    });
    const radioLight = document.createElement('input');
    radioLight.setAttribute('type', 'radio');
    radioLight.setAttribute('name', 'color');
    radioLight.addEventListener('change', () => {
        Context.changeColor('light');
    });

    footer.appendChild(label);
    footer.appendChild(radioGold);
    footer.appendChild(radioLight);
    modal.appendChild(nav);
    modal.appendChild(search);
    modal.appendChild(content);
    modal.appendChild(footer);
    return modal;
}

function createNavTab(emojiCategoryList) {
    const button = document.createElement('button');
    button.classList.add('navigation-item');
    button.textContent = emojiCategoryList.icon;
    return button;
}