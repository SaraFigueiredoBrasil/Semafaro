

const semafaro = document.querySelector('img');
const buttons = document.getElementById('button');
let colorIndex = 0;

const emTrabalho = (event) =>{
    turnOns[event.target.id]();
};

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

// Desmembrando a div button ()
const turnOns ={
    'red': () => img.src='img/vermelho.png',
    'yellow': () => img.src='img/amarelo.png',
    'green': () => img.src='img/verde.png',
    'automatic': () => setInterval(changeColor, 1000)

}

buttons.addEventListener('click', emTrabalho);