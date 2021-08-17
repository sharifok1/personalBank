 function inputfield(inputValue){
     const inputAmount = document.getElementById(inputValue);
     const inAmount = parseFloat(inputAmount.value);
     inputAmount.value = '';
     return inAmount;
 }
//  update deposite and withdraw value
 function updateValue(currentAmount, inputValue){
     const currentValue = document.getElementById(currentAmount)
     const convertCurrentValue = parseFloat(currentValue.innerText);
     currentValue.innerText = convertCurrentValue + inputValue;
 }
 /////deposite btn event handeler/////////
const depositeBtn = document.getElementById('deposit-btn');
depositeBtn.addEventListener('click',function(){  
    const depositInput = inputfield('deposit-fld');
    if(depositInput>0){
        const Totaldeposite = updateValue('deposite-money',depositInput);
        const TotalBalance = updateValue('balance-money',depositInput);
    }
})
////////////////withdraw n=btn handeler///////////
const withdraweBtn = document.getElementById('withdraw-btn');
withdraweBtn.addEventListener('click',function(){
    const withdrawInput = inputfield('withdraw-fld');
    const updateBalance = document.getElementById('balance-money');
     const currentBalance = parseFloat(updateBalance.innerText);
    if(withdrawInput>0 && withdrawInput<=currentBalance){
    const TotalWithdraw = updateValue('withdraw-money',withdrawInput);
    const TotalBalance = updateValue('balance-money',-withdrawInput);
    withdraweBtn.style.border = '3px solid blue'
    }
    else{
        withdraweBtn.style.border = '3px solid red'
    }
})