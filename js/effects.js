$(document).ready(function(){

    //smooth scroll
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var scroll;

        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top) - 110
        }else{
            scroll =  ($target.offset().top) - 90
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        }, 900, 'swing', function () {
            //window.location.hash = target;
        });
    });


    //hover nos icones da section vantagens
    $('.iconVantagem').hover(
        function(){ $(this).addClass('teal-text') },
        function(){ $(this).removeClass('teal-text') }
    )

});