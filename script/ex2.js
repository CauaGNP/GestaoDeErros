let image = document.getElementById('selectImageId')
let img = document.querySelector('.imagem')

image.addEventListener('change', ()=>{
    imagemSRC = 
    image.value;
    console.log(imagemSRC)
    img.setAttribute('src', imagemSRC)
})