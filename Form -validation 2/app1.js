const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("cnfPassword");


form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});

const isEmail = (emailVal) => {
     let atSymbol = emailVal.indexOf("@");
     if(atSymbol < 1){
      return false;
     }

     let dot = emailVal.lastIndexOf('.');
     if(dot <= atSymbol+2){
        return false;
     }
    if(dot === emailVal.length-1){

    }

}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneNumberVal = phoneNumber.value.trim();
    const passwordVal = password.value.trim();
    const cnfPasswordVal = cnfPassword.value.trim();

    if(usernameVal === ""){
         setErrormsg(username, 'username cannot be blank');
    }else if(usernameVal.length<=3){
        setErrormsg(username, 'username min 3 char');
    }else{
        setSuccessMsg(username);
    }

    if(emailVal === ""){
        setErrormsg(email, 'email cannot be blank');
   }else if(!isEmail(emailVal)){
       setErrormsg(emailVal, 'not a valid Email');
   }else{
       setSuccessMsg(email);
   }
}
