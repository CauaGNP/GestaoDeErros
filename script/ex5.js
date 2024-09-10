let check = document.querySelector('.checkbutton');
let button = document.querySelector('#submitButton');
let mainLogin = document.querySelector('#mainloginId');
let mainDP = document.querySelector('#dadosPessoais');

button.addEventListener('click', () => {
      let user = document.querySelector('#userId');
      let password = document.querySelector('#senhaId');
      if (user.value != 'cleber123' || password.value != '1234'){
        alert('Nome do usuário ou senha incorreta')
        user.value = '';
        password.value = '';
        user.focus();
      }else{
        mainLogin.style.display = 'none'
        mainDP.style.display = 'flex' 
      }
})

check.addEventListener('click', () =>{
    let password = document.querySelector('#senhaId');
    let verificar = password.getAttribute('type');

    if (verificar == 'password'){
        password.type = "text";
    }else{
        password.type = "password"
    }

})

let image = document.getElementById('selectImageId')
let img = document.querySelector('#imagem')

image.addEventListener('change', ()=>{
    imagemSRC = 
    image.value;
    console.log(imagemSRC)
    img.src = imagemSRC
})