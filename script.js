const start = document.querySelector(".start button")
const instruction = document.querySelector(".instruction")
const quit = instruction.querySelector(".buttons .quit")
const ready = document.querySelector(".buttons .ready")
const MainBox = document.querySelector(".MainBox")

start.onclick = ()=>{
    instruction.classList.add("activeInfo");
}

quit.onclick = ()=>{
    instruction.classList.remove("activeInfo");
    // MainBox.classList.remove("activeMainBox");
}

ready.onclick = ()=>{
    instruction.classList.remove("activeInfo");
    MainBox.classList.add("activeMainBox");
    showquestions()
}


function showquestions(){
    const questions = document.querySelector(".questions")
    let ques = '<em>'+ Questions[0].quest +'</em>';
    questions.innerHTML = ques
}