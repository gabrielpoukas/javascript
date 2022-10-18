

function carregar () {

var msg = window.document.getElementById ('msg')
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `  <strong> Agora são </strong> ${hora}:${min} Horas`
if (hora >= 0 && hora <12 ) {

    //Bom dia

img.src = './imagens/imagemsite.png'
document.body.style.background ='#e2cd9f'

}else if (hora >= 12 && hora <= 18) {

    //boa tarde

img.src = './imagens/imagemtarde.png'
document.body.style.background ='#b9846f'

}else {

    //boa noite

img.src = './imagens/imagemnoite.png'
document.body.style.background='#515154'

        }

    }