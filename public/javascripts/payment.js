$('form').card({
    container: '.card-wrapper',
});

$('#payment').on('submit', (e)=>{
  e.preventDefault();
  let number = document.getElementsByName('number')[0].value;
  let name = document.getElementsByName('name')[0].value;
  let expiry = document.getElementsByName('expiry')[0].value;
  let cvc = document.getElementsByName('cvc')[0].value;

  $.ajax({
    url: '/pay',
    type: 'POST',
    data: {
      post_type: 'getPayment',
      number,name,expiry,cvc
    }
  });
});
