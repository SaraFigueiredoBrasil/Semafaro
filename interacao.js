

const semafaro = document.querySelector('img');
const buttons = document.getElementById('button');
let colorIndex = 0;
let intervaloId= null;

//resposável por selecionar cada tag filho da div button
const emTrabalho = (event) =>{
    stopAutomatic();
    turnOns[event.target.id]();
    
};
//Responsável por trocar as cores no automático
const nexIndex = () =>{

    
    if(colorIndex <2){
    colorIndex++;
    }
    else{
        colorIndex =0;
    }
};

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green'];
    const color = colors [colorIndex];
    turnOns[color]();
    nexIndex();
}

const stopAutomatic= () =>{
    clearInterval( intervaloId);
};

// Desmembrando a div button ()
const turnOns ={
    'red': () => img.src='img/vermelho.png',
    'yellow': () => img.src='img/amarelo.png',
    'green': () => img.src='img/verde.png',
    'automatic': () =>intervaloId= setInterval(changeColor, 1000)

}

buttons.addEventListener('click', emTrabalho);