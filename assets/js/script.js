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
    document.addEventListener("keydown",function(event){
        if(event.key === "Enter"){
            checkAnswer();
        }
    })

    runGame("addition");
});

/**
 * The main game "loop ", called when the script is first loaded 
 * and after the user's answer has been processed.
 * This function will start a new game and call the appropriate function to display the question.   
 */
function runGame(gameType){
    document.getElementById("answer-box").value=""; // This will clear the answer box when the game starts.
    document.getElementById("answer-box").focus();// This will make sure that the answer box is focused when the game starts.
    //  Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
    // Check the game type and call the approriate function to display the question.
    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else if(gameType === "multiply"){
        displayMultiplyQuestion(num1, num2);
    } else if(gameType === "subtract"){
        if(num1 < num2){
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }
        // This will make sure that the first number is always greater than the second number.


        displaySubtractQuestion(num1, num2);
    } else if(gameType === "division"){
        // creating first number 3 digit for division and second number 2 digit for division.
        let num1 = Math.floor(Math.random()*500)+1;
        let num2 = Math.floor(Math.random()*25)+1;
        if(num1 < num2){
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }
        // This will make sure that the first number is always greater than the second number
        displayDivisionQuestion(num1, num2);
    } else{    

        alert(`Unknown game type: ${gameType}`);
        throw (`Unknown game type: ${gameType}. Aborting!`);// This will cause an error in the console and stop the game.
    }
}


/**
 * Checks the answer against the first element in the reuturned 
 * calculateCorrectAnswer array.
  */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect =Math.trunc(userAnswer) === calculatedAnswer[0];// This will check if the answer is correct or not.
    if (isCorrect){
        alert("Hey ! You got it right!");
        incrementScore();
    } else {
        alert(`Awwww....so sad! You answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]} `)
        incrementWrongAnswer();
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
        } else if(operator === "x"){
            return [operand1 * operand2,"multiply"];

        } else if(operator === "-"){
            return [operand1 - operand2,"subtract"];
        } else if(operator === "/"){
            return [Math.trunc(operand1 / operand2),"division"];
        }  else {
            alert(`Unimplemented operator ${operator}`);
            throw `Unimplemeneted operator ${operator}.Aborting!`;// This will cause an error in the console and stop the game.;
        }
        
    }  
    
    

/**
 * Get the score from the DOM and increment by 1.
 * also update the DOM with the new score.
 * This function will be called when the user gets the correct answer.
 */
function incrementScore(){
    let oldScore=parseInt(document.getElementById("score").textContent);
    document.getElementById("score").textContent = ++oldScore;// This will increment the score by 1.
}

/** Gets the current tally of incorrect answers from the DOM  and increments it by 1*/
function incrementWrongAnswer(){
    let oldScore=parseInt(document.getElementById("incorrect").textContent);
    document.getElementById("incorrect").textContent = ++oldScore;// This will increment the score by 1.

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";


}

function displaySubtractQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";

}
function displayDivisionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/"; 

}
