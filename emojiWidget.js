import defaultSettings from './settings/defaultSettings.js';
import emojiSettings from './settings/emojiSettings.js';
import {createWrapper} from './layout/createWrapper.js';
import {createButton} from './layout/createButton.js';
import {createModal} from './layout/createModal.js';
import {findNodeByClass, getCoords} from './helpers.js';
import CategoryModel from './model/categoryModel.js';

export class EmojiWidget {
    _emojiCategoryList = [];
    input;
    button = createButton();
    wrapper = createWrapper(this.button);
    modal;
    closeModalListener = (event) => {
        if (!findNodeByClass(event.target, defaultSettings.classes.modal)) {
            this.modal.remove();
            document.body.removeEventListener('click', this.closeModalListener, true);
        }
    };

    constructor(input, settings) {
        this.input = input;
        this.emojiCategoryList = emojiSettings;
        this.modal = createModal(this._emojiCategoryList);
        this.input.parentNode.insertBefore(this.wrapper, this.input);
        this.wrapper.appendChild(this.input);

        this.button.addEventListener('click', (event) => {
            const coords = getCoords(this.input);

            this.modal.style.left = coords.left + "px";
            this.modal.style.top = coords.bottom + "px";

            const body = document.querySelector('body');
            body.appendChild(this.modal);
            body.addEventListener('click', this.closeModalListener, true);
        });
    }

    set emojiCategoryList(value) {
        for (const category of value) {
            this._emojiCategoryList.push(new CategoryModel(category, this.input));
        }
    }
}