import { EmojiWidget } from '../EmojiWidget.js';
import defaultSettings from '../settings/defaultSettings.js';
import createCategory from './createCategory.js';

export function createModal(emojiCategoryList) {
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
    setTimeout(() => { // TODO: Таймер нужен потому что мы обращаемся к EmojiWidget.searchInput в момент когда инициализируется сам EmojiWidget. Это нормально? 😅
        EmojiWidget.searchInput = searchInput;
    }, 0);

    const content = document.createElement('div');
    content.classList.add('content');
    for(const category of emojiCategoryList) { 
        const button = createNavTab(category);
        const categoryBlock = createCategory(category);

        category.view = categoryBlock;
        
        button.addEventListener('click', () => {
            categoryBlock.scrollIntoView(true);
        });

        nav.appendChild(button);
        content.appendChild(categoryBlock);
    }

    const footer = document.createElement('footer');
    footer.classList.add('settings');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('change', () => {
        if(checkbox.checked) {
            modal.classList.add(defaultSettings.classes.dark);
        } else {
            modal.classList.remove(defaultSettings.classes.dark);
        }
    });
    footer.appendChild(checkbox);

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