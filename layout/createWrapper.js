import defaultSettings from '../settings/defaultSettings.js';

export function createWrapper(button) {
    const wrapper = document.createElement('div');
    wrapper.classList.add(defaultSettings.classes.wrapper);
    wrapper.appendChild(button);
    return wrapper;
}