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
        const userMove = document.querySelector("user-move");
        const aiMove = document.querySelector("ai-move");

// Ai options
    const aiOptions = ["rock", "paper", "scissors", "lizzard", "spock"];

        options.forEach(option =>{
            option.addEventListener("click", function(){
                
                // Ai choice
                const aiNum = Math.floor(Math.random() * 5);
                const aiChoice = aiOptions[aiNum];
                // calling compare moves function

                compareMove(this.textContent, aiMove);
            
    
                assets/images
    

            // updating images
            userMove.src = "./assets/images/${this.textContent}.png";
            aiMove.src = "./assets/images/${aiChoice}.png";
        });
    });
};

    const compareMove =(userMove, aiMove) =>{
        // checking for tie
        const winner = document.querySelector(".winner");
        if(userMove === aiMove){
            winner.textContent = "Tie";
            return;
        }
        
        //checking for rock

        if (userMove === "rock");
        if (aiMove === "paper", "spock"){
        winner.textContent = "You lose."
            return;
        }else{
            winner.textContent = "You win";
            return;
        };

        //checking for paper

        if (userMove === "paper");
        if (aiMove === "scissor", "lizzard"){
        winner.textContent = "You lose."
            return;
        }else{
            winner.textContent = "You win";
            return;
        };

        //checking for scissors

        if (userMove === "scissors");
        if (aiMove === "spock", "rock"){
        winner.textContent = "You lose."
            return;
        }else{
            winner.textContent = "You win";
            return;
        };

        //checking for spock

        if (userMove === "spock");
        if (aiMove === "paper", "lizzard"){
         winner.textContent = "You lose."
            return;
        }else{
            winner.textContent = "You win";
            return;
        };

         //checking for lizzard

        if (userMove === "lizzard");
        if (aiMove === "scissors", "rock"){
        winner.textContent = "You lose."
            return;
        }else{
             winner.textContent = "You win";
             return;
        };
    };     

// call inner functions
    startGame();
    playMatch();
};

// start game function

game();
