$(document).ready(function () {
    $('.mob-menu-btn').on('click', function (t) {
        //t.preventDefault();
        $('.modal-menu').addClass('open');
    });
    $('.modal-menu__close, .modal-menu .menu__link').on('click', function (t) {
        //t.preventDefault();
        $('.modal-menu').removeClass('open');
    });
});