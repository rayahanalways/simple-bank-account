document.querySelector('#submit-btn').addEventListener('click',function() {
    const userEmail = document.querySelector('#email');
    const email = userEmail.value;
    const userPass = document.querySelector('#password')
    const password = userPass.value;
    if( email === 'rayahanparvez99@gmail.com' && password === 'rayahan'){
        window.location.href = 'bank.html';
    }
})


 
