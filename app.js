///butten pree game start

let gameseq = [];
let userseq = [];

let btns = ["yello", "red", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("started");
        started = true;

        levelUp();
    }
});

//step 2 random button flash and level up

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 800);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `leven ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * btns.length);
    let randomcol = btns[randIdx];
    let randbtn = document.querySelector(`.${randomcol}`);
    //  console.log(randbtn);
    gameseq.push(randomcol);
    console.log(gameseq);
    gameflash(randbtn);
}
function checkAns(idx) {
    // console.log("curr lev:",level);
    

    if (userseq[idx] == gameseq[idx]) {
        if ((userseq.length == gameseq.length)) {
            setTimeout(levelUp,250);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b><b>Press any key to start`;
        document.querySelector("body").style.background = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}


function reset(){
    started = false;
    gameseq= [];
    userseq = [];
    level = 0;
}

// matching sequence
