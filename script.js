var sliderContainer = document.querySelector('.slider-wrapper');
var slider = document.querySelector('.slider');
var isDragging = false;
var startPosition;
var startTranslate = 0;

slider.addEventListener('mousedown', function (event) {
    isDragging = true;
    startPosition = event.clientX;
    startTranslate = getTranslateX(slider);
    slider.classList.add('dragging');
});

document.addEventListener('mouseup', function () {
    if (isDragging) {
        isDragging = false;
        slider.classList.remove('dragging');
    }
});

document.addEventListener('mousemove', function (event) {
    if (isDragging) {
        var dragDistance = event.clientX - startPosition;
        var currentTranslate = startTranslate + dragDistance;
        slider.style.transform = 'translateX(' + currentTranslate + 'px)';
    }
});

function getTranslateX(element) {
    var transform = window.getComputedStyle(element).getPropertyValue('transform');
    var matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix) {
        var matrixValues = matrix[1].split(', ');
        if (matrixValues.length >= 4) {
            return parseInt(matrixValues[4]);
        }
    }
    return 0;
}
