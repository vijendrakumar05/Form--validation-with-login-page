let userName = document.getElementById('username');
let password = document.getElementById('password');
let flag = 1;

function validateForm() {
        if(userName.value == ""){
            console.log("username empty");
            document.getElementById('userError').innerHTML = "User Name is empty!";
            flag = 0;
        }else if(userName.value.length < 3){
            document.getElementById('userError').innerHTML = "User Name require min 5 char!";
            flag=0;
        }else{
            document.getElementById('userError').innerHTML = "";
            flag = 1;
        }

        if(password.value == ""){
            document.getElementById('passError').innerHTML = "Password is empty!";
            flag = 0;
        }else if(password.value.length < 8){
            document.getElementById('passError').innerHTML = "Password min require 8 or more char !";
            flag = 0;
        }else{
            document.getElementById('passError').innerHTML = "";
            flag = 1;
        }

        if(flag){
            return true;
        }else{
            return false;
        }
}