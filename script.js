var bottom_of_height;
var topMargin = 100;

$(document).ready(function () {
    // if ('scrollRestoration' in history) {
    //     history.scrollRestoration = 'manual';
    // }
    // $(window).scrollTop(0);

    $(window).scroll(function () {
        bottom_of_height = $(document).height();
        var bottom_of_window = $(window).scrollTop();
        var percent = bottom_of_window * 100 / bottom_of_height

        console.log(percent)
        if (percent > 82) {
            $('.slide6 .line21').addClass('active')
            $('.slide6 .line22').addClass('active')
        } else if (percent > 72) {
            $('.slide5 .line17').addClass('active')
            $('.slide5 .line18').addClass('active')
            $('.slide6 .line19').addClass('active')
            $('.slide6 .line20').addClass('active')
        } else if (percent > 53) {
            $('.slide4 .line13').addClass('active')
            $('.slide4 .line14').addClass('active')
            $('.slide4 .line15').addClass('active')
            $('.slide4 .line16').addClass('active')
        } else if (percent > 46) {
            $('.slide3 .footer-hand').addClass('active')
        } else if (percent > 35) {
            $('.slide4 .line11l').addClass('active')
            $('.slide4 .line12l').addClass('active')
            $('.slide4 .line11r').addClass('active')
            $('.slide4 .line12r').addClass('active')
            $('.slide3 .footer-hand').removeClass('active')
        } else if (percent > 26.41) {
            $('.group-bird .bird11').addClass('active')
        } else if (percent > 26.20) {
            $('.slide2 .frame-s').addClass('active')
            $('.group-bird .bird11').removeClass('active')
            $('.group-bird .bird10').addClass('active')
        } else if (percent > 25.85) {
            $('.slide2 .frame-s').removeClass('active')
            $('.group-bird .bird10').removeClass('active')
            $('.group-bird .bird09').addClass('active')
        } else if (percent > 25.504) {
            $('.group-bird .bird09').removeClass('active')
            $('.group-bird .bird08').addClass('active')
        } else if (percent > 25.09) {
            $('.group-bird .bird08').removeClass('active')
            $('.group-bird .bird07').addClass('active')
        } else if (percent > 24.77) {
            $('.group-bird .bird07').removeClass('active')
            $('.group-bird .bird06').addClass('active')
        } else if (percent > 24.511) {
            $('.group-bird .bird06').removeClass('active')
            $('.group-bird .bird05').addClass('active')
        } else if (percent > 24.08) {
            $('.group-bird .bird05').removeClass('active')
            $('.group-bird .bird04').addClass('active')
        } else if (percent > 23.74) {
            $('.group-bird .bird04').removeClass('active')
            $('.group-bird .bird03').addClass('active')
        } else if (percent > 22.68) {
            $('.group-bird .bird03').removeClass('active')
            $('.group-bird .bird02').addClass('active')
        } else if (percent > 21.66) {
            $('.group-bird .bird02').removeClass('active')
            $('.group-bird .bird01').addClass('active')

        } else if (percent > 20) {
            $('.group-bird .bird01').removeClass('active')
            $('.slide2 .line5').addClass('active')
            $('.slide2 .line6').addClass('active')
            $('.slide2 .line7').addClass('active')
            $('.slide2 .line8').addClass('active')
            $('.slide3 .footer-hand').removeClass('active')
        }

    });
});