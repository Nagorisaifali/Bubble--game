function makebubble(){
    var clutter = "" ; 
    for(var i=0;i<=110;i++){
        var rn = Math.floor(Math.random()*10) 
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter ;
} 



var score = 0 ; 
timer = 30 ;  
function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer-- ; 
            document.querySelector("#timerval").innerHTML = timer ; 
        }else{
            clearInterval(timerint) ;  
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over <br> Your Score is ${score}  </h1>` ; 
        }
    },1000)  
}


var rn ; 
function gethitval(){
    rn = Math.floor(Math.random()*10) ; 
    document.querySelector("#hitval").innerHTML = rn ; 
}

  
// var score = 0 ; 
function increasescore(){
    score += 10 ;   
    document.querySelector("#scoreval").textContent = score ; 
}

function decreasescore(){
    score -= 5 ; 
    document.querySelector("#scoreval").textContent = score ; 
}

document.querySelector("#pbtm").addEventListener("click",
function(ele){
    var clicknum = Number(ele.target.textContent) ; 
    if(clicknum === rn){
        increasescore() ; 
        makebubble() ; 
        gethitval() ; 
    }else if(clicknum !== rn){
        decreasescore() ; 
        makebubble() ; 
        gethitval() ; 
    }
});



makebubble() ; 
runtimer() ;
gethitval() ; 


