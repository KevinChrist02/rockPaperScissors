function getComputerChoice() {
    return Math.floor(Math.random() * 3); // chooses a number betwenn 0 and 2
}
/* CopmuterPick() takes the value of the function above and denpending on the 
 number prints out the allocating choice */
function ComputerPick() {
    if (getComputerChoice() == 0) {
        return ("rock");
    } else if (getComputerChoice() == 1) {
        return ("paper");
    } else {
        return ("scissor");
    }
}

let player = prompt("Enter a choice (rock, paper or scissor: ");

function getWinner(player, ComputerPick) {
    if (player == ComputerPick) {
        console.log("It's a draw!");
    } else if (player == "rock" && ComputerPick == "paper") {
        console.log("Paper covers Rock! You lose!");
    } else if (player == "rock" && ComputerPick == "scissor") {
        console.log("Rock smashes Scissors! You win!");
    } else if (player == "paper" && ComputerPick == "scissor") {
        console.log("Scissors cuts Paper! You lose!");
    } else if (player == "paper" && ComputerPick == "rock") {
        console.log("Paper covers Rock! You Win!");
    } else if (player == "scissor" && ComputerPick == "rock") {
        console.log("Rock shmashes Scissors! You Lose!");
    } else {
        console.log("Scissors cuts Paper! You Win!");
    }
}