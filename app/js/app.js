window.addEventListener('load', () => {

    // Анимация, - "Ожившее фото"
    let objCard3D = {
        card: '.animBlockPhoto', // Анимируемый блок
        layer1: '.layer1', // Анимируемый слой 1
        layer2: '.layer2', // Анимируемый слой 2
        layer3: '.layer3', // Анимируемый слой 3
        layer4: '.layer4', // Анимируемый слой 4
        tiltAngle: 11, // угол отклонения в градусах
        axialDisplacement: 40, // Смещение по оси Z || Каждый новый слой смещается на (i++ + 1) * axialDisplacement px
    }
    new Card3D(objCard3D);

    // Анимация, - "Цветной зум"
    let objGrayScale = {
        glass: '.glass-search',
        block_parent: '.anim-city',
    };

    new GrayScale(objGrayScale);
})
