function populate(id){
    var nextButton= document.getElementById('nextbtn')
    if(quiz.questionId>0){
        var prevButton= document.getElementById('prevbtn')
        prevButton.disabled= false
    }
    if(quiz.isEnded()){
        endQuiz() 
    }
    else{
        nextButton.innerText="Next"
        var element= document.getElementById('question');
        element.innerHTML= quiz.getQuestionIndex().title;
        //show choices
        var choices=quiz.getQuestionIndex().choices;
        for(var i=0; i < choices.length; i++){
            var element= document.getElementById('choice'+i);
                element.value=choices[i];
                element.innerHTML=choices[i];
        }
    }
    showProgress()
} 
 
 
 var questions=[
    new Questions("Q-101","What is India\'s capital",['Delhi','Mumbai','Kolkatta','Pune']),
    new Questions("Q-102","Grand Central Terminal, Park Avenue, New York is the world's",['largest railway station','highest railway station','longest railway station','None of the above']),
    new Questions("Q-103",'Entomology is the science that studies',['Behavior of human beings','Insects','The origin and history of technical and scientific terms','The formation of rocks'])
 ]

function moveToNext(id){
    if(!quiz.isEnded()){
        quiz.questionId++
        renderSelection()
        populate(id)
    }
}

function moveToPrevios(){
    if(quiz.questionId<=0){
        var prevButton= document.getElementById('prevbtn')
        prevButton.disabled= true
        return
    }
    quiz.questionId--
    renderSelection()
    populate()
}

function renderSelection(){
    if(quiz.answers[quiz.questionId]){
        var selectedElement= document.getElementById(quiz.answers[quiz.questionId])
        selectedElement.checked= true
    }
    else{
        reset()
    }
}

function reset()
{
    var choices = document.getElementsByName("options");
    for(var i = 0; i < choices.length; i++)
    {   
        choices[i].checked=false
    }
    var nextButton= document.getElementById('nextbtn')
    nextButton.disabled=true
}

function endQuiz() {
    var end=confirm("Submit quiz?")
    if(end){
        var endQuiz = "<h1>Quiz Ended</h1>";
        var element = document.getElementById("quiz");
        element.innerHTML = endQuiz;
    }
    else{
        return
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionId + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};


 var quiz= new Quiz(questions)

 populate();

 