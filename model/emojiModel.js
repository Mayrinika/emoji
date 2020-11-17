export default class EmojiModel {
    input;
    emotion;

    constructor(settings, input) {
        this.input = input;
        this.emotion = settings.emotion;
        this.keywords = settings.keywords;
    }

    onClick (params) {
        this.input.value += this.emotion;
    }
}