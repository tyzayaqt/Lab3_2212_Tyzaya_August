const swatches = document.querySelectorAll('.swatch');

function colorApply() {
    const color = this.dataset.color;
    this.style.backgroundColor = color;
}

swatches.forEach(swatch => {
    swatch.addEventListener('click', colorApply);
});