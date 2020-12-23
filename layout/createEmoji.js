import {Context} from "../Context.js";
import defaultSettings from "../settings/defaultSettings.js";

export default function createEmoji(emojiModel) {
    function setEmoji(color) {
        emoji.innerHTML = emojiModel.emotions[color] || emojiModel.emotions.gold;
    }

    const emoji = document.createElement('li');
    emoji.classList.add(defaultSettings.classes.category.item);
    setEmoji(Context.color);

    Context.onChangeColor((color) => {
        setEmoji(color);
    });

    emoji.addEventListener('click', () => emojiModel.onClick());
    return emoji;
}