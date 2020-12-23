import defaultSettings from './settings/defaultSettings.js';
import emojiSettings from './settings/emojiSettings.js';
import {createWrapper} from './layout/createWrapper.js';
import {createButton} from './layout/createButton.js';
import {createModal} from './layout/createModal.js';
import {findNodeByClass, getCoords} from './helpers.js';
import CategoryModel from './model/categoryModel.js';
import {Context} from "./Context.js";

export class EmojiWidget {
    static emojiCategoryList = setEmojiCategoryList(emojiSettings);
    static modal = createModal(this.emojiCategoryList);
    input;
    button = createButton();
    wrapper = createWrapper(this.button);

    closeModalListener = (event) => {
        if (!findNodeByClass(event.target, defaultSettings.classes.modal.main)) {
            EmojiWidget.modal.remove();
            document.body.removeEventListener('mousedown', this.closeModalListener, true);
            EmojiWidget.filterEmoji('');
            Context.searchInput.value = '';
        }
    };

    constructor(input) {
        this.input = input;
        this.input.parentNode.insertBefore(this.wrapper, this.input);
        this.wrapper.appendChild(this.input);

        this.button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            Context.targetInput = this.input;

            const coords = getCoords(this.input);

            EmojiWidget.modal.style.left = coords.left + "px";
            EmojiWidget.modal.style.top = coords.bottom + "px";

            const body = document.querySelector('body');
            body.appendChild(EmojiWidget.modal);
            body.addEventListener('mousedown', this.closeModalListener, true);
        });
    }

    static filterEmoji(filterString) {
        for (const categoryModel of this.emojiCategoryList) {
            let hasEmoji = false;
            for (const emojiModel of categoryModel.emojiList) {
                let hasString = false;
                if (emojiModel.keywords.includes(filterString)) {
                    hasString = true;
                    hasEmoji = true;
                }
                emojiModel.setHidden(hasString);
            }
            categoryModel.setHidden(hasEmoji);
        }
    }
}


function setEmojiCategoryList(value) {
    const resultList = [];
    for (const category of value) {
        resultList.push(new CategoryModel(category));
    }
    return resultList;
}