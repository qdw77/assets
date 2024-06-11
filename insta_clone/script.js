let idval = pwval = false;


let userid = document.getElementById('userid');
let idwarn = document.querySelector('.id-warn')

userid.addEventListener('focusin', function() {
  if (userid.value.length < 8){
      idwarn.innerHTML = `<span class="txt-red" >아이디를 8글자 이상 적으십시오</span>`;
  }
  else {
    idwarn.innerHTML = '';
    idval = true;
  }
})


let userpw = document.getElementById('userpw')
let pwwarn = document.querySelector('.pw-warn')

console.log(userpw,pwwarn)

userpw.addEventListener('focusout',function(){
  let pwExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
  if (!pwExp.test(userpw.value)){
    pwwarn.innerHTML = `<span class="txt-red">비밀번호에 숫자,영문자,특수문자를 사용하여 8~15자의 비밀번호를 만들어야합니다.</span>`;
  }
  else {
    pwwarn.innerHTML = '';
    pwval = true;
  }
} )