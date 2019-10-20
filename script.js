$(document).ready(function () {
    skrollr.init({
        forceHeight: false
    });
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    $(window).scrollTop(0);
});