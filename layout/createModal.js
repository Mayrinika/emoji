import {EmojiWidget} from '../EmojiWidget.js';
import defaultSettings from '../settings/defaultSettings.js';
import createCategory from './createCategory.js';
import {Context} from "../Context.js";

export function createModal(emojiCategoryList) {
    const modal = document.createElement('div');
    modal.classList.add(defaultSettings.classes.modal);

    const nav = document.createElement('nav');
    nav.classList.add('navigation');

    const search = createSearch();
    const content = createContent(nav, emojiCategoryList);
    const footer = createFooter(modal);

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

function createSearch() {
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
    return search;
}

function createContent(nav, emojiCategoryList) {
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
    return content;
}

function createFooter(modal) {
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
    footer.appendChild(label);

    const colors = ['gold', 'light', 'medium-light', 'medium', 'medium-dark', 'dark'];
    for(const color of colors) {
        createRadioButton(color, footer);
    }
    return footer;
}

function createRadioButton(color, footer) {
    const radio = document.createElement('input');
    if(color === 'gold')
        radio.setAttribute('checked', 'true');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'color');
    radio.addEventListener('change', () => {
        Context.changeColor(color);
    });
    footer.appendChild(radio);
}
