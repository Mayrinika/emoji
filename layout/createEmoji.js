import {EmojiWidget} from "../EmojiWidget.js";
import {Context} from "../Context.js";

export default function createEmoji(emojiModel) {
    function setEmoji(color) {
        emoji.innerHTML = emojiModel.emotion[color] || emojiModel.emotion.gold;
    }

    const emoji = document.createElement('li');
    emoji.classList.add('category_item');
    setEmoji(Context.color);

    Context.onChangeColor((color) => {
        setEmoji(color);
    });

    emoji.addEventListener('click', () => emojiModel.onClick());
    return emoji;
}