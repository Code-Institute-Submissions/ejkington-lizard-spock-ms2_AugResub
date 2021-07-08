// globalScope
const game = ()=> {
    let userScore = 0;
    let aiScore = 0;
 
// function for changing intro screen to match screen and start game

    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
        // play match

    const playMatch = () => {
        const options = document.querySelectorAll (".options button");
        const userMove = document.querySelector(".user-move");
        const aiMove = document.querySelector(".ai-move");
        const choice = document.querySelectorAll(".move img");

        

       

        // Ai options
    const aiOptions = ["rock", "paper", "scissors", "lizzard", "spock"];

        options.forEach(option =>{
            option.addEventListener("click", function(){
                
                // Ai choice
                const aiNum = Math.floor(Math.random() * 5);
                const aiChoice = aiOptions[aiNum];
                
                // calling compare moves function
                setTimeout(() => {
                compareMove(this.textContent, aiChoice);
                
                // updating image
                 
                userMove.src =`./assets/images/${this.textContent}.png`;
                aiMove.src = `./assets/images/${aiChoice}.png`;
            }, 20);

                
            
    
        });
    });
};

const updateScore = () => {
    const userScore = document.querySelector(".user-score p");
    const aiScore = document.querySelector(".ai-score p");
    userScore.textContent = userScore;
    aiScore.textContent = aiScore;
  };

    const compareMove =(userMove, aiChoice) =>{
        // checking for tie
        const winner = document.querySelector(".winner");
        if(userMove === aiChoice){
            winner.textContent = "Tie";
            return;
        }
        
        //checking for rock

        if (userMove === "rock"){ 
        if (aiChoice === "scissors" || aiChoice === "lizzard"){
             winner.textContent = "You Win"
            userScore++;
            updateScore();
            return;
        }else{
             winner.textContent = "You Lose";
            aiScore++;
            updateScore();
            return;
        }
    }
        //checking for paper

        if (userMove === "paper"){ 
        if (aiChoice === "rock" || aiChoice === "spock"){
             winner.textContent = "You Win."
            userScore++;
            updateScore();
            return;
        }else{
             winner.textContent = "You Lose";
            aiScore++;
            updateScore();
            return;
        }
    }

        //checking for scissors

        if (userMove === "scissors"){ 
        if (aiChoice === "lizzard" || aiChoice === "paper"){
             winner.textContent = "You Win."
            userScore++;
            updateScore();
            return;
        }else{
             winner.textContent = "You Lose";
            aiScore++;
            updateScore();
            return;
        }
    }

        //checking for spock

        if (userMove === "spock"){ 
        if (aiChoice === "scissors" || aiChoice === "rock"){
             winner.textContent = "You Win."
            userScore++;
            updateScore();
            return;
        }else{
                winner.textContent = "You Lose";
            aiScore++;
            updateScore();
            return;
        }
    }

         //checking for lizzard

        if (userMove === "lizzard"){ 
        if (aiChoice === "spock" || aiChoice === "paper"){
             winner.textContent = "You Win."
            userScore++;
            updateScore();
            return;
        }else{
             winner.textContent = "You Lose";
            aiScore++;
            updateScore();
             return;
        };
    };  
};   

// call inner functions
    startGame();
    playMatch();
};

// start game function

game();
