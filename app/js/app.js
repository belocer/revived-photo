window.addEventListener('load', () => {

    // Анимируемый блок-карточка
    let objCard3D = {
        card: '.anim', // Анимируемый блок
        anim1: '.anim1-element', // Анимируемый элемент слева сверху
        anim2: '.anim2-element', // Анимируемый элемент справа сверху
        anim3: '.anim3-element', // Анимируемый элемент снизу слева
        anim4: '.anim4-element', // Анимируемый элемент снизу справа
        anim5: '.anim5-element', // Анимируемый элемент снизу справа
    }
    new Card3D(objCard3D);

})