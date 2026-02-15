const swatches = document.querySelectorAll('.swatch');

function changeSwatchColor() {
    const color = this.dataset.color;
    this.style.backgroundColor = color;
}

swatches.forEach(swatch => {
    swatch.addEventListener('click', changeSwatchColor);
});