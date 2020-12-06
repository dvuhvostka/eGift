document.addEventListener("DOMContentLoaded", ()=>{
  var questions = document.querySelectorAll('.question_header');
  console.log(questions);
  for (let each of questions) {
    each.addEventListener('click', (e)=>{
      var p = e.currentTarget.parentNode.querySelector('.question_body');
      p.classList.toggle('shown');
      e.currentTarget.classList.toggle('shown');
    });
  }

});

$(document).ready(function(){

  let smallItem = $('#small');
  let mediumItem = $('#medium');
  let largeItem = $('#large');
  let priceArr = document.getElementsByClassName('price-small');

   $(".html-header-backside").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1000);
   });
   $(".anchor").on("click", function (event) {
       event.preventDefault();
       console.log('123');
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1000);
   });

   $('#small').on('click', (e)=>{
     smallItem.addClass('active');
     mediumItem.removeClass('active');
     largeItem.removeClass('active');

     priceArr[0].innerHTML = '50$';
     priceArr[1].innerHTML = '75$';
     priceArr[2].innerHTML = '100$';
   });

   $('#medium').on('click', (e)=>{
     mediumItem.addClass('active');
     smallItem.removeClass('active');
     largeItem.removeClass('active');

     priceArr[0].innerHTML = '150$';
     priceArr[1].innerHTML = '200$';
     priceArr[2].innerHTML = '250$';
   });

   $('#large').on('click', (e)=>{
     smallItem.removeClass('active');
     mediumItem.removeClass('active');
     largeItem.addClass('active');

     priceArr[0].innerHTML = '300$';
     priceArr[1].innerHTML = '400$';
     priceArr[2].innerHTML = '500$';
   });

   var input_check = document.getElementsByClassName('num-only');
     for(let each of input_check){
       each.onkeypress=function(e){
         e = e || event;
         if (e.ctrlKey || e.altKey || e.metaKey) return;
         var chr = String.fromCharCode(e.which);
         if (chr == null) return;
         if (chr < '0' || chr > '9') {
           return false;
         }
       }
     }

     $('.btn-buy').click(function(){
        let value = $(this).parent().parent().find('.price-small').html();
        location.href='/pay?value='+value.replace('$', '');
     });
});
