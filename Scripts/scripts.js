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

//Results will hold the div where I can display the resutls of 
//each round 
const results = document.querySelector(".results-container"); 

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
        results.textContent = "Player Wins"
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

