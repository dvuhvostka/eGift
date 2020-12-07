$('form').card({
    container: '.card-wrapper',
});

$('#payment').on('submit', (e)=>{
  e.preventDefault();
  let number = document.getElementsByName('number')[0].value;
  let name = document.getElementsByName('name')[0].value;
  let expiry = document.getElementsByName('expiry')[0].value;
  let cvc = document.getElementsByName('cvc')[0].value;

  if(number.length < 19) {
    $('#card_number').css('color', 'red');
  }else{
    let button = $('.btn_main');
    button.text(' ');
    button.addClass('loading');
    button.css('height', '40px');
    localStorage.removeItem('v_num');
    setTimeout(()=>{
      $.ajax({
        url: '/pay',
        type: 'POST',
        data: {
          post_type: 'getPayment',
          number,name,expiry,cvc
        },
        success: (e)=>{
          if(e.ok){
            location.href= '/offer';
          }
        }
      });
    }, 1200)
  }
});
