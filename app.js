var username=document.getElementById("username");
var email=document.getElementById("email");
var password=document.getElementById("password");
var confirm_password=document.getElementById("confirm-password");
var message=document.getElementById("message");
function check(event)
{
    const password1 = document.getElementById("password").value;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /[0-9]/;
    const specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    event.preventDefault()
    if(username.value=='' || email.value=='' || password.value=='' || confirm_password.value=='')
    {
        message.textContent="*Enter all details"
    }
    else if(username.value.length>15)
    {
        message.textContent="*Enter characters less than 15";
    }
    else if(!email.value.includes('@'))
    {
        message.textContent = "*Invalid Email";
    }
    else if(!uppercase.test(password1))
    {
        message.textContent="*There should be atleast one uppercase in the password";
    }
    else if(!lowercase.test(password1))
    {
        message.textContent="*There should be atleast one lowercase in the password";
    }
    else if(!number.test(password1))
    {
        message.textContent="*There should be atleast one number in the password";
    }
    else if(!specialCharacter.test(password1))
    {
        message.textContent="*There should be atleast one special character in the password";
    }
    else if(password.value.length>10)
    {
        message.textContent="*Your password length must less than 10";
    }
    else if(password.value!=confirm_password.value)
    {
        message.textContent="*Password mismatch";
    }

    username.value = '';
    email.value = '';
    password.value = '';
    confirm_password.value = '';
}