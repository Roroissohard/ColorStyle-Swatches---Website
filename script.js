function changeShoeColor(color) {
    const shoeImage = document.getElementById('shoeImage');
    const colorImages = {
    black: 'img/new-balance-9060-black-castlerock-grey-sneakerhype-1.webp',
    rain: 'img/new-balance-9060-rain-cloud-grey-sneakerhype-1_grande.webp',
    sail: 'img/new-balance-9060-sail-grey-driftwood-sneakerhype-1.webp',
};
shoeImage.src = colorImages[color] || 'assets/img/placeholder.png';

}
