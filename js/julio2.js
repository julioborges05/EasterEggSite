const corpo = document.getElementsByTagName('body')[0];
corpo.classList.add("btn3");

document.getElementById('btn1').addEventListener("click", funcao1 = () =>{
    corpo.classList.remove("btn2", "btn3");
    corpo.classList.add("btn1");
    easterEgg(1);
});
document.getElementById('btn2').addEventListener("click", funcao2 = () =>{
    corpo.classList.remove("btn1", "btn3");
    corpo.classList.add("btn2");
    easterEgg(2);
});
document.getElementById('btn3').addEventListener("click", funcao3 = () =>{
    corpo.classList.remove("btn1", "btn2");
    corpo.classList.add("btn3");
    easterEgg(3);
});

let comparador = [];
const resultado = [1,3,2];

easterEgg = (teste) => {
    if(teste == 1){
        comparador = [];
    }
    comparador.push(teste);
    //alert(comparador);
    if(comparador.length == resultado.length){
        if(acertou()){
            alert("Você encontrou o EasterEgg");
            comparador = [];
        }
    }else if(comparador.length > resultado.length){
        comparador = [];
    }
}

acertou = () => {
    for(let i = 0; i < resultado.length; i++){
        if(comparador[i] != resultado[i]){
            comparador = [];
            return false;
        }
    }
    return true;
}