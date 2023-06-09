export default class Slider {
    constructor({container = null,
        btns = null,
        next = null,
        prev = null,
        animate,
        activeClass = '',
        autoplay } = {}) {
        this.container = document.querySelector(container);
        try {this.slides = this.container.children} catch(e) {}; // получаем ноду
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }
}