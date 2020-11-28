import defaultSettings from '../settings/defaultSettings.js';

export function createButton() {
    const button = document.createElement('button');
    button.classList.add(defaultSettings.classes.button);
    button.textContent = '🦝';
    return button;
}