let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let scoreuser = document.querySelector("#user");
let scorecom = document.querySelector("#com");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        let randchoice = Math.floor(Math.random()*3);
        
        let msg = document.getElementById("msg");
        let rps = ["rock","paper","scissors"];
        let comchoice = rps[randchoice];
        if(userchoice==comchoice){
            msg.innerText="Its a draw!";
            msg.style.backgroundColor="Blue";
        }else if(userchoice=="rock" && comchoice=="paper"){
            msg.innerText="you lose!";
            msg.style.backgroundColor="red";
            compscore++
            scorecom.innerText=compscore;
        }else if(userchoice=="rock" && comchoice=="scissors"){
            msg.innerText="you win!";
            msg.style.backgroundColor="green";
            userscore++
            scoreuser.innerText=userscore;
        }else if(userchoice=="paper" && comchoice=="rock"){
            msg.innerText="you win!";
            msg.style.backgroundColor="green";
            userscore++
            scoreuser.innerText=userscore;
        }else if(userchoice=="paper" && comchoice=="scissors"){
            msg.innerText="you lose!";
            msg.style.backgroundColor="red";
            compscore++
            scorecom.innerText=compscore;
        }else if(userchoice=="scissors" && comchoice=="rock"){
            msg.innerText="you lose!";
            msg.style.backgroundColor="red";
            compscore++
            scorecom.innerText=compscore;
        }else{
            msg.innerText="you win!";
            msg.style.backgroundColor="green";
            userscore++
            scoreuser.innerText=userscore;
        }
    })
})

