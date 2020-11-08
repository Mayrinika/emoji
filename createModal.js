import defaultSettings from './defaultSettings.js';

function createModal() {
    const modal = document.createElement('div');
    modal.classList.add(defaultSettings.classes.modal);
    return modal;
}

export const modal = createModal();