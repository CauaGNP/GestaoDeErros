let button = document.querySelector('#buttonSubmit');

button.addEventListener('click', () => {
    alert('Campo preenchido incorretamente');
    
    document.querySelector('#emailId').value = '';
    document.querySelector('#userId').value = '';
    document.querySelector('#passwordId').value = '';
    document.querySelector('#confirmPassword').value = '';
})