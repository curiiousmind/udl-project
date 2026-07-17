/*==========================================================
  UNIVERSAL DESIGN FOR LEARNING (UDL)
  Interactive Quiz Website
  script.js
  PART 1
==========================================================*/
/*==========================================================
DOM ELEMENTS
==========================================================*/
const welcomeScreen = document.getElementById("welcomeScreen");
const informationScreen = document.getElementById("informationScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("startButton");
const beginQuizBtn = document.getElementById("beginQuizBtn");
const questionBox = document.getElementById("questionBox");
const answerButtons = document.getElementById("answerButtons");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const questionCounter = document.getElementById("questionCounter");
const liveScore = document.getElementById("liveScore");
const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");
if (homeBtn) {
    homeBtn.addEventListener("click", function () {
        location.reload();
    });
}
const finalScore = document.getElementById("finalScore");
const correctAnswers = document.getElementById("correctAnswers");
const wrongAnswers = document.getElementById("wrongAnswers");
const accuracy = document.getElementById("accuracy");
const performanceBadge = document.getElementById("performanceBadge");
/*==========================================================
ACCESSIBILITY
==========================================================*/
const accessibilityToggle = document.getElementById("accessibilityToggle");
const accessibilityMenu = document.getElementById("accessibilityMenu");
const darkModeBtn = document.getElementById("darkModeBtn");
const contrastBtn = document.getElementById("contrastBtn");
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");
const readableFontBtn = document.getElementById("readableFontBtn");
/*==========================================================
QUIZ VARIABLES
==========================================================*/
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let answered = [];
let explanationBox = document.createElement("div");
explanationBox.id = "explanationBox";
explanationBox.style.display = "none";
explanationBox.style.marginTop = "20px";
explanationBox.style.padding = "20px";
explanationBox.style.borderRadius = "12px";
explanationBox.style.background = "#EEF3FF";
explanationBox.style.lineHeight = "1.8";
explanationBox.style.fontSize = "16px";
const quizCard = document.querySelector(".quiz-card");
if (quizCard) {
    quizCard.appendChild(explanationBox);
} else {
    document.body.appendChild(explanationBox);
}
/*==========================================================
ACCESSIBILITY MENU
==========================================================*/
accessibilityToggle.addEventListener("click", function () {
accessibilityMenu.classList.toggle("hidden");
});
/*==========================================================
DARK MODE
==========================================================*/
darkModeBtn.addEventListener("click", function () {
document.body.classList.toggle("dark-mode");
});
/*==========================================================
HIGH CONTRAST
==========================================================*/
contrastBtn.addEventListener("click", function () {
document.body.classList.toggle("high-contrast");
});
/*==========================================================
READABLE FONT
==========================================================*/
readableFontBtn.addEventListener("click", function () {
   document.body.classList.toggle("readable-font");
});
/*==========================================================
FONT SIZE
==========================================================*/
increaseFont.addEventListener("click", function () {
 document.body.classList.remove("small-text");
document.body.classList.add("large-text");
});
decreaseFont.addEventListener("click", function () {
document.body.classList.remove("large-text");
document.body.classList.add("small-text");
});
/*==========================================================
SCREEN NAVIGATION
==========================================================*/
/*==========================================================
START BUTTON
==========================================================*/

if (startButton) {
    startButton.addEventListener("click", function () {

welcomeScreen.classList.add("fade-out");

setTimeout(() => {
    welcomeScreen.classList.add("hidden");
    informationScreen.classList.remove("hidden");
    beginQuizBtn.classList.remove("hidden");
}, 400);

 // Show the hidden section
        informationScreen.classList.remove("hidden");

document.getElementById("beginQuizBtn").classList.remove("hidden");

        // Smooth scroll to it
        informationScreen.scrollIntoView({
            behavior: "smooth"
        });

    });
}

if (beginQuizBtn) {
    beginQuizBtn.addEventListener("click", function () {

if (document.getElementById("informationScreen").classList.contains("hidden")) {
    alert("Please click 'Start Quiz' first to proceed!");
    return;
}
        
       
 informationScreen.classList.add("hidden");
        quizScreen.classList.remove("hidden");
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        answered = [];
        if (liveScore) {
            liveScore.textContent = "Score: 0";
        }
        loadQuestion();
    });
}
/*==========================================================
RESULT BUTTONS
==========================================================*/


/*==========================================================
KEYBOARD ACCESSIBILITY
==========================================================*/
document.addEventListener("keydown", function (event) {

    if (

        event.key === "Enter" &&

        document.activeElement.tagName === "BUTTON"

    ) {

        document.activeElement.click();

    }

});

/*==========================================================
QUESTION DATABASE
PART 2
==========================================================*/
const quizQuestions = [
{
question:"What is meant by 'screen time'?",
options:[
"Time spent sleeping",
"Time spent using digital devices with screens",
"Time spent reading printed books",
"Time spent doing outdoor activities"
],
answer:1,
explanation:"Screen time refers to the amount of time a person spends using devices such as smartphones, tablets, computers, televisions and gaming consoles. It includes both educational and recreational use."
},
{
question:"Which of the following is an example of productive screen time?",
options:[
"Watching random entertainment videos",
"Playing online games for several hours",
"Attending an online class",
"Scrolling through social media without a purpose"
],
answer:2,
explanation:"Productive screen time involves activities that support learning, work or skill development such as attending online classes, researching information or completing assignments."
},
{
question:"Which of the following is an example of recreational screen time?",
options:[
"Completing an online assignment",
"Watching a movie for entertainment",
"Attending a virtual classroom session",
"Learning a new language through an educational app"
],
answer:1,
explanation:"Recreational screen time is mainly for relaxation or entertainment such as watching movies, gaming or browsing social media."
},
{
question:"A student regularly uploads photos and comments on social media without reviewing their privacy settings. What is the most likely long-term result of this behavior?",
options:[
"The posts disappear automatically after a few days.",
"The student's online activities contribute to their digital footprint.",
"The internet becomes faster.",
"The account becomes permanently private."
],
answer:1,
explanation:"Every post, comment, photo or online interaction contributes to a person's digital footprint."
},
{
question:"Which of the following is a benefit of responsible screen time?",
options:[
"It always causes stress.",
"It supports learning and communication.",
"It replaces the need for physical exercise.",
"It completely eliminates face-to-face interaction."
],
answer:1,
explanation:"Responsible screen use supports learning, communication and collaboration."
},
{
question:"Why is using digital devices before bedtime not recommended?",
options:[
"It helps people fall asleep faster.",
"The blue light from screens can delay sleep.",
"It improves memory during sleep.",
"It has no effect on the body."
],
answer:1,
explanation:"Blue light reduces melatonin production making it harder to sleep."
},
{
question:"Which habit can help reduce digital eye strain?",
options:[
"Looking at the screen continuously for long periods",
"Following the 20-20-20 rule",
"Increasing screen brightness to the highest level",
"Holding the device very close to your eyes"
],
answer:1,
explanation:"The 20-20-20 rule helps relax eye muscles."
},
{
question:"Which of the following is a common sign of excessive screen time?",
options:[
"Improved posture",
"Eye strain and headaches",
"Increased physical activity",
"Better concentration throughout the day"
],
answer:1,
explanation:"Long periods of screen use may lead to eye strain and headaches."
},
{
question:"Aarav spends two hours attending online classes and one hour watching cartoons. Which statement best describes his screen use?",
options:[
"All his screen time is recreational.",
"All his screen time is productive.",
"He has both productive and recreational screen time.",
"He has no screen time."
],
answer:2,
explanation:"Online classes are productive while cartoons are recreational."
},
{
question:"Riya notices that she checks her phone every few minutes while studying. What is the best strategy to improve her concentration?",
options:[
"Continue checking notifications regularly.",
"Put the phone on silent or keep it away while studying.",
"Open more apps during study time.",
"Watch videos while completing homework."
],
answer:1,
explanation:"Reducing phone distractions improves concentration."
},
{
question:"After reviewing her weekly screen-time report, Aisha notices that most of her screen time is spent on social media instead of studying. What is the most effective first step she should take?",
options:[
"Ignore the report because it is only an estimate.",
"Set realistic daily screen-time goals and reduce unnecessary social media use.",
"Stop using all digital devices immediately.",
"Spend more time online to become familiar with technology."
],
answer:1,
explanation:"Setting realistic goals is the best first step toward healthier digital habits."
},
{
question:"Which of the following is the best way to reduce digital distractions while studying?",
options:[
"Keep all notifications turned on",
"Use 'Do Not Disturb' mode or silence unnecessary notifications",
"Switch between different social media apps",
"Watch videos while completing homework"
],
answer:1,
explanation:"Turning off unnecessary notifications helps maintain focus."
},
{
question:"While using a computer, Rohit sits with his neck bent forward and his back unsupported for long periods. What health problem could this habit cause?",
options:[
"Better posture",
"Neck and back pain",
"Improved flexibility",
"Stronger muscles"
],
answer:1,
explanation:"Poor posture can lead to neck pain, back pain and muscle strain."
},
{
question:"Ananya spends most of her weekend using her tablet indoors instead of playing outside. What is the most likely result?",
options:[
"Increased physical fitness",
"A less active lifestyle",
"Better posture",
"Improved eyesight"
],
answer:1,
explanation:"Too much screen use without physical activity reduces overall fitness."
},
{
question:"Kabir spends seven hours every day playing online games and often skips his homework. What is the biggest concern?",
options:[
"Better academic performance",
"Excessive recreational screen time affecting responsibilities",
"Improved concentration",
"Better time management"
],
answer:1,
explanation:"Recreational screen time should never interfere with responsibilities."
},
{
question:"Before studying, Vivek turns off notifications and keeps his phone in another room. Why is this a good habit?",
options:[
"It reduces distractions and improves concentration.",
"It increases screen time.",
"It slows down the internet.",
"It makes studying more difficult."
],
answer:0,
explanation:"Keeping the phone away minimizes interruptions and improves focus."
},
{
question:"Simran takes a short break after every 30–40 minutes of screen use. Which healthy habit is she practicing?",
options:[
"Poor time management",
"Balanced screen use",
"Excessive screen use",
"Digital addiction"
],
answer:1,
explanation:"Regular breaks reduce eye strain and improve concentration."
},
{
question:"Aditya attends online classes, exercises regularly, reads books and spends a limited amount of time playing games. What does his daily routine show?",
options:[
"He has a balanced daily routine.",
"He spends too much time gaming.",
"He has no productive screen time.",
"He should avoid using screens completely."
],
answer:0,
explanation:"A healthy routine balances study, exercise, rest and recreation."
},
{
question:"During dinner, everyone in Rohan's family keeps their phones away and talks to each other. What is one benefit of this habit?",
options:[
"It encourages better communication and healthier screen habits.",
"It increases screen time.",
"It reduces family interaction.",
"It improves internet speed."
],
answer:0,
explanation:"Keeping devices away during meals encourages meaningful conversations."
},
{
question:"A college student wants to improve digital wellness while keeping up with online classes. Which daily routine would be the most balanced?",
options:[
"Study online for several hours without taking breaks.",
"Attend online classes, take regular screen breaks, exercise and limit recreational screen time.",
"Stay awake late using digital devices and sleep less.",
"Spend all free time on social media after classes."
],
answer:1,
explanation:"Digital wellness is achieved by balancing study, exercise, healthy sleep and limited recreational screen time."
}
];
/*==========================================================
PART 3 STARTS FROM HERE
==========================================================*/
function loadQuestion() {

explanationBox.style.display = "none";
explanationBox.innerHTML = "";
nextBtn.disabled = true;
const current = quizQuestions[currentQuestion];
questionCounter.textContent =
"Question " + (currentQuestion + 1) + " of " + quizQuestions.length;
progressBar.style.width =
 ((currentQuestion + 1) / quizQuestions.length) * 100 + "%";
questionBox.innerHTML =
 "<h3>" + current.question + "</h3>";
answerButtons.innerHTML = "";
for (let i = 0; i < current.options.length; i++) {
const button = document.createElement("button");
button.className = "answer-btn";
button.innerHTML = current.options[i];
button.dataset.index = i;
button.setAttribute("aria-label", current.options[i]);
button.addEventListener("click", function () {
if (answered[currentQuestion]) {
return;
}
checkAnswer(i);
});
answerButtons.appendChild(button);
}
previousBtn.disabled = (currentQuestion === 0);

if (currentQuestion === quizQuestions.length - 1) {

    nextBtn.textContent = "Finish Quiz";

} else {

    nextBtn.textContent = "Next →";

}

/* Restore previous answer if this question was already answered */

restorePreviousAnswer();
}


/*==========================================================
CHECK ANSWER
==========================================================*/
function checkAnswer(selectedIndex) {



    if (answered[currentQuestion]) return;

    answered[currentQuestion] = true;
    userAnswers[currentQuestion] = selectedIndex;

    const current = quizQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;

        if (i === current.answer) {
            buttons[i].classList.add("correct");
        }
    }

    if (selectedIndex == current.answer) {
        score++;
       

        if (liveScore) {
            liveScore.textContent = "Score: " + score;
        }

        buttons[selectedIndex].classList.add("correct");

        explanationBox.innerHTML =
            "<h3 style='color:green;'>✔ Correct</h3>" +
            "<p>" + current.explanation + "</p>";
    } else {
        buttons[selectedIndex].classList.add("incorrect");

        explanationBox.innerHTML =
            "<h3 style='color:red;'>✖ Incorrect</h3>" +
            "<p><strong>Correct Answer:</strong> " +
            current.options[current.answer] +
            "</p><br>" +
            "<p>" + current.explanation + "</p>";
    }

    explanationBox.style.display = "block";
    nextBtn.disabled = false;
}

