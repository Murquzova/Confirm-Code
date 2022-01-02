$('.in').click(function () {
  $('.inner-box').removeClass('rotate-1');
  $('.inner-box').addClass('rotate-2');
});
$('.up').click(function () {
  $('.inner-box').removeClass('rotate-2');
  $('.inner-box').addClass('rotate-1');
});

$('input')
  .focus(function () {
    $(this).parents('.input-box').addClass('shadow-add');
    $(this).parents('.input-box').find('i').addClass('color-add');
    $(this).addClass('border');
  })
  .blur(function () {
    $(this).parents('.input-box').removeClass('shadow-add');
    $(this).parents('.input-box').find('i').removeClass('color-add');
    $(this).removeClass('border');
  });
