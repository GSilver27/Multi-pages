export default class Slider {
    constructor({page = '', btns = '', next = '', prev = ''} = {}) {
        this.page = document.querySelector(page);
        this.slides = this.page.children; // получаем ноду
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

}