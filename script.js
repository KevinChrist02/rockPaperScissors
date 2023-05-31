function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
function ComputerPick() {
    if (getComputerChoice() == 0) {
        return ("rock");
    } else if (getComputerChoice() == 1) {
        return ("paper");
    } else {
        return ("scissor");
    }
}