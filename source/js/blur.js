var blur = (function () {
    var wrapper = document.querySelector('.l-form-blur-wrapper'),
        form = document.querySelector('.l-form-blur__bg');

    return {
        set: function () {
            var imgWidth = document.querySelector('.l-talks__bg-pic').offsetWidth,
                posLeft = -wrapper.offsetLeft + wrapper.offsetWidth / 2,
                posTop = -wrapper.offsetTop,
                blurCSS = form.style;

            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = posLeft + 'px' + ' '  + posTop + 'px';

            console.log(posLeft);
            console.log(posTop);
            console.log(imgWidth);
        }
    }
}());

blur.set();


window.onresize = function () {

    blur.set();
}