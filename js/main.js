$(document).ready(function() {
    var slider = $("#slider");
    $("#slider").owlCarousel({
         navigation : false,
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
    });
    $(".next").click(function(){
        slider.trigger('owl.next');
    });
    $(".prev").click(function(){
        slider.trigger('owl.prev');
    });
    $('.mobile-menu').click(function(){
        $('body').toggleClass('nav-is-open');
    });
});