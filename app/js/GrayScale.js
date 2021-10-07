console.clear();
let glass = document.querySelector('.glass-search');
let block_parent = document.querySelector('.anim-city');

block_parent.addEventListener('mousemove', relativeCoords);
block_parent.addEventListener('mouseleave', () => (glass.classList.contains('opacityShow')) ? glass.classList.remove('opacityShow') : '');
block_parent.addEventListener('mouseout', () => (glass.classList.contains('opacityShow')) ? glass.classList.remove('opacityShow') : '');

function relativeCoords(e) {
    let bounds = e.target.getBoundingClientRect();
    let x = (e.clientX - 42) - bounds.left;
    let y = (e.clientY - 42) - bounds.top;
    (!glass.classList.contains('opacityShow')) ? glass.classList.add('opacityShow') : '';
    glass.style.left = x + 'px';
    glass.style.top = y + 'px';
    glass.style.backgroundPositionX = -x + 'px';
    glass.style.backgroundPositionY = -y + 'px';
}