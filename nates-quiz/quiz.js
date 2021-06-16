const questionNumber = document.getElementById("questionNumber");
const trueBtn = document.getElementById("trueBtn");
const falseBtn = document.getElementById("falseBtn");
const question = document.getElementById("question");
const result = document.getElementById("result");
const removeTrueFalse = document.getElementById("removeTrueFalse");
const progress = document.querySelector('.progress-done');
const youAreA = document.getElementById("youAreA");

//  Here is the data used for the questions along with the type of person
const questionsData = [
    {
        "question": "You much prefer the solitude of the forest over the busy streets of the city.",
        "personIs": "Mage"
    },
    {
        "question": "You would rather follow the laws of the land and take pride in your ability to stay on a righteous path.",
        "personIs": "Knight"
    },
    {
        "question": "Your choice of weapon would be to use a wooden staff to throw enemies off balance while using mind tricks and magic to secure your victories.",
        "personIs": "Mage"
    },
    {
        "question": "You love the people, nothing good can be accomplished alone.",
        "personIs": "Knight"
    },
    {
        "question": "You bury yourself in books and study, not everything can be accomplished with brute force.",
        "personIs": "Mage"
    },
    {
        "question": "A horse? Nah, you want a DRAGON right?",
        "personIs": "Mage"
    },
    {
        "question": "Your garment of choice is a thick suit of metal Armor and chainmail to protect you.",
        "personIs": "Knight"
    },
    {
        "question": "Regardless of your clothing, nothing is cooler than a wizard hat, right?",
        "personIs": "Mage"
    },
    {
        "question": "You would rather work for yourself rather than the kingdom.",
        "personIs": "Mage"
    },
    {
        "question": "You will take on a follower called Nathan to work under your training.",
        "personIs": "awesome"
    }
]
let questionCounter = 0;
let mageCounter = 0;
let knightCounter = 0;
let awesome = false;

// This is for an implimented progress bar
progress.style.width = 0;
progress.style.opacity = 1;

// Onclick of the answer true, a counter++n helps keep track of what number question is rendered to the page and is also used for the progress bar
// If statements are present to reprisent different functionality such as the the appearence of the results button when all questions are answered
trueBtn.onclick = function () {
    questionCounter++;
    if (questionCounter === 10) {
        awesome = true;
    }
    if (questionCounter < 10) {
        changeQuestion();
        trueClicked();
    } else {
        trueClicked();
        removeTrueFalse.style.display = "none";
        results.style.display = "block";
        changePercent("end");
    }
}

falseBtn.onclick = function () {
    questionCounter++;
    if (questionCounter < 10) {
        changeQuestion();
        falseClicked();
        console.log(mageCounter, knightCounter);
    } else {
        falseClicked();
        removeTrueFalse.style.display = "none";
        results.style.display = "block";
        changePercent("end");
    }
}



// This changes the percentage of questions answered
const changePercent = (end) => {
    if (!end) {
        progress.style.width = `${questionCounter * 10}%`;
        progress.innerHTML = `${questionCounter * 10}%`;
    } else {
        progress.style.width = `${100}%`;
        progress.innerHTML = `${100}%`;
    }
}

// This changes the question that is displayed
const changeQuestion = () => {
    if (questionCounter < 10) {
        
        question.innerHTML = questionsData[questionCounter].question;
        console.log(questionsData[questionCounter - 1].question);
        questionNumber.innerHTML = `Question ${questionCounter + 1}`;
        changePercent();
    }
}

// Logic that increments the correct counter based on true and false along with the matching personIs
const trueClicked = () => {
    if (questionCounter < 10) {
        return (questionsData[questionCounter - 1].personIs === "Mage" ? mageCounter++ : knightCounter++);
    }
}

const falseClicked = () => {
    if (questionCounter < 10) {
        return (questionsData[questionCounter - 1].personIs === "Knight" ? mageCounter++ : knightCounter++);
    }
}

// Logic to determine the winning mage or knight based on their value
const whoWon = () => {
    return (mageCounter > knightCounter ? "Mage" : "Knight");
}

// Logic for an automated result page 
results.onclick = () => {
    const whatPercentAreYou = Math.round(whatPercent());
    results.style.display = "none";
    questionNumber.innerHTML = `You are ${whatPercentAreYou}% ${whoWon()}`;
    progress.style.width = `${whatPercentAreYou}%`;
    progress.innerHTML = `${whatPercentAreYou}%`;
    if (awesome) {
        question.innerHTML = `Together with your new recruit, your journey as a ${whoWon()} will become legend. You fought for years and finally managed to achieve the ultimate victory when everyone in England started calling it what it is, a teacake.`
    } else if (!awesome && whoWon() === "Mage") {
        question.innerHTML = `Sadly, in an effort to meddle in new magic you manage to fuse your Wizard hat to your head much like Danny DeVito in the 1996 classic 'Matilda'. In doing this you cant see and youre stuck deep in your forest home, if only you had an apprentice to help.`
    } else if (!awesome && whoWon() === "Knight") {
        question.innerHTML = `Sadly, after a battle over the correct way of saying teacake, your thick Armor had you stuck in the mud in a turtle like fasion, you should get your apprentice to help! ohh wait... if only you had an apprentice to help.`
    }
}

// What percentage the knight or mage won by
const whatPercent = () => {
    return (mageCounter > knightCounter ? mageCounter / 9 * 100 : knightCounter / 9 * 100);
}





