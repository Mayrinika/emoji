import defaultSettings from './settings/defaultSettings.js';
import emojiSettings from './settings/emojiSettings.js';
import {createWrapper} from './layout/createWrapper.js';
import {createButton} from './layout/createButton.js';
import {createModal} from './layout/createModal.js';
import {findNodeByClass, getCoords} from './helpers.js';
import CategoryModel from './model/categoryModel.js';

export class emojiWidget {
    _store = [];
    button = createButton();
    wrapper = createWrapper(this.button);
    modal;
    closeModalListener = (event) => {
        const body = document.querySelector('body');
        if(!findNodeByClass(event.target, defaultSettings.classes.modal)) {
            this.modal.remove();
            body.removeEventListener('click', this.closeModalListener, true);
        }
    };;

    constructor(input, settings) {   
        this.store = emojiSettings;
        this.modal = createModal(this._store);
        input.parentNode.insertBefore(this.wrapper, input);
        this.wrapper.appendChild(input);
    
        this.button.addEventListener('click', (event) => {
            const coords = getCoords(input);
    
            this.modal.style.left = coords.left + "px";
            this.modal.style.top = coords.bottom + "px";
    
            const body = document.querySelector('body');
            body.appendChild(this.modal);
            body.addEventListener('click', this.closeModalListener, true);
        });  
    }

    set store(value) {
        for(const category of value) {
            this._store.push(new CategoryModel(category.title, category.icon));
        }
    }
}