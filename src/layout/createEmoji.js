import defaultSettings from "../settings/defaultSettings.js";

export default function createEmoji(emojiModel) {
    const emoji = document.createElement('li');
    emoji.classList.add(defaultSettings.classes.emoji.item);
    emoji.innerHTML = emojiModel.emotion;

    emoji.addEventListener('click', () => emojiModel.onClick());
    return emoji;
}