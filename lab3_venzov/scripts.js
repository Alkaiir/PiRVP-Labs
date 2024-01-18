let matrixProperty = 0;
let bombCount = 0;
let username;
let matrix = [];
let gameStatus = false;
let isPaused = false;
let timerCreated = false;
let roundTime;
let score = 0;

let endGame = () => {


    let endGameTrigger = () => {
        if (gameStatus === false) {
            let endScreenUsername = document.querySelector('.nickname');
            endScreenUsername.textContent = username;
            let endScreenScore = document.querySelector('.score');
            endScreenScore.textContent = 'Ты набрал ' + score + ' очков !';
            let endScreen = document.querySelector('.endScreen');
            endScreen.style.display = 'flex';
        }
    }

    endGameTrigger();
    let endGameTriggerId = setInterval(endGameTrigger, 1000);
}

let timer = () => {
    let deadline = new Date();
    // конечная дата, например 1 июля 2021
    if (timerCreated === false) {
        deadline.setMinutes(deadline.getMinutes() + roundTime);
        timerCreated = true;
    }

    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    let countdownTimer = () => {
        if (isPaused === false) {
            const diff = deadline - new Date();
            if (diff <= 0) {
                gameStatus = false;
                clearInterval(timerId);
            }
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
            newMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            newSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        } else {
            deadline.setSeconds(deadline.getSeconds() + 1);
        }
    }
    // получаем элементы, содержащие компоненты даты
    let newMinutes = document.querySelector('.timerMinutes');
    let newSeconds = document.querySelector('.timerSeconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    let timerId = setInterval(countdownTimer, 1000);
}

let gameFieldView = () => {
    console.log(matrix);
};


let startScreenSwap = () => {
    let input = document.querySelector('.usernameInput').value;
    if (input !== '' && input !== 0) {
        let startScreen = document.querySelector('.startScreen');
        startScreen.style.display = 'none';
        username = input;
    } else {
        alert('Введите имя пользователя');
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let setMatrixProperty = (temp) => {
    matrixProperty = temp;
    let startButton = document.querySelector('.startButton');
    startButton.textContent = '';
    bombCount = Math.trunc((temp * temp) / 2.5)
    switch (matrixProperty) {
        case (5):
            roundTime = 1;
            startButton.style.display = 'block';
            startButton.textContent = 'Начать игру с полем 5x5';
            break;
        case (7):
            roundTime = 4;
            startButton.style.display = 'block';
            startButton.textContent = 'Начать игру с полем 7x7';
            break;
        case (9):
            roundTime = 6;
            startButton.style.display = 'block';
            startButton.textContent = 'Начать игру с полем 9x9';
            break;
        case (11):
            roundTime = 9;
            startButton.style.display = 'block';
            startButton.textContent = 'Начать игру с полем 11x11';
            break;

    }
}

let matrixFill = () => {
    let bombOnGameField = 0;
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j){
            let random__ = getRandomInt(2);
            if (random__ === 0) {
                matrix[i][j] = 0;
            } else {
                if (bombOnGameField < bombCount) {
                    matrix[i][j] = 9;
                    bombOnGameField +=1;
                } else {matrix[i][j] = 0; }
            }
         }
    }
};

let nearBombCounter = (i,j) => {
    if(matrix[i][j] === 0) {
        let bombsNear = 0;

        try {
            if (matrix[i - 1][j - 1] === 9) {
                bombsNear += 1;
            }
        } catch (err) {
            console.log('Нет такого элемента массива')
        }

        try {
            if(matrix[i-1][j] === 9) {
                bombsNear += 1;
            }
        } catch (err) {
            console.log('Нет такого элемента массива')
        }

        try {
            if(matrix[i-1][j+1] === 9) {
                bombsNear += 1;
            }
        } catch (err) {
            console.log('Нет такого элемента массива')
        }

        try {
            if(matrix[i][j-1] === 9) {
                bombsNear += 1;
            }
        } catch (err) {
            console.log('Нет такого элемента массива')
        }

        try {
            if(matrix[i][j] === 9) {
                bombsNear += 1;
            }
        } catch (err) {
            console.log('Нет такого элемента массива')
        }

        try {
            if(matrix[i][j+1] === 9) {
                bombsNear += 1;
            }
        } catch (err) {
            console.log('Нет такого элемента массива')
        }

        try {
            if(matrix[i+1][j-1] === 9) {
                bombsNear += 1;
            }
        } catch (err) {
            console.log('Нет такого элемента массива')
        }

        try {
            if(matrix[i+1][j] === 9) {
                bombsNear += 1;
            }
        } catch (err) {
            console.log('Нет такого элемента массива')
        }

        try {
            if(matrix[i+1][j+1] === 9) {
                bombsNear += 1;
            }
        } catch (err) {
            console.log('Нет такого элемента массива')
        }

        return bombsNear;

    }
}

let matrixRefill = () => {
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j] !== 9){
                matrix[i][j] = nearBombCounter(i,j);
            }
        }
    }
}

let createMatrix = () => {
    matrix = [];
    for (let i = 0; i < matrixProperty; ++i) {
        let matrixRow = [];
        for (let j = 0; j < matrixProperty; ++j){
            matrixRow[j] = 0;
         }
        matrix.push(matrixRow);
    }
    matrixFill();
    matrixRefill();
}

