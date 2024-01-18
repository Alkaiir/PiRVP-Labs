let gameStatuses = [0, 1, 2];
let gameStatus = 0;
let hp = 3;
let username;
let fruitNumber = 0;

let lossHP = () => {
    if (hp === 1) {
        let point = document.querySelector('#hp1');
        point.remove();
        gameStatus = 0;
    }
    if (hp === 2) {
        let point = document.querySelector('#hp2');
        point.remove();
        hp = 1;
    }
    if (hp === 3) {
        let point = document.querySelector('#hp3');
        point.remove();
        hp = 2;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// let fruitDrop = (id, fruitType) => {
//     let speed;
//     if (fruitType === 0) {
//         speed = 10
//     } else if (fruitType === 1) {
//        speed = 5
//     } else if (fruitType === 2) {
//        speed = 15;
//     }
//     let fruit = document.querySelector(`#${id}`);
//     let fruitTop = parseInt(fruit.style.top);
//     fruit.style.top = `${fruitTop + speed}px`;
// }
//
// let startFruitDrop = (id, fruitType) => {
//     let windowHeight = window.innerHeight;
//     let fruit = document.querySelector(`#${id}`);
//     if (parseInt(fruit.style.top) >= windowHeight) {
//         console.log('Упал')
//     } else {
//         fruitDrop(id, fruitType)
//         setTimeout(fruitDrop, 1000/60);
//     }
// }

let fruitCreate = () => {
    let fruitType = getRandomInt(3);
    let field = document.querySelector('.gameScreenContent');
    let fruit = document.createElement('img');
    let fruitId;
    if (fruitType === 0) {
        fruit.setAttribute('src', 'src/Apple.png');
        fruit.setAttribute('class', 'apple');
        fruit.setAttribute('id', `fruit-apple-${fruitNumber}`);
        fruitId = `fruit-apple-${fruitNumber}`;
        fruitNumber +=1;
    } else if (fruitType === 1) {
        fruit.setAttribute('src', 'src/Banana.png');
        fruit.setAttribute('class', 'banana');
        fruit.setAttribute('id', `fruit-banana-${fruitNumber}`);
        fruitId = `fruit-banana-${fruitNumber}`;
        fruitNumber +=1;
    } else if (fruitType === 2) {
        fruit.setAttribute('src', 'src/Orange.png');
        fruit.setAttribute('class', 'orange');
        fruit.setAttribute('id', `fruit-orange-${fruitNumber}`);
        fruitId = `fruit-orange-${fruitNumber}`;
        fruitNumber +=1;
    }
    let xPos = getRandomInt(100);
    fruit.style.position = 'absolute';
    fruit.style.left = `${xPos}vw`;
    field.append(fruit);
}



let platformMove = (direction) => {
    let platform = document.querySelector('.platform');
    if (direction === '>') {
        if (parseInt(platform.style.left) < (innerWidth - 209)) {
            platform.style.left = parseInt(platform.style.left) + 15 + 'px'
        }
    }
    if (direction === '<') {
        if (parseInt(platform.style.left) > 7) {
            platform.style.left = parseInt(platform.style.left) - 15 + 'px'
        }
    }
}

let startGame = () => {
    let usernameValidation = document.querySelector('.usernameInput').value
    if (usernameValidation !== '') {
        gameStatus = 1;
        username = document.querySelector('.usernameInput').value;
        let startScreen = document.querySelector('.startScreen');
        startScreen.style.display = 'none';
        let platform = document.querySelector('.platform');
        platform.style.left = getComputedStyle(platform).left;
        document.addEventListener('keydown', function(event) {
            if (event.code === 'ArrowRight') {
                let direction = '>'
                platformMove(direction);
            }
            if (event.code === 'ArrowLeft') {
                let direction = '<'
                platformMove(direction);
            }
        });
    } else {
        alert('Введите свое имя !')
    }
}