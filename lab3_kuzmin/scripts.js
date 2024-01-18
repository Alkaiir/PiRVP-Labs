// pipe = [top, right, bottom, left]
//  010
//  111
//  010
let P1 = [1,1,1,1];

//  000
//  111
//  000
let P2 = [0,1,0,1];

//  010
//  010
//  010
let P3 = [1,0,1,0];

//  010
//  011
//  000
let P4 = [1,1,0,0];

//  000
//  011
//  010
let P5 = [0,1,1,0];

//  000
//  110
//  010
let P6 = [0,0,1,1];

//  010
//  110
//  000
let P7 = [1,0,0,1];

let gameFieldMatrix = [];

let username = '';

function closeGuide () {
    let guide = document.querySelector('.guide');
    guide.setAttribute('class', 'guide hiddenScreen')
}

function openGuide () {
    let guide = document.querySelector('.guide');
    guide.setAttribute('class', 'guide visibleScreen')
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function pipesGenerate () {
    let randomInt = getRandomInt(7);
    if (randomInt === 0) {
        randomInt += 1;
    }
    switch(randomInt) {
        case 1:
            return P1;

        case 2:
            return P2;

        case 3:
            return P3;

        case 4:
            return P4;

        case 5:
            return P5;

        case 6:
            return P6;

        case 7:
            return P7;
    }
}

function tileRotate (id) {
    let tileClass = document.querySelector(`#${id}`);
    let randomMass = id.split('-');
    switch(tileClass.getAttribute('class')){
        case('tile-p1'):
            break;
        case('tile-p2'):
            tileClass.setAttribute('class', 'tile-p3');
            gameFieldMatrix[randomMass[1]][randomMass[2]] = P3;
            break;
        case('tile-p3'):
            tileClass.setAttribute('class', 'tile-p2');
            gameFieldMatrix[randomMass[1]][randomMass[2]] = P2; 
            break;
        case('tile-p4'):
            tileClass.setAttribute('class', 'tile-p5');
            gameFieldMatrix[randomMass[1]][randomMass[2]] = P5; 
            break;
        case('tile-p5'):
            tileClass.setAttribute('class', 'tile-p6');
            gameFieldMatrix[randomMass[1]][randomMass[2]] = P6; 
            break;
        case('tile-p6'):
            tileClass.setAttribute('class', 'tile-p7');
            gameFieldMatrix[randomMass[1]][randomMass[2]] = P7; 
            break;
        case('tile-p7'):
            tileClass.setAttribute('class', 'tile-p4');
            gameFieldMatrix[randomMass[1]][randomMass[2]] = P4; 
            break;
    }
}

function gameFieldFill () {
    let gameField = document.querySelector('.gameField');
    for (let i = 0; i < 5; ++i) {
        let fieldRow = document.createElement('div');
        fieldRow.setAttribute('class', 'row');
        fieldRow.setAttribute('id', `row-${i}`);
        let rowMatrix = [];
        for (let j = 0; j < 5; ++j) {
            let tileMatrix = pipesGenerate();
            let rowTile = document.createElement('div');
            rowMatrix.push(tileMatrix);
            switch (tileMatrix) {
                case P1:
                    rowTile.setAttribute('class', 'tile-p1');
    
                    break;

                case P2:
                    rowTile.setAttribute('class', 'tile-p2');
                    break;

                case P3:
                    rowTile.setAttribute('class', 'tile-p3');
                    break;

                case P4:
                    rowTile.setAttribute('class', 'tile-p4');
                    break;

                case P5:
                    rowTile.setAttribute('class', 'tile-p5');
                    break;

                case P6:
                    rowTile.setAttribute('class', 'tile-p6');
                    break;

                case P7:
                    rowTile.setAttribute('class', 'tile-p7');
                    break;
            }
            rowTile.setAttribute('id', `tile-${i}-${j}`);
            rowTile.setAttribute('onclick', `tileRotate(\'tile-${i}-${j}\')`);
            fieldRow.append(rowTile);
        }
        gameFieldMatrix.push(rowMatrix);
        gameField.append(fieldRow);
    }
 }

function startGame (){
    let input = document.querySelector('.usernameInput').value;
    if (input === '' || input === 0) {
        alert('Необходимо ввести имя игрока !');
    } else {
        username = input;
        let startScreen = document.querySelector('.startScreen');
        startScreen.setAttribute('class', 'hiddenScreen');
        gameFieldFill();
    }
}


function blockRotate (id) {
    let block = document.querySelector('#'+id);
    if (block.style.transform === '') {
        block.style.transform = 'rotate(90deg)';
    } else if (block.style.transform === 'rotate(90deg)') {
        block.style.transform = 'rotate(180deg)';
    } else if (block.style.transform === 'rotate(180deg)') {
        block.style.transform = 'rotate(270deg)';
    } else if (block.style.transform === 'rotate(270deg)') {
        block.style.transform = 'rotate(360deg)';
    } else if (block.style.transform === 'rotate(360deg)') {
        block.style.transform = 'rotate(90deg)';
    }

    let block_id = id.slice(6, 9);
    console.log(`Вы перевернули блок ` + block_id)
    let block_x = +block_id.slice(0,1);
    let block_y = +block_id.slice(2,3);
    console.log(mass[block_y])
    let newMass = rotateRight90(mass[block_y]);
    mass[block_y] = newMass;
    console.log(`Теперь он выглядит так `)
    console.log(mass[block_y])
}