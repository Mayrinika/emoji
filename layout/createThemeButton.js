import defaultSettings from "../settings/defaultSettings.js";

export function createThemeButton(onChange) {
    const pseudoCheckbox = document.createElement('div');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');

    pseudoCheckbox.classList.add(defaultSettings.classes.themeButton);

    const checkboxId = 'theme_button_checkbox';
    label.setAttribute('for', checkboxId);
    checkbox.setAttribute('id', checkboxId);
    checkbox.setAttribute('type', 'checkbox');

    pseudoCheckbox.appendChild(checkbox);
    pseudoCheckbox.appendChild(label);

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            onChange(true);
        } else {
            onChange(false);
        }
    });

    return pseudoCheckbox;
}