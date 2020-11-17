export default function createEmoji(emojiModel) {
    const emoji = document.createElement('li');
    emoji.classList.add('category_item');
    emoji.innerHTML = emojiModel.emotion;

    emoji.addEventListener('click', () => emojiModel.onClick());
    return emoji;
}