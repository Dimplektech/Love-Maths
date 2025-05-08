// Wait for the DOM to finish loading beforeb running the game.
// Get the button elelnts and add event listener to them

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");
    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            }else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
    
    });
    }
    runGame("addition");
});

/**
 * The main game "loop ", called when the script is first loaded 
 * and after the user's answer has been processed.
 * This function will start a new game and call the appropriate function to display the question.   
 */
function runGame(gameType){
    //  Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
    // Check the game type and call the approriate function to display the question.
    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw (`Unknown game type: ${gameType}. Aborting!`);// This will cause an error in the console and stop the game.
    }


    if(gameType === "subtract"){
        displaySubtractQuestion(num1, num2);
    } 
     if(gameType === "multiply"){
        displayMultiplyQuestion(num1,num2);
    } 
    if(gameType === "division"){
        displayDivisionQuestion(num1,num2A)
    }

}

/**
 * Checks the answer against the first element in the reuturned 
 * calculateCorrectAnswer array.
  */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect =userAnswer === calculatedAnswer[0];// This will check if the answer is correct or not.
    if (isCorrect){
        alert("Hey ! You got it right!");
    } else {
        alert(`Awwww....so sad! You answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]} `)
    }
    runGame(calculatedAnswer[1]);// This will call the  next operatoration to be used in the next game.
}

/* Get the operands (the numbers) and the operator (the sign) from the DOM. and returns the correct answer.*/

function calculateCorrectAnswer(){

        let operand1 = parseInt(document.getElementById("operand1").textContent);
        let operand2 = parseInt(document.getElementById("operand2").textContent);
        let operator = document.getElementById("operator").textContent;
        if(operator === "+"){
            return [operand1 + operand2,"addition"];// This will return the correct answer and the next operator till the next operator is chosen.
        } else {
            alert(`Unimplemented operator ${operator}`);
            throw `Unimplemeneted operator ${operator}.Aborting!`;// This will cause an error in the console and stop the game.;
        }
    }
    


function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";


}

function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}
function displayDivisionQuestion(){

}
