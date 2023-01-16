//VARS
const images = document.querySelectorAll('.boxes');
const playerTurn = document.querySelector('.player-turn');
const wrapper = document.querySelector('.wrapper');
const form = document.querySelectorAll('.form');
const buttons = document.querySelectorAll('.img-box');

const divBoard = [
    [images[0], images[3], images[6]],
    [images[1], images[4], images[7]],
    [images[2], images[5], images[8]]
]

const imgBoard = [
    [buttons[0], buttons[3], buttons[6]],
    [buttons[1], buttons[4], buttons[7]],
    [buttons[2], buttons[5], buttons[8]]
]

//default settings
let playerOneWins = 0;
let playerTwoWins = 0;
let gameOver = false;
let turn = true;
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function clearUsernameOne() {
    usernameTxt.value = '';
}

function clearUsernameTwo() {
    usernameTwoTxt.value = '';
}

function clearDataFunciton() {
    localStorage.clear();
    window.location.reload();
}

function getPlayerName() {
    if (usernameTxt && usernameTxt.value && usernameTwoTxt && usernameTwoTxt.value) {
        localStorage.setItem('player-one-username', usernameTxt.value);
        localStorage.setItem('player-two-username', usernameTwoTxt.value);
        if (localStorage.getItem('player-one-wins') === 1) {
            alert(true);
        }
        document.querySelector('.player-one').innerHTML = localStorage.getItem('player-one-username') + ": " + localStorage.getItem('player-one-wins');
        document.querySelector('.player-two').innerHTML = localStorage.getItem('player-two-username') + ": " + localStorage.getItem('player-two-wins');
        form[0].style.display = "none";
        form[1].style.display = "block";
        wrapper.style.display = "grid";
    }
    else {
        alert("Enter your username.");
    }
}

function updatePlayerData() {
    localStorage.setItem('player-one-wins', playerOneWins);
    localStorage.setItem('player-two-wins', playerTwoWins);
    document.querySelector('.player-one').innerHTML = localStorage.getItem('player-one-username') + ": " + localStorage.getItem('player-one-wins');
    document.querySelector('.player-two').innerHTML = localStorage.getItem('player-two-username') + ": " + localStorage.getItem('player-two-wins');
}

function refreshPlayerData() {
    playerOneWins = parseInt(localStorage.getItem('player-one-wins'));
    playerTwoWins = parseInt(localStorage.getItem('player-two-wins'));
    document.querySelector('.player-one').innerHTML = localStorage.getItem('player-one-username') + ": " + localStorage.getItem('player-one-wins');
    document.querySelector('.player-two').innerHTML = localStorage.getItem('player-two-username') + ": " + localStorage.getItem('player-two-wins');
}

if (localStorage.length != 0) {
    refreshPlayerData();
    form[0].style.display = "none";
    form[1].style.display = "block";
    wrapper.style.display = "grid";
}

function endGame() {
    //console.log(images[0].children[0]);
    for (let i = 0; i < images.length; i++) {
        images[i].children[0].attributes[0].nodeValue = "img/blank.png"
        images[i].style.backgroundColor = "#27394b";
        turn = true;
        gameOver = false;
        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
}

function checkWinner(player) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player) {
            //endGame();
            console.log(player + " won");
            divBoard[0][i].style.backgroundColor = '#86ff9c';
            divBoard[1][i].style.backgroundColor = '#86ff9c';
            divBoard[2][i].style.backgroundColor = '#86ff9c';
            gameOver = true;
            if (player == 'o') {
                playerOneWins += 1;
                updatePlayerData();
            }
            else {
                playerTwoWins += 1;
                updatePlayerData();
            }
        } else if (board[0][i] == player && board[1][i] == player && board[2][i] == player) {
            //endGame();
            console.log(player + " won");
            divBoard[i][0].style.backgroundColor = '#86ff9c';
            divBoard[i][1].style.backgroundColor = '#86ff9c';
            divBoard[i][2].style.backgroundColor = '#86ff9c';
            gameOver = true;
            if (player == 'o') {
                playerOneWins += 1;
                updatePlayerData();
            }
            else {
                playerTwoWins += 1;
                updatePlayerData();
            }
        }

        if (board[0][0] != null && board[0][1] != null && board[0][2] != null && board[1][0] != null && board[1][1] != null && board[1][2] != null && board[2][0] != null && board[2][1] != null && board[2][2] != null) {
            console.log("tie");
        }
    }
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
        //endGame();
        console.log(player + " won");
        divBoard[0][0].style.backgroundColor = '#86ff9c';
        divBoard[1][1].style.backgroundColor = '#86ff9c';
        divBoard[2][2].style.backgroundColor = '#86ff9c';
        gameOver = true;
        if (player == 'o') {
            playerOneWins += 1;
            updatePlayerData();
        }
        else {
            playerTwoWins += 1;
            updatePlayerData();
        }
    } else if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
        //endGame();
        console.log(player + " won");
        divBoard[0][2].style.backgroundColor = '#86ff9c';
        divBoard[1][1].style.backgroundColor = '#86ff9c';
        divBoard[2][0].style.backgroundColor = '#86ff9c';
        gameOver = true;
        if (player == 'o') {
            playerOneWins += 1;
            updatePlayerData();
        }
        else {
            playerTwoWins += 1;
            updatePlayerData();
        }
    }
}

function playGame(data) {
    console.log(data);
    console.log(data.target.attributes[1].nodeValue.charAt(12));

    //let row = data.path[1].classList[2].charAt(4);//outdated???
    //let col = data.path[1].classList[3].charAt(4);

    let row = data.target.attributes[1].nodeValue.charAt(12);
    let col = data.target.attributes[1].nodeValue.charAt(18);

    //console.log(row);
    //console.log(col);

    if (gameOver == false && data.target.attributes[0].nodeValue == "img/blank.png" && board[col - 1][row - 1] == null) {
        if (turn == false) {

            //computer move start
            // board[i][j] = "x";
            //computer move end


            data.target.attributes[0].nodeValue = "img/x.png";
            board[col - 1][row - 1] = "x";

            //computerMover();
            turn = true;
            checkWinner("x");
            playerTurn.innerHTML = "O turn";


            //console.log(data.path[1].classList[2].charAt(4))
            //console.log(data.path[1].classList[3].charAt(4))
        }
        else {
            data.target.attributes[0].nodeValue = "img/o.png";
            board[col - 1][row - 1] = "o";
            turn = false;
            checkWinner("o");
            playerTurn.innerHTML = "X turn";
            //console.log(data.path[1].classList[2].charAt(4))
            //console.log(data.path[1].classList[3].charAt(4))
        }
    }
    console.log(localStorage.getItem('player-one-wins'));
    console.log(board);
}