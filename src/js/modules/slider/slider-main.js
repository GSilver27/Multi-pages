import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.handson.style.opacity = '0';

            if (n === 3) {
                this.handson.classList.add('animated');
                setTimeout(() => {
                    this.handson.style.opacity = '1';
                    this.handson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.handson.classList.remove('slideInUp');
            }
            
        } catch(e) {}

        Array.from(this.slides).forEach(slide => { // которую преобразуем в массив
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
        });

        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });
    }

    render() {
        if (this.container) {
            try {
                this.handson = document.querySelector('.hanson');
            } catch(e) {}
                
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}