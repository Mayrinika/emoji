import defaultSettings from './defaultSettings.js';
import {wrapper} from './createWrapper.js';
import {button} from './createButton.js';
import {modal} from './createModal.js';
import {findNodeByClass, getCoords} from './helpers.js';

export function emojiWidget(input, settings) {
    const closeModalListener = function(event) {
        const body = document.querySelector('body');
        if(!findNodeByClass(event.target, defaultSettings.classes.modal)) {
            modal.remove();
            body.removeEventListener('click', closeModalListener, true);
        }
    };

    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);

    button.addEventListener('click', function (event) {
        const coords = getCoords(input);

        modal.style.left = coords.left + "px";
        modal.style.top = coords.bottom + "px";

        const body = document.querySelector('body');
        body.appendChild(modal);
        body.addEventListener('click', closeModalListener, true);
    });
}