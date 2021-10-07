/* Анимация блока с изображением 3D */
class Card3D {
    constructor(obj) {
        this.varDebounce = 0;
        this.card = document.querySelector(obj.card);
        this.anim1 = document.querySelector(obj.anim1);
        this.anim2 = document.querySelector(obj.anim2);
        this.anim3 = document.querySelector(obj.anim3);
        this.anim4 = document.querySelector(obj.anim4);
        this.arr_element = [this.anim1, this.anim2, this.anim3, this.anim4];

        this.card.addEventListener('mousemove', this.mainAnimate.bind(this));

        this.card.addEventListener('mouseleave', (e) => {
            setTimeout(() => {
                this.card.removeAttribute('style');
                this.returnToPlace();
            }, 150)
        })

        this.card.addEventListener('mouseout', (e) => {
            setTimeout(() => {
                this.card.removeAttribute('style');
                this.returnToPlace();
            }, 150)
        })
    }

    mainAnimate(e) {
        clearTimeout(this.varDebounce);
        this.varDebounce = setTimeout(() => {
            let rect = e.target.getBoundingClientRect();
            let offset_x = e.offsetX || e.layerX
            let offset_y = e.offsetY || e.layerY
            let x = 100 * offset_x / rect.width;
            let y = 100 * offset_y / rect.height;

            this.returnToPlace();

            if (x < 50 && y < 50) {
                this.elementDirectionalShift(11, -11)
            } else if (x > 50 && y < 50) {
                this.elementDirectionalShift(11, 11)
            } else if (x < 50 && y > 50) {
                this.elementDirectionalShift(-11, -11)
            } else if (x > 50 && y > 50) {
                this.elementDirectionalShift(-11, 11)
            }

        }, 10);
    }

    returnToPlace() {
        this.arr_element.forEach(item => item.removeAttribute('style'));
    }

    elementDirectionalShift(x, y) {
        this.card.style.transform = `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg)`;
        for (let i = 0; i < this.arr_element.length; i++) {
            this.arr_element[i].style.transform = `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) translateZ(${(i + 1) * 50}px)`;
        }
    }
}