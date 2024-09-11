let check = document.querySelector('.checkbutton');
let button = document.querySelector('#submitButton');
let mainLogin = document.querySelector('#mainloginId');
let mainDP = document.querySelector('#dadosPessoais');

button.addEventListener('click', () => {
      let user = document.querySelector('#userId');
      let password = document.querySelector('#senhaId');
      if( user.value == '' || password.value == ''){
        alert('Você não poderá prosseguir sem digitar o usuario ou a senha')
      }else if ((user.value != 'cleber123' && user.value != 'Cleber123' )|| password.value != '1234' ){
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

const changeImage = () => {

  // Pega o input
  let image = document.getElementById('selectImageId');

  // O 'image.files[0]' serve para pegar o primeiro arquivo do input file, pois pode haver vários arquivos
  // O 'URL.createObjectUrl' serve para converter esse arquivo em um 'blob' (binary large object). O atributo src da tag img também aceita blobs como imagens
  let newImageSrc = URL.createObjectURL(image.files[0]);

  // Por fim, pego a minha tag img e altero o src dela por meio do setAttribute, onde o primeiro parâmetro é o atributo que quero alterar, nesse caso, o 'src', e o segundo
  // o valor que quero colocar
  document.getElementById('imagem').setAttribute('src', newImageSrc)
}

// let image = document.getElementById('selectImageId')
// let img = document.querySelector('#imagem')

// image.addEventListener('change', ()=>{
//     imagemSRC = 
//     image.value;
//     console.log(imagemSRC)
//     img.src = imagemSRC
// })