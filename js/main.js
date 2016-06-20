$(document).ready(function() {
    /*Mostrar y ocultar menu mobil*/
    $('.btn-navigation').on('click', function(){
        var ContainerPage=$('.content-container-page');
        var NavigationMenu=$('.navigation-menu-container');
        var bgPage=$('.bg-page');
        if (ContainerPage.hasClass('show-navBar')) {
            ContainerPage.removeClass('show-navBar');
            NavigationMenu.removeClass('show-navBar');
            bgPage.addClass('hidden');
        } else {
            ContainerPage.addClass('show-navBar');
            NavigationMenu.addClass('show-navBar');
            bgPage.removeClass('hidden');
        }
    });
    /* boton ir arriba */
    $('.button-up').on('click', function(){
        $('body,html').animate({scrollTop:'0px'}, 300);
    });
     /*Mostrar y ocultar boton ir arriba */
     $(window).scroll(function(){
        if($(this).scrollTop() >= 800){
            $('.button-up').fadeIn();
        }else{
            $('.button-up').fadeOut();
        }
     });
    /*Activar menu seleccionado en tienda*/
    $('.cell-menu-store').on('click', function(){
        $('.cell-menu-store').removeClass('cell-menu-store-active');
        $(this).addClass('cell-menu-store-active');
    });
    /*ver imagenes en galeria*/
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});