var bottom_of_height;
var topMargin = 100;

$(document).ready(function () {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    $(window).scrollTop(0);

    $(window).scroll(function () {
        bottom_of_height = $(document).height();
        var bottom_of_window = $(window).scrollTop();
        var percent = bottom_of_window * 100 / bottom_of_height

        console.log(percent)
        if (percent > 20) {
            $('.slide2 .line5').addClass('active')
            $('.slide2 .line6').addClass('active')
            $('.slide2 .line7').addClass('active')
            $('.slide2 .line8').addClass('active')
        }
        if (percent > 35) {
            $('.slide4 .line11l').addClass('active')
            $('.slide4 .line12l').addClass('active')
            $('.slide4 .line11r').addClass('active')
            $('.slide4 .line12r').addClass('active')
        }
        if (percent > 53) {
            $('.slide4 .line13').addClass('active')
            $('.slide4 .line14').addClass('active')
            $('.slide4 .line15').addClass('active')
            $('.slide4 .line16').addClass('active')
        }
        if (percent > 72) {
            $('.slide5 .line17').addClass('active')
            $('.slide5 .line18').addClass('active')
            $('.slide6 .line19').addClass('active')
            $('.slide6 .line20').addClass('active')
        }
        if (percent > 82) {
            $('.slide6 .line21').addClass('active')
            $('.slide6 .line22').addClass('active')
        }
    });
});