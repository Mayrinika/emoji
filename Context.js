export class Context {
    static searchInput = null;
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