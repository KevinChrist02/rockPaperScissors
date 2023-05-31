function getComputerNumber() {
    return Math.floor(Math.random() * 3); // chooses a number betwenn 0 and 2
}
// save the random picked number in a variable
let computerChoice = getComputerNumber();
/* CopmuterPick() takes the value of the function above and denpending on the 
 number prints out the allocating choice */
function getComputerPick() {
    if (computerChoice == 0) {
        return ("rock");
    } else if (computerChoice == 1) {
        return ("paper");
    } else if (computerChoice == 2) {
        return ("scissor");
    }
}

// User input
let player = prompt("Enter a choice (rock, paper or scissor: ");
console.log("You chose: ", player);

// save the computer pick in a variable
let computerPick = getComputerPick();
console.log("The Computer chose: ", computerPick);

function getWinner(player, computerPick) {
    if (player == computerPick) {
        console.log("It's a draw!");
    } else if (player == "rock" && computerPick == "paper") {
        console.log("Paper covers Rock! You lose!");
    } else if (player == "rock" && computerPick == "scissor") {
        console.log("Rock smashes Scissors! You win!");
    } else if (player == "paper" && computerPick == "scissor") {
        console.log("Scissors cuts Paper! You lose!");
    } else if (player == "paper" && computerPick == "rock") {
        console.log("Paper covers Rock! You Win!");
    } else if (player == "scissor" && computerPick == "rock") {
        console.log("Rock shmashes Scissors! You Lose!");
    } else {
        console.log("Scissors cuts Paper! You Win!");
    }
}
// call the getWinner function, to descide who won the game

getWinner(player, computerPick);