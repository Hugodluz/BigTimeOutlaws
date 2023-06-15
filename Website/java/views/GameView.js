let PrimeiroRet=document.getElementById("PrimeiraRetangulo");
let SegundoRet=document.getElementById("SegundaRetangulo");
let TerceiroRet=document.getElementById("TerceirRetangulo");
let QuartaRet=document.getElementById("QuartaRetangulo");
let QuartaRet_2=document.getElementById("QuartaRetangulo_2");
let FirstScene= document.getElementById("FirstScene");
let ChangeScene = document.getElementById("ChangeScene");
let Dialgo_txt = document.getElementById("Dialgo-txt");
const timerEl = document.getElementById('Tempo-txt');
let Timer_img = document.getElementById("ui-tempo");
let Dinheiro_img = document.getElementById("ui-dinheiro");
let RandomNumberFirstRoom = document.getElementById("RandomNumberFirstRoom")

let value_change = 1;
let vault_Value = 0;
let goBack = document.getElementById("Goback");
let startingMinutes = 5;
let time = startingMinutes * 60;
let Sound_timer = 0;
let Timer_false = false;
let intervalId;


let x = Math.floor(Math.random() * 15) + 2

function uptdatetimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    timerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (Sound_timer == 0){
        if(minutes == 0){
            Sound_timer = 1 
            let audio_timer = new Audio("../audio/444568__parkersenk__ticking-timer.mp3");
            audio_timer.play()
        
        }
    }
    if(time == 0){
        clearInterval(intervalId)
        return
    }
    
}
function resetTimer() {
    time = startingMinutes * 60; 
    uptdatetimer(); 
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (let i = 0; i < 5; i++) {
      // Generate a random index within the current range of the array
      const randomIndex = Math.floor(Math.random() * numbers.length);
    
      // Get the randomly selected number
      const randomNumber = numbers[randomIndex];
    
      // Remove the selected number from the array
      numbers.splice(randomIndex, 1);
    
      // Output the randomly selected number
      console.log(randomNumber);
    }

PrimeiroRet.addEventListener("click", function(event){
    event.preventDefault();
    FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-03.png";
    PrimeiroRet.style="grid-column: 20/20;grid-row:37/37;"
    SegundoRet.style="grid-column: 20/20;grid-row:37/37;"
    TerceiroRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet_2.style="grid-column: 20/20;grid-row:37/37;"
})
SegundoRet.addEventListener("click",function(event){
    event.preventDefault()
    FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-04.png";
    RandomNumberFirstRoom.innerHTML=x
    PrimeiroRet.style="grid-column: 20/20;grid-row:37/37;"
    SegundoRet.style="grid-column: 20/20;grid-row:37/37;"
    TerceiroRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet_2.style="grid-column: 20/20;grid-row:37/37;"
})
TerceiroRet.addEventListener("click",function(event){
    event.preventDefault()
    FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-05.png";
    PrimeiroRet.style="grid-column: 20/20;grid-row:37/37;"
    SegundoRet.style="grid-column: 20/20;grid-row:37/37;"
    TerceiroRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet_2.style="grid-column: 20/20;grid-row:37/37;"
})
QuartaRet.addEventListener("click",function(event){
    if(vault_Value == 0){
        event.preventDefault()
        FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-06.png";
        PrimeiroRet.style="grid-column: 20/20;grid-row:37/37;"
        SegundoRet.style="grid-column: 20/20;grid-row:37/37;"
        TerceiroRet.style="grid-column: 20/20;grid-row:37/37;"
        QuartaRet.style="grid-column: 20/20;grid-row:37/37;"
        QuartaRet_2.style="grid-column: 20/20;grid-row:37/37;"
        ChangeScene.style="grid-column: 16/26;grid-row:16/27"
    }else if(vault_Value == 1){
        window.location.href = "index_2.html";
    }

})
QuartaRet_2.addEventListener("click",function(event){
    if(vault_Value ==0){
        event.preventDefault()
        FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-06.png";
        PrimeiroRet.style="grid-column: 20/20;grid-row:37/37;"
        SegundoRet.style="grid-column: 20/20;grid-row:37/37;"
        TerceiroRet.style="grid-column: 20/20;grid-row:37/37;"
        QuartaRet.style="grid-column: 20/20;grid-row:37/37;"
        QuartaRet_2.style="grid-column: 20/20;grid-row:37/37;"
        ChangeScene.style="grid-column: 16/26;grid-row:16/27"
    }else if(vault_Value == 1){
        window.location.href = "index_2.html";

    }
    
})
ChangeScene.addEventListener("click",function(event){
    event.preventDefault();
    codigo = +prompt("Codigo:")
    if (codigo == (parseFloat(2*3.14*x).toFixed(2))){
        let audio_safe = new Audio("../audio/Correct Answer Sound Effect.mp3");
        audio_safe.play()
        FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-08.png"
        PrimeiroRet.style="grid-column: 37/41;grid-row:36/40;"
        SegundoRet.style="grid-column: 37/41;grid-row:36/40;"
        TerceiroRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet_2.style="grid-column: 37/41;grid-row:36/40;"
        ChangeScene.style="grid-column: 37/41;grid-row:36/40;"
        goBack.style="grid-column: 37/41;grid-row:36/40;" 
        value_change = 3
        vault_Value = 1
    }else{
        let audio_safe_error = new Audio("../audio/Soft Fail Sound Effect.mp3");
        audio_safe_error.play()
    }


})
goBack.addEventListener("click", function(event){
    event.preventDefault()
    if(value_change == 1){
        event.preventDefault()

        FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-09.png"
        PrimeiroRet.style="grid-column: 37/41;grid-row:36/40;"
        SegundoRet.style="grid-column: 37/41;grid-row:36/40;"
        TerceiroRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet_2.style="grid-column: 37/41;grid-row:36/40;"
        ChangeScene.style="grid-column: 37/41;grid-row:36/40;"
        goBack.style="grid-column: 37/41;grid-row:36/40;"
        Dialgo_txt.innerHTML ="Achas mesmo que conseguimos roubar o banco?"  
        value_change +=1
        
    }else if(value_change == 2){
        event.preventDefault()
        if(Timer_false == false){
            setInterval(uptdatetimer, 1000);
            Timer_false= true;
        }
        
        Timer_img.style ="width: 100%;"
        Dinheiro_img.style="width: 100%;"

        RandomNumberFirstRoom.innerHTML=""
        Dialgo_txt.innerHTML=""
        FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-01.png"
        PrimeiroRet.style="grid-column: 1/14;grid-row: 22/35;"
        SegundoRet.style="grid-column: 25/51;grid-row: 22/35;"
        TerceiroRet.style="grid-column: 28/36; grid-row: 7/15;"
        QuartaRet.style="grid-column: 19/23;grid-row:10/14;"
        QuartaRet_2.style="grid-column: 20/22;grid-row:9/15;"
        ChangeScene.style="grid-column: 20/20;grid-row:37/37;"
        goBack.style="grid-column: 17/25;grid-row:37/40;"
    }else if(value_change == 3){
        event.preventDefault()
        resetTimer()
    }
    
})