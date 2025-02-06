var timer = 60;
var score = 0;
var random;

function createBubble(){
    var bubbles = "";
    for (var i = 0; i <= 95; i++) {
        var rn = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble"><h1>${rn}</h1></div>`;
    }

    document.querySelector("#bottom").innerHTML = bubbles;  
}

function runtimer(){
    var timerint = setInterval(function(){
            if(timer > 0){
                timer--;
                document.querySelector("#timer").textContent = timer;
            }
            else{
                clearInterval(timerint)
                document.querySelector("#bottom").innerHTML = `<h1>Your Score is: ${score}</h1>`;
            }
        }, 1000)
    }
    
function generatenewhit(){
    random = Math.floor(Math.random()*10);
    document.querySelector("#generateHit").textContent = random;    
}

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#bottom").addEventListener("click", function(detail){
    clickednumber = Number(detail.target.textContent);
    if(random == clickednumber){
        increaseScore();
        generatenewhit();
        createBubble();
    }
});

createBubble();
runtimer();
generatenewhit();