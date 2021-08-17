function inputField(fieldId){
    const inputValue = document.getElementById(fieldId);
    const takeValue = inputValue.value;
    
    return takeValue;
}

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click',function(event){
    const userMail = inputField('email-fld');
    const userPassword = inputField('pass-fld');
   if(userMail == 'mybank@gmail.com' && userPassword =='bank123'){
    window.location.href = 'deshbank.html';
   }
   else{
       alert('Incorrect Password');
       return false;
   }
})
