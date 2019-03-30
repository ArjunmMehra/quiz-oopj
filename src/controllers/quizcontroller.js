function Quiz(questions){
    this.questions=questions;
    this.questionId=0;
    this.answers = [];
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionId];
}

Quiz.prototype.isEnded = function () {
    return this.questions.length=== this.questionId; 
}

Quiz.prototype.saveAnswer= function (answer){
    this.answers[this.questionId]= answer
}

function onSelected(id){
    var element = document.getElementById(id)
    element.checked=true
    quiz.saveAnswer(id)
    var nextButton= document.getElementById('nextbtn')
    nextButton.disabled= false
}