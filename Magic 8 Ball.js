const massege = document.querySelector(".massege");
const question = document.querySelector("input");
const button = document.querySelector("button");
const answerArray = ["It will work" , "maybe maybe not" , "prably not" , "i dont know"];
button.addEventListener("click" , function(){
    let res = Math.floor(Math.random()*answerArray.length);
    massege.innerText = question.value + " " + answerArray[res];
    question.value = "";

});