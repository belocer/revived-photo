class Card3D { /* Анимация, - "Ожившее фото" */
    constructor(obj) {
        this.varDebounce = 0; // ТаймАут срабатывания всей анимации
        this.card = document.querySelector(obj.card); // Анимируемый блок
        this.layer1 = document.querySelector(obj.layer1); // Анимируемый слой 1
        this.layer2 = document.querySelector(obj.layer2); // Анимируемый слой 2
        this.layer3 = document.querySelector(obj.layer3); // Анимируемый слой 3
        this.layer4 = document.querySelector(obj.layer4); // Анимируемый слой 4
        this.arr_layers = [this.layer1, this.layer2, this.layer3, this.layer4];
        this.tiltAngle = obj.tiltAngle || 10; // угол отклонения в градусах
        this.axialDisplacement = obj.axialDisplacement || 50; // Смещение по оси Z

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
                this.elementDirectionalShift(this.tiltAngle, -this.tiltAngle)
            } else if (x > 50 && y < 50) {
                this.elementDirectionalShift(this.tiltAngle, this.tiltAngle)
            } else if (x < 50 && y > 50) {
                this.elementDirectionalShift(-this.tiltAngle, -this.tiltAngle)
            } else if (x > 50 && y > 50) {
                this.elementDirectionalShift(-this.tiltAngle, this.tiltAngle)
            }

        }, 10);
    }

    returnToPlace() {
        this.arr_layers.forEach(item => item.removeAttribute('style'));
    }

    elementDirectionalShift(x, y) {
        this.card.style.transform = `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg)`;
        for (let i = 0; i < this.arr_layers.length; i++) {
            this.arr_layers[i].style.transform = `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) translateZ(${(i + 1) * this.axialDisplacement}px)`;
        }
    }
}