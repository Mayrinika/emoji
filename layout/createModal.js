import defaultSettings from '../settings/defaultSettings.js';
import createCategory from './createCategory.js';

export function createModal(store) {
    const modal = document.createElement('div');
    modal.classList.add(defaultSettings.classes.modal);
    
    const nav = document.createElement('nav');
    nav.classList.add('navigation');

    for(const category of store) {
        nav.appendChild(createNavTab(category));
    }

    const search = document.createElement('div');
    search.classList.add('search');
    const searchInput = document.createElement('input');
    searchInput.classList.add('search-input');
    searchInput.placeholder = 'Search';
    search.appendChild(searchInput);

    const content = document.createElement('div');
    content.classList.add('content');
    for(const category of store) {
        content.appendChild(createCategory(category));
    }

    modal.appendChild(nav);
    modal.appendChild(search);
    modal.appendChild(content);
    return modal;
}

function createNavTab(store) {
    const button = document.createElement('button');
    button.classList.add('navigation-item');
    button.innerHTML = store.icon;
    return button;
}