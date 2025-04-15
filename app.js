let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ['rock','papper','scrssors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userwin) => {
    if(userwin){
        userScore++
        userScorePara.innerText = userScore
        console.log("You win!")
        msg.innerText = 'You win!'
        msg.style.backgroundColor = 'green';
    }
    else{
       compScore++
       compScorePara.innerText = compScore
       console.log("You lose!")
        msg.innerText = 'You lose!'
        msg.style.backgroundColor = 'red';
    }

}

const playGame = (userChoice) => {
    console.log("User choice :", userChoice);
// Generate computer choice 
    const compChoice = genCompChoice();
    console.log("Comp choice :", compChoice);
    

    if (userChoice === compChoice){
        console.log("Game is Draw!")
        msg.innerText = "Game is Draw! Play again"
        msg.style.backgroundColor = 'blue';
    } 
    else {
        let userwin = true;
        if(userChoice === 'rock') {
            userwin = compChoice === 'paper' ? false : true;
        } 
        else if(userChoice === 'paper'){
            userwin = compChoice === 'scissor' ? false : true;
        }
        else (userChoice === 'scissor')
            userwin = compChoice === 'rock' ? false : true;
        
        showWinner(userwin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})