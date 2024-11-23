// ROCK PAPER SCISSORS


const options = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computerplayer = document.getElementById("computerplayer");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerscore = 0;
let computerscore = 0;


function playgame(playeroption) {


    const computeroption = options[Math.floor(Math.random() * 3)];
    let result = "";

    if (playeroption === computeroption){
        result = "IT'S A TIE!";

    }
    else{
        switch (playeroption){
            case "rock":
                result =   (computeroption === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result =   (computeroption === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result =   (computeroption === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;    

                       

            
        
        }

    }
    
    player.textContent = `PLAYER: ${playeroption}`
    computerplayer.textContent = `COMPUTER: ${computeroption}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greentext", "redtext");

    switch(result){
        case "YOU WIN!":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "YOU LOSE!":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;
    }
    
}