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

    render() {
        try {
            this.handson = document.querySelector('.hanson');
        } catch(e) {}
        

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

        this.showSlides(this.slideIndex);
    }
}