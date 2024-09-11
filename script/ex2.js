const changeImage = () => {

    // Pega o input
    let image = document.getElementById('selectImageId');

    // O 'image.files[0]' serve para pegar o primeiro arquivo do input file, pois pode haver vários arquivos
    // O 'URL.createObjectUrl' serve para converter esse arquivo em um 'blob' (binary large object). O atributo src da tag img também aceita blobs como imagens
    let newImageSrc = URL.createObjectURL(image.files[0]);

    // Por fim, pego a minha tag img e altero o src dela por meio do setAttribute, onde o primeiro parâmetro é o atributo que quero alterar, nesse caso, o 'src', e o segundo
    // o valor que quero colocar
    document.getElementById('image').setAttribute('src', newImageSrc)
}