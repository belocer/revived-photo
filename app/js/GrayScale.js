class GrayScale { /* Анимация, - "Цветной зум" */
    constructor(obj) {
        this.glass = document.querySelector(obj.glass);
        this.block_parent = document.querySelector(obj.block_parent);

        this.block_parent.addEventListener('mousemove', this.relativeCoords.bind(this));
        this.block_parent.addEventListener('mouseleave', () => (this.glass.classList.contains('opacityShow')) ? this.glass.classList.remove('opacityShow') : '');
        this.block_parent.addEventListener('mouseout', () => (this.glass.classList.contains('opacityShow')) ? this.glass.classList.remove('opacityShow') : '');
    }

    relativeCoords(e) {
        let bounds = e.target.getBoundingClientRect();
        let x = (e.clientX - 42) - bounds.left;
        let y = (e.clientY - 42) - bounds.top;
        (!this.glass.classList.contains('opacityShow')) ? this.glass.classList.add('opacityShow') : '';
        this.glass.style.left = x + 'px';
        this.glass.style.top = y + 'px';
        this.glass.style.backgroundPositionX = -x + 'px';
        this.glass.style.backgroundPositionY = -y + 'px';
    }
}