let openTileOld = (i,j) => {
    let tile = document.querySelector(`#tile-${i}-${j}`);
    if (matrix[i][j] === 9){
        tile.innerHTML = '💣';
        tile.style.backgroundColor = '#a6a3a3'
        setTimeout(gameStatus = false, 2000);
    } else {
        tile.innerHTML = matrix[i][j];
        tile.style.backgroundColor = '#a6a3a3'


        try {
            if (matrix[i-1][j-1] !== 9) {
                let tileNear = document.querySelector(`#tile-${i-1}-${j-1}`);
                tileNear.innerHTML = matrix[i-1][j-1];
                tileNear.style.backgroundColor = '#a6a3a3'
                //[*][][]
                //[][1][]
                //[][][]
                // openTile(i-1,j-1);
            }
        } catch (err) {

        }

        try {
            if (matrix[i-1][j] !== 9) {
                let tileNear = document.querySelector(`#tile-${i-1}-${j}`);
                tileNear.innerHTML = matrix[i-1][j];
                tileNear.style.backgroundColor = '#a6a3a3'
                //[][*][]
                //[][1][]
                //[][][]
                // openTile(i-1,j);
            }
        } catch (err) {

        }

        try {
            if (matrix[i-1][j+1] !== 9) {
                let tileNear = document.querySelector(`#tile-${i-1}-${j+1}`);
                tileNear.innerHTML = matrix[i-1][j+1];
                tileNear.style.backgroundColor = '#a6a3a3'
                //[][][*]
                //[][1][]
                //[][][]
                // openTile(i-1,j+1);
            }
        } catch (err) {

        }

        try {
            if (matrix[i][j-1] !== 9) {
                let tileNear = document.querySelector(`#tile-${i}-${j-1}`);
                tileNear.innerHTML = matrix[i][j-1];
                tileNear.style.backgroundColor = '#a6a3a3'
                //[][][]
                //[*][1][]
                //[][][]
                // openTile(i,j-1);
            }
        } catch (err) {

        }

        try {
            if (matrix[i][j+1] !== 9) {
                let tileNear = document.querySelector(`#tile-${i}-${j+1}`);
                tileNear.innerHTML = matrix[i][j+1];
                tileNear.style.backgroundColor = '#a6a3a3'
                //[][][]
                //[][1][*]
                //[][][]
                // openTile(i,j+1);
            }
        } catch (err) {

        }

        try {
            if (matrix[i+1][j-1] !== 9) {
                let tileNear = document.querySelector(`#tile-${i+1}-${j-1}`);
                tileNear.innerHTML = matrix[i+1][j-1];
                tileNear.style.backgroundColor = '#a6a3a3'
                //[][][]
                //[][1][]
                //[*][][]
                // openTile(i+1,j-1);
            }
        } catch (err) {

        }

        try {
            if (matrix[i+1][j] !== 9) {
                let tileNear = document.querySelector(`#tile-${i+1}-${j}`);
                tileNear.innerHTML = matrix[i+1][j];
                tileNear.style.backgroundColor = '#a6a3a3'
                //[][][]
                //[][1][]
                //[][*][]
                // openTile(i+1,j);
            }
        } catch (err) {

        }

        try {
            if (matrix[i+1][j+1] !== 9) {
                let tileNear = document.querySelector(`#tile-${i+1}-${j+1}`);
                tileNear.innerHTML = matrix[i+1][j+1];
                tileNear.style.backgroundColor = '#a6a3a3'
                //[][][]
                //[][1][]
                //[][][*]
                // openTile(i+1,j+1);
            }
        } catch (err) {

        }


    }
}

let openTile = (i,j) => {
    let tile = document.querySelector(`#tile-${i}-${j}`);
    if (matrix[i][j] === 9){
        tile.innerHTML = '💣';
        tile.style.backgroundColor = '#a6a3a3'
        setTimeout(gameStatus = false, 2000);
    } else {
        tile.innerHTML = matrix[i][j];
        tile.style.backgroundColor = '#a6a3a3'
    }
}

let openAllTiles = () => {
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            let tile = document.querySelector(`#tile-${i}-${j}`);
            if (matrix[i][j] === 9){
                tile.innerHTML = '💣';
                tile.style.backgroundColor = '#a6a3a3'
            } else {
                tile.innerHTML = matrix[i][j];
                tile.style.backgroundColor = '#a6a3a3'
            }
        }
    }
}

let gameFieldCreate = () => {
    let gameField = document.querySelector('.gameField');
    gameField.remove();
    gameField = document.createElement('div');
    gameField.setAttribute('class','gameField');
    for (let i = 0; i < matrix.length; ++i) {
        let gameFieldRow = document.createElement('div');
        gameFieldRow.setAttribute('class', `row`);
        gameFieldRow.setAttribute('id', `row-${i}`);

        for (let j = 0; j < matrix[i].length; ++j){
            let gameFieldTile = document.createElement('div');
            gameFieldTile.setAttribute('class', `tile`);
            gameFieldTile.setAttribute('id', `tile-${i}-${j}`);
            // gameFieldTile.innerHTML = matrix[i][j];
            gameFieldTile.setAttribute('onclick', `openTile(${i},${j})`);
            gameFieldRow.append(gameFieldTile);
         }
         gameField.append(gameFieldRow);

    }
    let buttons = document.querySelector('.buttons');
    buttons.after(gameField);
}



let startGame = () => {
    createMatrix(0)
    gameStatus = true;
    gameFieldCreate();
    let buttons = document.querySelector('.buttons');
    buttons.style.display = 'none';
    let elems = document.querySelector('.gameElems');
    elems.style.display = 'flex'
    timer();
    endGame();
}

let showRules = () => {
    let rules = document.querySelector('.rules');
    rules.style.display = 'flex';
    isPaused = true;
}

let closeRules = () => {
    let rules = document.querySelector('.rules');
    rules.style.display = 'none';
    isPaused = false;
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Numpad5') {
        gameFieldView();
    }

    if (event.code === 'Numpad8') {
        openAllTiles();
    }
});
