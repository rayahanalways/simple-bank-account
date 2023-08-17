document.querySelector('#deposit-btn').addEventListener('click', function () {
    const depositButton = document.querySelector('#btn-deposit');
    const depositButtonString = depositButton.value;
    const newDeposit = parseFloat(depositButtonString);
    depositButton.value = '';
    const depositAmount = document.querySelector('#deposit-amount');
    const depositAmountString = depositAmount.innerText;
    const preDeposit = parseFloat(depositAmountString);
    const totalDeposit = preDeposit + newDeposit;
    depositAmount.innerText = totalDeposit;
    const balanceAmount = document.querySelector('#balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const preBlanceAmount = parseFloat(balanceAmountString);
    const updateBalance = preBlanceAmount + newDeposit;

    balanceAmount.innerText = updateBalance;

})

document.querySelector('#withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.querySelector('#btn-withdraw');
    const withdrawFieldString = withdrawField.value;
    const withDrawAmount = parseFloat(withdrawFieldString);
    
    withdrawField.value = '';
    const withdrawAmount = document.querySelector('#withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const preWithdrawAmount = parseFloat(withdrawAmountString);
    const totalWithdraw = preWithdrawAmount + withDrawAmount;
    withdrawAmount.innerText = totalWithdraw;
    const balanceAmount = document.querySelector('#balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const currentBalance = parseFloat(balanceAmountString);
    const updateBalance = currentBalance - withDrawAmount;
    balanceAmount.innerText = updateBalance;
    
})