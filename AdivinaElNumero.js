// En este ejercicio hacemos un programa hecho en javascript para crear un mini juego de adivinar un numero pseudoaleatorio

let limiteAdivinar = parseInt(prompt("Ingrese hasta que numero le gustaria adivinar"))
let numeroSecreto = Math.floor(Math.random()*limiteAdivinar)+1; 
let numeroUsuario=0;
let intentos=1;

let maximosIntentos = 3;
while(numeroUsuario != numeroSecreto){

    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${limiteAdivinar} por favor:`))

    if(numeroSecreto == numeroUsuario){
        alert(`Acertaste, el numero es: ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' :'veces' }`)
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor")
        }else{
            alert("El numero secreto es mayor")
        }
        intentos ++;

        if(intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos el numero era ${numeroSecreto}`)
            break
        }        
    }
}