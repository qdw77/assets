function updateInputState(input, activeVar){
  if(input.value.trim().length > 0){
    input.parentElement.classList.add('active');
    activeVar=true;
  }

  else{
   input.parentElement.classList.remove('active');
   activeVar = false;
  }

  return activeVar;
}


let userId = document.getElementById('userid');
let userPw = document.getElementById('userpw');



let idActive = false;
let pwActive = false;

let submitBtn = document.getElementById('submit-btn');

function handleInput(e){
  let input = e.target;
  let type = input.getAttribute("type");

  if(type == "text"){
    idActive = updateInputState(input, idActive);
  } else {
    pwActive = updateInputState(input, pwActive);
  }

  if(idActive && pwActive) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
}

userId.addEventListener('keyup', handleInput)
userPw.addEventListener('keyup', handleInput)
