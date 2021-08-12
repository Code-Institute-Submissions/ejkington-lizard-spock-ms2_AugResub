/*jshint esversion: 6 */

// globalScope
const game = () => {
    let userScore = "0";
    let aiScore = "0";

    // function for changing intro screen to match screen and start game when pressing start

    const startGame = () => {
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
        const options = document.querySelectorAll(".options button");
        const userMove = document.querySelector(".user-move");
        const aiMove = document.querySelector(".ai-move");

        // Ai options
        const aiOptions = ["rock", "paper", "scissors", "lizzard", "spock"];

        options.forEach(option => {
            option.addEventListener("click", function() {

                // Ai choice
                const aiNum = Math.floor(Math.random() * 5);
                const aiChoice = aiOptions[aiNum];

                // calling compare moves function
                setTimeout(() => {
                    compareMove(this.textContent, aiChoice);

                    // updating image

                    userMove.src = `./assets/images/${this.textContent}.png`;
                    aiMove.src = `./assets/images/${aiChoice}.png`;
                }, 20);
            });
        });
    };

    // Updating the score  
    const updateScore = () => {
        const uScore = document.querySelector(".user-score p");
        const cScore = document.querySelector(".ai-score p");
        uScore.textContent = userScore;
        cScore.textContent = aiScore;
    };

    /**
     * function for checking what move the player has chosen
     * checking what move the AI choice and declaring the winner or a tie
     * awarding the winner with 1 point on the scoreboard
     * @param {string} userMove, You Win
     * @param {string} aiChoice, You Lose
     * @param {string} iaChoice and userMove is same, Tie
     * @returns Winner or Tie and 1 point awarded on scoreboard
     */

    const compareMove = (userMove, aiChoice) => {
        // checking for tie
        const winner = document.querySelector(".winner");
        if (userMove === aiChoice) {
            winner.textContent = "Tie";
            return;
        }

        //checking for rock

        if (userMove === "rock") {
            if (aiChoice === "scissors" || aiChoice === "lizzard") {
                winner.textContent = "You Win";
                userScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You Lose";
                aiScore++;
                updateScore();
                return;
            }
        }
        //checking for paper

        if (userMove === "paper") {
            if (aiChoice === "rock" || aiChoice === "spock") {
                winner.textContent = "You Win.";
                userScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You Lose";
                aiScore++;
                updateScore();
                return;
            }
        }

        //checking for scissors

        if (userMove === "scissors") {
            if (aiChoice === "lizzard" || aiChoice === "paper") {
                winner.textContent = "You Win.";
                userScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You Lose";
                aiScore++;
                updateScore();
                return;
            }
        }

        //checking for spock

        if (userMove === "spock") {
            if (aiChoice === "scissors" || aiChoice === "rock") {
                winner.textContent = "You Win.";
                userScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You Lose";
                aiScore++;
                updateScore();
                return;
            }
        }

        //checking for lizzard

        if (userMove === "lizzard") {
            if (aiChoice === "spock" || aiChoice === "paper") {
                winner.textContent = "You Win.";
                userScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "You Lose";
                aiScore++;
                updateScore();
                return;
            }
        }
    };

    // call inner functions
    startGame();
    playMatch();
};

// start game function

game();