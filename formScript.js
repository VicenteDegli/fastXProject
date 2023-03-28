let isNameCorrect = false;
let isEmailCorrect = false;
let isTelCorrect = false;
let isSexoSelected = false;
let isMessageCorrect = false;
let sexo = "";
const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".spanRequired");
const textArea = document.getElementById("message");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function setError(index){
    campos[index].style.borderColor = '#e63636';
    spans[index].style.visibility = 'visible';
}

function removeError(index){
    campos[index].style.borderColor = '#22812a';
    spans[index].style.visibility = 'hidden';
}

function setBorderColor(event, index){
    const inputElement = event.target;
    inputElement.style.borderColor = '#e63636';
    spans[index].style.visibility = 'visible';
}

function chengingBorderColor(index){
    campos[index].style.borderColor = '#161616';
}

function chengeTextAreaBorder(){
    textArea.style.borderColor = '#161616';
}

function nameValidater(){
    if(campos[0].value.length < 3){
        setError(0);
        isNameCorrect = false;
    }else{
        removeError(0);
        isNameCorrect = true;
    }
}

function emailValidater(){
    if(emailRegex.test(campos[1].value)){
        removeError(1);
        isEmailCorrect = true;
    }else{
        setError(1);
        isEmailCorrect = false;
    }
}

function telValidater(){
    if(campos[2].value.length < 3){
        setError(2);
        isTelCorrect = false;
    }else{
        removeError(2);
        isTelCorrect = true;
    }
}

function checkTel(event){
   let input = event.target;
   input.value = telMask(input.value);
}

function telMask(value){
  if (!value) return "";
  value = value.replace(/\D/g,'');
  value = value.replace(/(\d{2})(\d)/,"($1) $2");
  value = value.replace(/(\d)(\d{4})$/,"$1-$2");
  return value;
}

function sexoValidater(){
    spans[3].style.visibility = 'hidden';
    const sexoRadios = document.querySelectorAll('input[name="gender"]');
    sexoRadios.forEach((radio) => {
        if(radio.checked == true){
            isSexoSelected = true;
        }
    });

    if(isSexoSelected){
         sexo = document.querySelector('input[name="gender"]:checked').value;
    }else{
        spans[3].style.visibility = 'visible';
    }
}

function messageValidater(){

    let words = textArea.value.split(' ');
    
    if(words.length < 10){
        textArea.style.borderColor = '#e63636';
        spans[4].style.visibility = 'visible';
        isMessageCorrect = false;
    }else{
        textArea.style.borderColor = '#22812a';
        spans[4].style.visibility = 'hidden';
        isMessageCorrect = true;
    }
}

function allDataValidater(event){
    const button = event.target;
    button.type = 'button';
   
    if(isNameCorrect && isEmailCorrect && isTelCorrect && isSexoSelected && isMessageCorrect){
        button.type = 'submit';
    }
}    
    
function checkAllData(){

    if(!isNameCorrect){
        spans[0].style.visibility = 'visible';
    }

    if(!isEmailCorrect){
        spans[1].style.visibility = 'visible';
    }

    if(!isTelCorrect){
        spans[2].style.visibility = 'visible';
    }

    if(!isSexoSelected){
        spans[3].style.visibility = 'visible';
    }
    if(!isMessageCorrect){
        spans[4].style.visibility = 'visible';
    }
}


