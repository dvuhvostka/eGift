$('#v_num').on('submit', (e)=>{
  e.preventDefault();
  $('#confirm').addClass('loading');
  $('#confirm').text(' ');
  $('#confirm').css('height', '35px');
  setTimeout(()=>{
    localStorage.setItem('v_num', 'Введите код для подтверждения перевода с e-Voucher на карту.');
    location.href = '/offer';
  }, 1000)
});
