function verificar() {

var data = new Date ()
var ano = data.getFullYear()
var fano = document.getElementById ('txtano')
var res = document.getElementById ('res')
if (fano.value.length == 0 || fano.value > ano) {


window.alert ('[ERRO] verifique seus dados e tende novamente')



}else {


var fsex = document.getElementsByName ('radsex')
var idade = ano-Number(fano.value)
var genero = ``
var img = document.createElement ('img')
img.setAttribute ('id', 'foto')
if (fsex [0].checked){

genero = 'Homem'
if(idade >=0 && idade <10) {

//criança
img.setAttribute('src', '')

} else if (idade <21){

//jovem


} else if (idade <50) {

//adulto


} else if (idade >60){

        //idoso
}

}else if (fsex [1].checked){


genero = 'Mulher'

if(idade >=0 && idade <10) {

    //criança
    
    } else if (idade <21){
    
    //jovem
    
    
    } else if (idade <50) {
    
    //adulto
    
    
    } else if (idade >60){
    
            //idoso
    }

}

res.innerHTML = `Detectamos ${genero} com ${idade} anos.`


}




}