

$(document).ready(function(){
    $('.sidenav').sidenav();
});


$(document).ready(function(){
    $('.slider').slider();
});



$(document).on('ready', mifuncion);
function mifuncion(){
    $('#menu a').on('click', laseccion);

}
function laseccion(){
    var seccion =$(this).attr('href');
    $('body, html').animate({
        scrollTop:$(seccion).offset().top
    }, 800);
    return false;
}            

$(document).ready(function(){
    // TABS
    $('ul.tabs').tabs();
});