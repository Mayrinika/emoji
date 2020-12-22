import {Context} from "../Context.js";


export function createColorPanel() {
    const colors = ['gold', 'light', 'medium-light', 'medium', 'medium-dark', 'dark'];

    const panel = document.createElement('div');
    panel.classList.add('color_panel');

    for(const color of colors) {
        panel.appendChild(createRadioButton(color));
    }
    return panel;
}

function createRadioButton(color) {
    const pseudoRadio = document.createElement('div');
    const radio = document.createElement('input');
    const label = document.createElement('label');

    pseudoRadio.classList.add('color_radio', 'color_panel__item', `color_radio__${color}`);

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