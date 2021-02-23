//The CPU's pick
let cpu_selection;

//The Player's pick
let player_selection; 

//Scores for both the player and CPU
let player_score = 0; 
let cpu_score = 0; 

//Array with the options in it
const picks = ["rock", "paper", "scissors"]; 

//Letting button be all the parts of the document that have the
//class button
let buttons = document.querySelectorAll(".button"); 

//This makes it so I can just call body and have it reffer to
//the body of the html file
const body = document.querySelector("body"); 

//Results and picks will hold the divs where I can display the resutls of 
//each round 
const results = document.querySelector(".results-container"); 
const man_choice = document.querySelector("#manChoice"); 
const machine_choice = document.querySelector("#machineChoice");

//Function that randomly selects the cpu pick 
function cpu_Pick(){
    return picks[Math.floor(Math.random() * picks.length)]; 
}

//Listens for mouseclicks on elements with the class
//button and reports which one was clicked by getting 
//the alt assigned to that image and then feeds to the 
//play round function
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        player_selection = img.alt;
        cpu_selection = cpu_Pick(); 
        playRound(cpu_selection, player_selection); 
    });
}); 

//This function plays the round by finding who won and 
//calls the functions to display the results
function playRound(cpu, player){ 
    if(player == 'paper' && cpu == 'rock'){
        player_Scores(); 
        man_choice.textContent = "Man Picks Paper"; 
        machine_choice.textContent = "Machine Picks Rock"; 
        results.textContent = "Man Wins!"; 
    }
    else if(player == 'paper' && cpu == 'scissors'){
        cpu_Scores();
        man_choice.textContent = "Man Picks Paper"; 
        machine_choice.textContent = "Machine Picks Scissors"; 
        results.textContent = "Machine Wins!"; 
    }
    else if(player == 'paper' && cpu == 'paper'){
        man_choice.textContent = "Man Picks Paper"; 
        machine_choice.textContent = "Machine Picks Paper";
        results.textContent = "Tie!";  
    }
    else if(player == 'rock' && cpu == 'rock'){
        man_choice.textContent = "Man Picks Rock"; 
        machine_choice.textContent = "Machine Picks Rock";
        results.textContent = "Tie!"; 
    }
    else if(player == 'rock' && cpu == 'scissors'){
        man_choice.textContent = "Man Picks Rock"; 
        machine_choice.textContent = "Machine Picks Scissors";
        player_Scores(); 
        results.textContent = "Man Wins!"; 
    }
    else if(player == 'rock' && cpu == 'paper'){
        man_choice.textContent = "Man Picks Paper"; 
        machine_choice.textContent = "Machine Picks Paper";
        cpu_Scores(); 
        results.textContent = "Machine Wins!"; 
    }
    else if(player == 'scissors' && cpu == 'rock'){
        man_choice.textContent = "Man Picks Scissors"; 
        machine_choice.textContent = "Machine Picks Rock";
        cpu_Scores(); 
        results.textContent = "Machine Wins!"; 
    }
    else if(player == 'scissors' && cpu == 'scissors'){
        man_choice.textContent = "Man Picks Scissors"; 
        machine_choice.textContent = "Machine Picks Scissors";
        results.textContent = "Tie!"; 
    }
    else if(player == 'scissors' && cpu == 'paper'){
        man_choice.textContent = "Man Picks Scissors"; 
        machine_choice.textContent = "Machine Picks Paper";
        player_Scores(); 
        results.textContent = "Man Wins!"; 
    }

}

//When the cpu scores this updates the cpus score
function cpu_Scores(){
    let cpu_Score_Box = document.querySelector("#machineScore"); 
    cpu_score++; 
    cpu_Score_Box.textContent = cpu_score; 
}

//When the player scores this updates the players score
function player_Scores(){
    let player_Score_Box = document.querySelector("#manScore"); 
    player_score++; 
    player_Score_Box.textContent = player_score;  
}

