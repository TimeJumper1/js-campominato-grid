// popolare la griglia di tot quadrati in base alla difficolta
// facile 100 , medio 81 , difficile 49
// quando si clicca un quadrato si aggiunge la classe active
let test = 0;


document.getElementById('play').addEventListener('click', startGame);

function startGame(difficolta){
    const gridContainer = document.getElementById('ms_grid');
    gridContainer.innerHTML = '';
    let difficoltas = document.getElementById('difficulty-selector').value;



    if (difficoltas === '100'){
        test = 100
    }else if(difficoltas === '81'){
        test = 81
    }else if(difficoltas === '49'){
        test = 49
    } 
    for (let i = 1; i < test+1; i++){
        function generateSquareElement(quantyOfSquares){
            const newSquare = document.createElement('div');
            newSquare.classList.add(`ms_square_${quantyOfSquares}`  );

            newSquare.innerHTML = `<span>${i}</span>`;
            return newSquare;
        }
        const newGenerateSquare = generateSquareElement(difficoltas);
        newGenerateSquare.addEventListener('click', handleSquareClick);
        gridContainer.appendChild(newGenerateSquare);
    }
}

function handleSquareClick() {
    this.classList.add('active');
    
}



