import defaultSettings from '../settings/defaultSettings.js';

export function createButton() {
    const button = document.createElement('div');
    button.classList.add(defaultSettings.classes.button);
    const span = document.createElement('span');
    span.textContent = '🦝';
    button.appendChild(span);
    return button;
}