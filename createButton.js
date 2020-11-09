import defaultSettings from './defaultSettings.js';

function createButton() {
    const button = document.createElement('botton');
    button.classList.add(defaultSettings.classes.button);
    button.innerHTML = '🦝';
    return button;
}

export const button = createButton();