// let joinBtn = document.getElementById('join-btn');
// let animtateInput = document.querySelectorAll('.animate-input');


// let emailAct = nameAct = idAct = pwAct = false;
// // console.log(emailAct, emailAct, idAct, pwAct)

// let userEmail = document.getElementById('user-email');
// let userName = document.getElementById('user-name')
// let userId = document.getElementById('user-id')
// let userPw = document.getElementById('user-pw')

// // console.log(userEmail, userName, userId, userPw)

// function updateInputState(val, activeVar) {
//   if(val.value.trim().length > 0) {
//     // animate-input 에 active class add
//     val.parentElement.classList.add('active');
//     activeVar = true
//   }else{
//     val.parentElement.classList.remove('active');
//     activeVar = false;
//   }

//   return activeVar;
// }

// animtateInput.forEach((item) => {
//   let input = item.querySelector('input');

//   input.addEventListener('Keyup', () => {
//     if(input == userEmail){
//       emailAct = updateInputState(input, emailAct);
//     } 
//   })

// })


let joinBtn = document.getElementById('join-btn');
let animateInput = document.querySelectorAll('.animate-input');

let emailAct = nameAct = idAct = pwAct = false;

let userEmail = document.getElementById('user-email');
let userName = document.getElementById('user-name');
let userId = document.getElementById('user-id');
let userPw = document.getElementById('user-pw');


function updateInputState(val, activeVar) {
  if(val.value.trim().length > 0) {
    // animate-input 에 active class add
    val.parentElement.classList.add('active');
    activeVar = true
  } else {
    // animate-input 에 active class remove
    val.parentElement.classList.remove('active');
    activeVar = false;
  }

  return activeVar;
}



animateInput.forEach((item) => {
  let input = item.querySelector('input');
  
  input.addEventListener('keyup', () => {
    if(input == userEmail) {
      emailAct = updateInputState(input, emailAct);
    }
  })
})