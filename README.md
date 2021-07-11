# Rock paper scissors lizard Spock game


[Link to Live Website](https://ejkington.github.io/lizard-spock-ms2/)

[GitHub Repo](https://github.com/ejkington/lizard-spock-ms2)

The game
-------
It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in "The Lizard-Spock Expansion".
It is mentioned again in "The Euclid Alternative" and "The Rothman Disintegration", where Sheldon explains the rules to Penny and Barry Kripke.

The game was originally created by Sam Kass with Karen Bryla. According to an interview with Kass, the series producers did not originally ask for permission to use the game, but Kass was officially referenced by Sheldon as the creator of the game during the "The Rothman Disintegration", after which he states, "Hail Sam Kass!" to which Leonard, Howard, Raj, and Sheldon all then chant "Hail!" while raising their hands.

Rules
-------
<div style="text-align: center;">
<h3>How To Play The Game: </h3>
<div style="display: inline-block; text-align: left;">
(1.) Scissors cuts Paper (✌ > ✋)<br>
(2.) Paper covers Rock (✋ > ✊)<br>
(3.) Rock crushes Lizard (✊ > 🦎)<br>
(4.) Lizard poisons Spock (🦎 > 🖖)<br>
(5.) Spock smashes Scissors (🖖 > ✌)<br>
(6.) Scissors decapitates Lizard (✌ > 🦎)<br>
(7.) Lizard eats Paper (🦎 > ✋)<br>
(8.) Paper disproves Spock (✋ > 🖖)<br>
(9.) Spock vaproizes Rock (🖖 > ✊)<br>
(10.) Rock crushes Scissors (✊ > ✌)
</div>


 ![Responsive Mockup](Mockup.jpg)
 
 ## Features 

A simple game of rock paper scissors lizzard spock.
  * Showing images of the button pressed.
  * Randomizes computers choice.
  * Display text if user wins or lose.
  * Score board.

  ### Existing Features

 ## Start Screen and Heading

  - Scoreboard at the top of the screen.
  - Header text presenting what game is to be played.
  - Start button

 ## The Game Area

  - This section will allow the user to play the RPSLS game. The user will be able to easily see start button fading in to the game section ,  
  - Pressing the start button will fade in the game area and present the user with the choices presented with green buttons. 
  - An image of rock will be presented as default and will change accordingly to what button the user presses.
  - __The home screen__
   
  ![start](start.png)
  
  ## The score section

  - The score section is where the user will be able to see the score against the computer.
  
  ![score](Score.png)
 
 ## The game section
 
  - The match section is where the game happens. buttons for each choice and the images of what the user choose and what the computer has choosen
 
 ![match](match.png)
  
  ## Testing 
 Test | Test action | Expected outcome      | Test outcome
------- | ---------------- | ---------- | ---------:
Correct images show up | Clicking the diffrent buttons | images changes according too button pressed | PASS
Scoreboard works  |  pressing a button        | score awarded to computer or user       | PASS
start game button   | Clicking the start button from home screen | Home page fades out and match page fades in with a small delay    | PASS
 
 
 * Bug where the expected outcome of a press would give a point to the loser.
 * Bug where rock would beat everything.


 
  
  ### Validator Testing 
  
  - HTML
    - No errors were returned when passing through the official [W3C validator](htmlvalidator.png)
    
    - CSS
    - No errors were found when passing through the official [(Jigsaw) validator](Cssvalidator.png)
  
     - JavaScript
      - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 9 functions in this file.
      - Function with the largest signature take 2 arguments, while the median is 0.
      - Largest function has 54 statements in it, while the median is 4.
      - The most complex function has a cyclomatic complexity value of 17 while the median is 1.
  
  ### Unfixed Bugs

 -There is a bug where the game section will not resize according to the media queries on tablet size screens

  
  ## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://ejkington.github.io/lizard-spock-ms2/
  
  
  ## Credits 

  - Brian Machina my mentor for guidens in project planing.
  - Slack community for help when i got stuck.
  - Ed Dev, youtuber.

  
  ### Content 

- The images in the game section were taken from https://www.youtube.com/watch?v=T_ZvWkMgVFM&ab_channel=TeCoEd


