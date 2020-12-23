import defaultSettings from '../settings/defaultSettings.js';
import createCategory from './createCategory.js';
import {createSearch} from "./createSearch.js";
import {createColorPanel} from "./createColorPanel.js";
import {createThemeButton} from "./createThemeButton.js";

export function createModal(emojiCategoryList) {
    const modal = document.createElement('div');
    modal.classList.add(defaultSettings.classes.modal.main);

    const nav = document.createElement('nav');
    nav.classList.add(defaultSettings.classes.navigation.main);

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
    button.classList.add(defaultSettings.classes.navigation.item);
    button.textContent = emojiCategoryList.icon;
    return button;
}

function createContent(nav, emojiCategoryList) {
    const content = document.createElement('div');
    content.classList.add(defaultSettings.classes.modal.content);
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
    const onThemeChange = (dark) => {
        if(dark) {
            modal.classList.add(defaultSettings.classes.dark);
        } else {
            modal.classList.remove(defaultSettings.classes.dark);
        }
    }
    const footer = document.createElement('footer');
    footer.classList.add(defaultSettings.classes.modal.footer);

    footer.appendChild(createThemeButton(onThemeChange));
    footer.appendChild(createColorPanel())
    return footer;
}
