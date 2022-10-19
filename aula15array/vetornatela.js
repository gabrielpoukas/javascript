/*
let valores = [1,12,133,144,155,100]

for (let pos=0; pos < valores.length; pos++){

console.log(`A posição ${pos} tem o valor ${valores [pos]}`)


}

*/
let valores = [1,12,133,144,155,100]
valores.sort()

for (let pos in valores){

console.log (`A posição ${pos} tem o valor ${valores [pos]} `)


}