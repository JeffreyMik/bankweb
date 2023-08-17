// deposit section
document.getElementById("btn-deposit").addEventListener('click', function(){
const depositField = document.getElementById('deposit-field');
const NewDepositAmountString = depositField.value;
const NewDepositAmount = parseFloat(NewDepositAmountString);
depositField.value = '';

if (isNaN(NewDepositAmount)){
    alert('Please enter a valid amount');
    return;
}
const depositTotalElement=document.getElementById('deposit-total');
const previousDepositTotalString =depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

const currentDepositTotal = previousDepositTotal + NewDepositAmount;
depositTotalElement.innerText = currentDepositTotal;

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

const currentBalanceTotal = previousBalanceTotal + NewDepositAmount;

balanceTotalElement.innerText = currentBalanceTotal;



});