/*==========================================================
RESTORE PREVIOUS ANSWER
==========================================================*/
function restorePreviousAnswer() {
if (!answered[currentQuestion]) {
return;
}
const current = quizQuestions[currentQuestion];
const buttons =
document.querySelectorAll(".answer-btn");
for (let i = 0; i < buttons.length; i++) {
buttons[i].disabled = true;
if (i === current.answer) {
buttons[i].classList.add("correct");
}
if (
i === userAnswers[currentQuestion] &&
i !== current.answer
) {
buttons[i].classList.add("incorrect");
}
}
if (userAnswers[currentQuestion] === current.answer) {
explanationBox.innerHTML =
"<h3 style='color:green;'>✔ Correct</h3>" +
"<p>" + current.explanation + "</p>";
} else {
explanationBox.innerHTML =
"<h3 style='color:red;'>✖ Incorrect</h3>" +
"<p><strong>Correct Answer:</strong> " +
current.options[current.answer] +
"</p><br>" +
"<p>" + current.explanation + "</p>";
}
explanationBox.style.display = "block";
nextBtn.disabled = false;
}
/*==========================================================
PART 3B
QUIZ NAVIGATION
==========================================================*/
nextBtn.addEventListener("click", function () {
if (!answered[currentQuestion]) {
alert("Please answer the question before continuing.");
return;
}
if (currentQuestion < quizQuestions.length - 1) {
currentQuestion++;
loadQuestion();
} else {
showResults();

}
});
previousBtn.addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

});

