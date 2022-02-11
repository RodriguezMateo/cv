const buttonColours = ['red','blue', 'green', 'yellow'];
const gamePattern = [];
const userClickedPattern = [];
var level = 0;
var auxLevel = 0;


$('body').keypress(function () { 
    if ((level == 0)){
        nextSequence();
    }
 });

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    for (let index = 0; index < gamePattern.length; index++) {
            setTimeout(()=>{
            $("#" + gamePattern[index]).fadeOut(100).fadeIn(100);
            playSound(gamePattern[index]);
            }, index*500)
        
    }
    $('#level-title').text('Nivel ' + (level + 1));
    level++;
    auxLevel = 0;
    userClickedPattern.length = 0;
  }

$('.btn').on('click', handleClick );

function handleClick(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatedPress(userChosenColour);
    if (auxLevel < level){
        checkAnswer(auxLevel);
        auxLevel++;
    }
    if((auxLevel >= level) && (level != 0)){
        setTimeout(()=>{nextSequence()}, 700);
    }
}

function playSound(name) {
    var audio = new Audio(src = 'sounds/' + name + '.mp3');
    audio.play();
  }

function animatedPress(currentColor) {
    $('#' + currentColor).addClass('pressed');
    setTimeout( () => {$('#' + currentColor).removeClass('pressed');}, 100);
  }

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        console.log('success');
        console.log(userClickedPattern);
        console.log(gamePattern);
    } else {
        console.log('wrong');
        wrongAnswer();
        console.log(userClickedPattern);
        console.log(gamePattern);
    }
}

function wrongAnswer() {
    playSound('wrong');
    $('body').addClass('game-over');
    setTimeout(()=>{
        $('body').removeClass('game-over');
    }, 200);
    $('#level-title').text('Fin del Juego');
    setTimeout(()=>{
        $('#level-title').text('Presione cualquier tecla para reiniciar');
    }, 1000);
    level = 0;
    gamePattern.length = 0;

}


