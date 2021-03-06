$(function () {
    var contentPosition = [];
    main();

    function main() {
        setRem();
        setRemOnResize();
        setHeaderListener();
        sendApply();
    }

    function setContentAnimatePosition() {
        var arr = [];
        var clientHeight = document.documentElement.clientHeight;
        $('.ani-item').each(function () {
            var top = $(this).offset().top;
            var limit = top - clientHeight;
            arr.push(limit);
        });
        contentPosition = arr;
    }

    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        if (clientWidth <= 414) {
            document.getElementsByTagName('html')[0].style.fontSize = Math.round(20 * clientWidth / 375) + 'px';
        }
    }

    function setRemOnResize() {
        $(window).on('resize', function () {
            setRem();
        });
    }

    function _getCurrentScrollTop() {
        return window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
    }

    function setHeaderListener() {
        var $header = $('.header')[0];
        var $headerMobile = $('.header-mobile')[0]
        var $headerMenu = $('.header-menu')[0]


        setContentAnimatePosition();
        $(window).on('scroll', function (e) {
            var currentScrollTop = _getCurrentScrollTop();
            if (currentScrollTop > 0) {
                $header.classList.add('scrolled');
                $headerMobile.classList.add('scrolled');
                $headerMenu.classList.add('scrolled')
            } else {
                $header.classList.remove('scrolled');
                $headerMobile.classList.remove('scrolled');
                $headerMenu.classList.remove('scrolled')

            }
        });
    }

    function sendApply() {
        $('#sendApply_link,#sendApply_link2').click(() => {
            showMask();
            return false;
        })
        $('#mask').click(async () => {
            hideMask();
        })
        $('#contact').click((e) => {
            e.stopPropagation();
        })
        $('#close').click(async (e) => {
            hideMask();
        })
    }

    function showMask() {
        $('#mask').show();
        $('#mask').removeClass('mask-hide');
        $('#contact').addClass('contact-active');
    }

    function hideMask() {
        $('#contact').removeClass('contact-active');
        $('#mask').addClass('mask-hide');
        setTimeout(function() { $('#mask').hide() }, 500);
    }
});
