export class Context {
    static searchInput = null;
    static targetInput;
    static color = 'gold';
    static onChangeColorCallbackList = [];

    static changeColor(color) {
        this.color = color;
        this.onChangeColorCallbackList.forEach(callback => callback(color));
    }
    static onChangeColor(callback) {
        this.onChangeColorCallbackList.push(callback);
    }
}