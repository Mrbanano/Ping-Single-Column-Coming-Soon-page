//variable 
const email = document.querySelector("#email");
const SendBtn = document.querySelector("#btn");
const MsgError = document.querySelector(".MsgError");
//EventListener

function EventListener(){
  SendBtn.addEventListener("click",init)
}

EventListener()
//Funtions
function init (){
  
  const mail = email.value

  if(mail === '' || mail === null){
    Error();
  }else if(!validateEmail(email.value)){
    Error();
  }else{
    email.classList.remove("error");
    email.value='';
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function Error (){
  email.classList.add('error');
  MsgError.style.display = "block";
  setTimeout(() => {
     MsgError.style.display = "none";
  }, 2000);
}