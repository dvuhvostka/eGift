$('.fa-bars').click(()=>{
    $('.fa-bars').css('display', 'none');
    $('.sandwich_menu_wrap').css('display', 'block');
    $('.fa-times').removeClass('d-none');
});

$('.fa-times').click(()=>{
    $('.fa-bars').css('display', 'block');
    $('.sandwich_menu_wrap').css('display', 'none');
    $('.fa-times').addClass('d-none');
});
