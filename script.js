function myfunction(){
    let password = document.getElementById('Password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    let message = document.getElementById('message');

    if(password == ""){
        message.innerHTML = "**Please Enter Password."
        return false;
    }
    if(password.length < 5){
        message.innerHTML = "** Minmum 5 Character Are Require"
        return false;
    }
    if(password.length > 20 ){
        message.innerHTML = "** Mixmum 20 Character Are Require"
        return false;
    }
    if(password != confirm_password ){
        message.innerHTML = "**Password are not match please check your password "
        return false;
    }
    if(password = confirm_password ){
        message.innerHTML = "**Password are correct"
        return false;
    }
}