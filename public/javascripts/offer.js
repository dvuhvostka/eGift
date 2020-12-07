let counter = 0;
let text = localStorage.getItem('v_num');


if(text) {
  let input = document.getElementsByClassName('text_silence_ex')[0];
  input.insertAdjacentHTML('beforeend', '<br><p>'+text);

  $('#confirm').on('click', (e)=>{
    $('#confirm').addClass('loading');
    $('#confirm').text(' ');
    $('#confirm').css('height', '35px');
    setTimeout(()=>{
      counter++;
      $('#confirm').removeClass('loading');
      $('#confirm').text('Подтверждение');
        $('.red').css('display', "block");
    }, 1000)
  });
}else {
  $('#confirm').on('click', (e)=>{
    $('#confirm').addClass('loading');
    $('#confirm').text(' ');
    $('#confirm').css('height', '35px');
    setTimeout(()=>{
      counter++;
      $('#confirm').removeClass('loading');
      $('#confirm').text('Подтверждение');
      if(counter>1) {
        localStorage.removeItem('v_num');
        location.href='/success'
      }
      else{
        $('.red').css('display', "block");
      }
    }, 1000)
  });
}