/*==========================================================
SHOW RESULTS
==========================================================*/
function showResults() {
quizScreen.classList.add("hidden");
resultScreen.classList.remove("hidden");
var total = quizQuestions.length;
var wrong = total - score;
var percent = Math.round((score / total) * 100);
finalScore.textContent = percent + "%";
correctAnswers.textContent = score;
wrongAnswers.textContent = wrong;
accuracy.textContent = percent + "%";
if (percent >= 90) {
performanceBadge.textContent = "Excellent";
}
else if (percent >= 75) {
performanceBadge.textContent = "Very Good";
}
else if (percent >= 60) {
performanceBadge.textContent = "Good";
}
else if (percent >= 40) {
performanceBadge.textContent = "Needs Improvement";
}
else {
performanceBadge.textContent = "Keep Practicing";
}
}
/*==========================================================
KEYBOARD NAVIGATION
==========================================================*/
document.addEventListener("keydown", function (event) {
if (quizScreen.classList.contains("hidden")) {
return;
}
if (event.key === "ArrowRight") {
if (!nextBtn.disabled) {
nextBtn.click();
}
}
if (event.key === "ArrowLeft") {
if (!previousBtn.disabled) {
previousBtn.click();
}
}
});
/*==========================================================
WINDOW CLICK
CLOSE ACCESSIBILITY MENU
==========================================================*/
window.addEventListener("click", function (event) {
if (!accessibilityToggle.contains(event.target) &&
!accessibilityMenu.contains(event.target)) {
accessibilityMenu.classList.add("hidden");
}
});
/*==========================================================
QUIZ INITIALIZATION
==========================================================*/
welcomeScreen.classList.remove("hidden");
informationScreen.classList.add("hidden");
quizScreen.classList.add("hidden");
resultScreen.classList.add("hidden");
previousBtn.disabled = true;
nextBtn.disabled = true;
/*==========================================================
PART 4
FINAL BUG FIXES
==========================================================*/
function resetQuiz() {

welcomeScreen.classList.remove("fade-out");

    currentQuestion = 0;

    score = 0;

    userAnswers = [];

    answered = [];

    if (liveScore) {

        liveScore.textContent = "Score: 0";

    }

    finalScore.textContent = "0%";

    correctAnswers.textContent = "0";

    wrongAnswers.textContent = "0";

    accuracy.textContent = "0%";

    performanceBadge.textContent = "";

    explanationBox.innerHTML = "";

    explanationBox.style.display = "none";

    welcomeScreen.classList.remove("hidden");

    informationScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

}



restartBtn.addEventListener("click", function () {
  resetQuiz();
});

window.onload = function () {

    welcomeScreen.classList.remove("hidden");

    informationScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    explanationBox.style.display = "none";

};




   