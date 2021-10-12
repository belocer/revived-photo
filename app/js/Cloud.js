window.addEventListener('load', () => {

    let mixBlendMode_variable_arr = [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-burn',
        'hard-light',
        'soft-light',
        'hue',
        'saturation',
        'color',
        'luminosity',
    ];
    let cloud__circle = document.querySelector('.cloud__circle');

    function switchMode () {
        let i = 1;
        mixBlendMode_variable_arr.forEach(item => {
            setTimeout( () => {

                cloud__circle.animate([
                    {opacity: 1},
                    {opacity: 0},
                    {opacity: 1}
                ], {duration: 1000});

                cloud__circle.style.mixBlendMode = `${item}`
            }, i * 5000);
            i++;
        })
    }
    switchMode();

    setInterval(() => {
        switchMode();
    }, mixBlendMode_variable_arr.length * 5000);
});