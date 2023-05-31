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