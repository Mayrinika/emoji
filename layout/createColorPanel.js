import {Context} from "../Context.js";
import defaultSettings from "../settings/defaultSettings.js";


export function createColorPanel() {
    const colors = ['gold', 'light', 'medium-light', 'medium', 'medium-dark', 'dark'];

    const panel = document.createElement('div');
    panel.classList.add(defaultSettings.classes.color.panel);

    for(const color of colors) {
        panel.appendChild(createRadioButton(color));
    }
    return panel;
}

function createRadioButton(color) {
    const pseudoRadio = document.createElement('div');
    const radio = document.createElement('input');
    const label = document.createElement('label');

    pseudoRadio.classList.add(
        ...defaultSettings.classes.color.item,
        `${defaultSettings.classes.color.active}${color}`
    );

    const radioId = `color_radio_input_${color}`
    radio.setAttribute('id', radioId);
    label.setAttribute('for', radioId);

    pseudoRadio.appendChild(radio);
    pseudoRadio.appendChild(label);

    if(color === 'gold')
        radio.setAttribute('checked', 'true');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'color');
    radio.addEventListener('change', () => {
        Context.changeColor(color);
    });
    return pseudoRadio;
}