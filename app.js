 const quizData = [
{
    questions: 'What is 2x5? ',
    a: '8',
    b: '7',
    c: '10',
    d: '5',

    correct: 'c'
},
{
    questions: 'What is 8x8? ',
    a: '64',
    b: '72',
    c: '88',
    d: '16',

    correct: 'a'

},
{
    questions: 'What is 25/5? ',
    a: '23',
    b: '20',
    c: '25',
    d: '21',

    correct: 'c'
},
{
    questions: "What is 77-11? " ,
    a: '33',
    b: '44',
    c: '56',
    d: '66',

    correct: 'd'
},
{
    questions: "What is 116+125 ? ",
    a: '321',
    b: '231',
    c: '241',
    d: '221',

    correct: 'c'
},
{
    questions: "What 565-66 ? ",
    a: '499',
    b: '399',
    c: '501',
    d: '502',

    correct: 'a'
},
{
    questions: "What 78+98 ? ",
    a: '173',
    b: '145',
    c: '198',
    d: '176',

    correct: 'd'
},


];

    const answerEls = document.querySelectorAll('.answer');
    const questionEl = document.getElementById('question');
    const quiz = document.getElementById('quiz');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBnt = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;



loadQuiz();

function loadQuiz(){

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.questions;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected(){
    
        let answer = undefined;

        answerEls.forEach((answerEl) => {
    if(answerEl.checked){
        answer =  answerEl.id;

}
    });
        return answer;
    
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
            });
}

submitBnt.addEventListener('click' , () => {
    
    const answer = getSelected();
    
    if(answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {

            
        quiz.innerHTML = `<h2>You answered corrrectly at ${score} / ${quizData.length} question</h2>
        <button onClick = "location.reload()">Reloaod</button> `;
      
    }
    }

    
});