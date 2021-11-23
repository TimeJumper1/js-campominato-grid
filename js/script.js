// popolare la griglia di tot quadrati in base alla difficolta
// facile 100 , medio 81 , difficile 49
// quando si clicca un quadrato si aggiunge la classe active

let test = 100;
document.getElementById('play').addEventListener('click', startGame);

function startGame(){
    const gridContainer = document.getElementById('ms_grid');
    gridContainer.innerHTML = '';
    for (let i = 1; i < 101; i++){
        function generateSquareElement(quantyOfSquares){
            const newSquare = document.createElement('div');
            newSquare.classList.add('ms_square');
            newSquare.innerHTML = `<span>${i}</span>`;
            return newSquare;
        }
        const newGenerateSquare = generateSquareElement(test);
        newGenerateSquare.addEventListener('click', handleSquareClick);
        gridContainer.appendChild(newGenerateSquare);
    }
}

function handleSquareClick() {
    this.classList.add('active');
    const thisSquareNumber =  this.querySelector('span').textContent ;
}