import {button} from './createButton.js';
import defaultSettings from './defaultSettings.js';

function createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add(defaultSettings.classes.wrapper);
    wrapper.appendChild(button);

    return wrapper;
}

export const wrapper = createWrapper();