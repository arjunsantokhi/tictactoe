const submitBtn = document.querySelector(".submit");
const restartBtn = document.querySelector('.restart');
const clearDataBtn = document.querySelector('.clear');
const usernameTxt = document.querySelector(".username");
const usernameTwoTxt = document.querySelector(".username-two");

if(submitBtn) {
    submitBtn.addEventListener('click', getPlayerName);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame)
}

if(restartBtn) {
    restartBtn.addEventListener('click', endGame);
}

if(clearDataBtn) {
    clearDataBtn.addEventListener('click', clearDataFunciton);
}

if(usernameTxt) {
    usernameTxt.addEventListener('click', clearUsernameOne);
}

if(usernameTwoTxt) {
    usernameTwoTxt.addEventListener('click', clearUsernameTwo);
}