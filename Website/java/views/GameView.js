// Primeira Sala
let PrimeiroRet=document.getElementById("PrimeiraRetangulo");
let SegundoRet=document.getElementById("SegundaRetangulo");
let TerceiroRet=document.getElementById("TerceirRetangulo");
let QuartaRet=document.getElementById("QuartaRetangulo");
let QuartaRet_2=document.getElementById("QuartaRetangulo_2");
let FirstScene= document.getElementById("FirstScene");
let RandomNumberFirstRoom = document.getElementById("RandomNumberFirstRoom");
// Global Salas
let goBack = document.getElementById("Goback");
let ChangeScene = document.getElementById("ChangeScene");
let Dialgo_txt = document.getElementById("Dialgo-txt");
const timerEl = document.getElementById('Tempo-txt');
let Timer_img = document.getElementById("ui-tempo");
let Dinheiro_img = document.getElementById("ui-dinheiro");

// Segunda Sala
let PrimieraPergunta = document.getElementById("PrimeiraQuestão");
let SegundaPergunta = document.getElementById("SegundaQuestão");
let TerceiraPergunta = document.getElementById("TerceiraQuestão");
let QuartaPergunta = document.getElementById("QuartaQuestão");
let QuintaPergunta = document.getElementById("QuintaQuestão");
let SextaPergunta = document.getElementById("SextaQuestão");
let SetimaPergunta = document.getElementById("SetimaQuestão");
let OitavaPergunta = document.getElementById("OitavaQuestão");
let NonaPergunta = document.getElementById("NonaQuestão");
let DecimaPergunta = document.getElementById("DecimaQuestão");
let DecimaPriPregunta = document.getElementById("DecimaPriQuestão");
let Safe = document.getElementById("safe")

// Global Funções
let value_change = 1;
let vault_Value = 0;
let startingMinutes = 5;
let time = startingMinutes * 60;
let Sound_timer = 0;
let Timer_false = false;
let intervalId;
let click_sound = new Audio("../audio/click 1.wav")

// Desafios Modals
let Modal_Facil_Primeiro = document.getElementById("Modal_Facil_Primeiro");
let Modal_Facil_Segundo = document.getElementById("Modal_Facil_Segundo");
let Modal_Facil_Terceiro = document.getElementById("Modal_Facil_Terceiro")
let Modal_Facil_Quarto = document.getElementById("Modal_Facil_Quarto");
let Modal_Facil_Quinta = document.getElementById("Modal_Facil_Quinta");
let Modal_Facil_Sexta = document.getElementById("Modal_Facil_Sexto");
let Modal_Facil_Setima = document.getElementById("Modal_Facil_Setima");


let Modal_Medio_Primeiro = document.getElementById("Modal_Medio_Primeira");
let Modal_Medio_Segundo = document.getElementById("Modal_Medio_Segundo");
let Modal_Medio_Terceiro = document.getElementById("Modal_Medio_Terca");
let Modal_Medio_Quarta = document.getElementById("Modal_Medio_Quarta");
let Modal_Medio_Quinta = document.getElementById("Modal_Medio_Quinta");


let Modal_Dificil_Primeiro = document.getElementById("Modal_Dificil_Primeiro");
let Modal_Dificil_Segundo = document.getElementById("Modal_Dificil_Segundo");



//let x = Math.floor(Math.random() * 12) + 2
//let Room = Math.floor(Math.random() * 5) + 1
let Room = 1
let x = 3

function closeModal(link) {
    document.getElementById(link).style.display = "none";
}
function submitAnswer() {
    var answer = document.getElementById("answerInput").value;
    console.log("Answer submitted: " + answer);
    
    closeModal();
}

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
/*      Random Number into Remove
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
*/
PrimeiroRet.addEventListener("click", function(event){
    event.preventDefault();
    click_sound.play()
    FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-03.png";
    PrimeiroRet.style="grid-column: 20/20;grid-row:37/37;"
    SegundoRet.style="grid-column: 20/20;grid-row:37/37;"
    TerceiroRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet_2.style="grid-column: 20/20;grid-row:37/37;"
})
SegundoRet.addEventListener("click",function(event){
    event.preventDefault()
    click_sound.play()
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
    click_sound.play()
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
        resetTimer()
        FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-08.png"
        PrimeiroRet.style="grid-column: 37/41;grid-row:36/40;"
        SegundoRet.style="grid-column: 37/41;grid-row:36/40;"
        TerceiroRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet_2.style="grid-column: 37/41;grid-row:36/40;"
        ChangeScene.style="grid-column: 37/41;grid-row:36/40;"
        goBack.style="grid-column: 37/41;grid-row:36/40;" 
        value_change = 6
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
        let Background_Music = new Audio("../audio/background music 3.mp3")
        Background_Music.volume =0.2;
        Background_Music.play()
        FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-09.png"
        //Primeira Sala
        PrimeiroRet.style="grid-column: 37/41;grid-row:36/40;"
        SegundoRet.style="grid-column: 37/41;grid-row:36/40;"
        TerceiroRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet_2.style="grid-column: 37/41;grid-row:36/40;"
        ChangeScene.style="grid-column: 37/41;grid-row:36/40;"
        goBack.style="grid-column: 37/41;grid-row:36/40;"
        //Segunda Sala
        PrimieraPergunta.style="grid-column: 37/41;grid-row:36/40;"
        SegundaPergunta.style="grid-column: 37/41;grid-row:36/40;"
        TerceiraPergunta.style="grid-column: 37/41;grid-row:36/40;"
        QuartaPergunta.style="grid-column: 37/41;grid-row:36/40;"
        QuintaPergunta.style="grid-column: 37/41;grid-row:36/40;"
        SextaPergunta.style="grid-column: 37/41;grid-row:36/40;"
        SetimaPergunta.style="grid-column: 37/41;grid-row:36/40;"
        OitavaPergunta.style="grid-column: 37/41;grid-row:36/40;"
        NonaPergunta.style="grid-column: 37/41;grid-row:36/40;"
        DecimaPergunta.style="grid-column: 37/41;grid-row:36/40;"
        DecimaPriPregunta.style="grid-column: 37/41;grid-row:36/40;"
        Safe.style="grid-column: 37/41;grid-row:36/40;"

        Dialgo_txt.innerHTML ="Achas mesmo que conseguimos roubar o banco?"  
        value_change +=1
    }
    else if(value_change == 2){
        Dialgo_txt.innerHTML ="Claro se foremos os 3 e com ajuda da matematica conseguimos na boa."  
        value_change +=1
    }else if(value_change == 3){
        Dialgo_txt.innerHTML ="Matematica?"  
        value_change +=1
    }else if(value_change == 4){
        Dialgo_txt.innerHTML ="Claro!"  
        value_change +=1
    }else if(value_change == 5){
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
        //Segunda Sala
        PrimieraPergunta.style="grid-column: 20/20;grid-row:37/37;"
        SegundaPergunta.style="grid-column: 20/20;grid-row:37/37;"
        TerceiraPergunta.style="grid-column: 20/20;grid-row:37/37;"
        QuartaPergunta.style="grid-column: 20/20;grid-row:37/37;"
        QuintaPergunta.style="grid-column: 20/20;grid-row:37/37;"
        SextaPergunta.style="grid-column: 20/20;grid-row:37/37;"
        SetimaPergunta.style="grid-column: 20/20;grid-row:37/37;"
        OitavaPergunta.style="grid-column: 20/20;grid-row:37/37;"
        NonaPergunta.style="grid-column: 20/20;grid-row:37/37;"
        DecimaPergunta.style="grid-column: 20/20;grid-row:37/37;"
        DecimaPriPregunta.style="grid-column: 20/20;grid-row:37/37;"
        Safe.style="grid-column: 20/20;grid-row:37/37;"
    }else if(value_change == 6){
        event.preventDefault()
        

        if(Room == 1){
            FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-02.png"
            PrimeiroRet.style="grid-column: 17/25;grid-row:37/40;"
            SegundoRet.style="grid-column: 17/25;grid-row:37/40;"
            TerceiroRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet_2.style="grid-column: 17/25;grid-row:37/40;"
            ChangeScene.style="grid-column: 17/25;grid-row:37/40;"
            goBack.style="grid-column: 17/25;grid-row:37/40;"
            //Segunda Sala
            PrimieraPergunta.style="grid-column: 4/9;grid-row:16/19;"
            SegundaPergunta.style="grid-column: 9/14;grid-row:16/19;"
            TerceiraPergunta.style="grid-column: 6/11;grid-row:19/22;"
            QuartaPergunta.style="grid-column: 4/14;grid-row:22/27;"
            QuintaPergunta.style="grid-column: 4/7;grid-row:28/30;"
            SextaPergunta.style="grid-column: 8/11;grid-row:28/30;"
            SetimaPergunta.style="grid-column: 11/14;grid-row:28/30;"
            OitavaPergunta.style="grid-column: 28/33;grid-row:16/19;"
            NonaPergunta.style="grid-column: 33/38;grid-row:16/19;"
            DecimaPergunta.style="grid-column: 28/38;grid-row:20/27;"
            DecimaPriPregunta.style="grid-column: 28/38;grid-row:27/31;"
            Safe.style="grid-column: 19/23;grid-row: 25/32;"

            //Desafios
            PrimieraPergunta.addEventListener("click",function(event){
                event.preventDefault()
                Modal_Facil_Setima.style.display = "block";
            })
            SegundaPergunta.addEventListener("click",function(event){
                event.preventDefault()
                Modal_Medio_Quinta.style.display = "block";
            })
            TerceiraPergunta.addEventListener("click",function(event){
                event.preventDefault()
                Modal_Dificil_Segundo.style.display = "block";
            })

        }else if(Room == 2){
            FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-10.png"
            PrimeiroRet.style="grid-column: 17/25;grid-row:37/40;"
            SegundoRet.style="grid-column: 17/25;grid-row:37/40;"
            TerceiroRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet_2.style="grid-column: 17/25;grid-row:37/40;"
            ChangeScene.style="grid-column: 17/25;grid-row:37/40;"
            goBack.style="grid-column: 17/25;grid-row:37/40;"
            //Segunda Sala
            PrimieraPergunta.style="grid-column: 9/14;grid-row:16/19;"
            SegundaPergunta.style="grid-column: 6/11;grid-row:20/23;"
            TerceiraPergunta.style="grid-column: 4/9;grid-row:24/27;"
            QuartaPergunta.style="grid-column: 9/14;grid-row:24/27;"
            QuintaPergunta.style="grid-column: 4/7;grid-row:28/30;"
            SextaPergunta.style="grid-column: 11/14;grid-row:28/30;"
            SetimaPergunta.style="grid-column: 28/32;grid-row:17/19;"
            OitavaPergunta.style="grid-column: 33/38;grid-row:17/19;"
            NonaPergunta.style="grid-column: 28/32;grid-row:20/27;"
            DecimaPergunta.style="grid-column: 33/38;grid-row:20/27;"
            DecimaPriPregunta.style="grid-column: 28/38;grid-row:28/31;"
            Safe.style="grid-column: 19/23;grid-row: 25/32;"
        }else if(Room == 3){
            FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-11.png"
            PrimeiroRet.style="grid-column: 17/25;grid-row:37/40;"
            SegundoRet.style="grid-column: 17/25;grid-row:37/40;"
            TerceiroRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet_2.style="grid-column: 17/25;grid-row:37/40;"
            ChangeScene.style="grid-column: 17/25;grid-row:37/40;"
            goBack.style="grid-column: 17/25;grid-row:37/40;"
            //Segunda Sala
            PrimieraPergunta.style="grid-column: 4/8;grid-row:16/19;"
            SegundaPergunta.style="grid-column: 9/14;grid-row:16/19;"
            TerceiraPergunta.style="grid-column: 6/11;grid-row:20/27;"
            QuartaPergunta.style="grid-column: 4/7;grid-row:28/30;"
            QuintaPergunta.style="grid-column: 11/14;grid-row:28/30;"
            SextaPergunta.style="grid-column: 28/32;grid-row:16/19;"
            SetimaPergunta.style="grid-column: 33/38;grid-row:16/19;"
            OitavaPergunta.style="grid-column: 28/30;grid-row:23/27;"
            NonaPergunta.style="grid-column: 31/35;grid-row:20/27;"
            DecimaPergunta.style="grid-column: 35/38;grid-row:20/23;"
            DecimaPriPregunta.style="grid-column: 28/38;grid-row:27/30;"
            Safe.style="grid-column: 19/23;grid-row: 25/32;"
        }
        else if(Room == 4){
            FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-12.png"
            PrimeiroRet.style="grid-column: 17/25;grid-row:37/40;"
            SegundoRet.style="grid-column: 17/25;grid-row:37/40;"
            TerceiroRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet_2.style="grid-column: 17/25;grid-row:37/40;"
            ChangeScene.style="grid-column: 17/25;grid-row:37/40;"
            goBack.style="grid-column: 17/25;grid-row:37/40;"
            //Segunda Sala
            PrimieraPergunta.style="grid-column: 3/8;grid-row:16/19;"
            SegundaPergunta.style="grid-column: 9/14;grid-row:16/19;"
            TerceiraPergunta.style="grid-column: 3/7;grid-row:19/22;"
            QuartaPergunta.style="grid-column: 7/11;grid-row:19/22;"
            QuintaPergunta.style="grid-column: 11/14;grid-row:19/22;"
            SextaPergunta.style="grid-column: 4/13;grid-row:23/27;"
            SetimaPergunta.style="grid-column: 7/10;grid-row:28/30;"
            OitavaPergunta.style="grid-column: 30/32;grid-row:16/19;"
            NonaPergunta.style="grid-column: 33/35;grid-row:16/19;"
            DecimaPergunta.style="grid-column: 28/37;grid-row:20/27;"
            DecimaPriPregunta.style="grid-column: 30/35;grid-row:28/31;"
            Safe.style="grid-column: 19/23;grid-row: 25/32;"
        }
        else if(Room == 5){
            FirstScene.src="../img/GameBackground/FirstBackgroundUpdate-13.png"
            PrimeiroRet.style="grid-column: 17/25;grid-row:37/40;"
            SegundoRet.style="grid-column: 17/25;grid-row:37/40;"
            TerceiroRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet.style="grid-column: 17/25;grid-row:37/40;"
            QuartaRet_2.style="grid-column: 17/25;grid-row:37/40;"
            ChangeScene.style="grid-column: 17/25;grid-row:37/40;"
            goBack.style="grid-column: 17/25;grid-row:37/40;"
            //Segunda Sala
            PrimieraPergunta.style="grid-column: 6/11;grid-row:17/20;"
            SegundaPergunta.style="grid-column: 4/13;grid-row:21/26;"
            TerceiraPergunta.style="grid-column: 4/7;grid-row:27/30;"
            QuartaPergunta.style="grid-column: 7/10;grid-row:27/30;"
            QuintaPergunta.style="grid-column: 11/13;grid-row:27/30;"
            SextaPergunta.style="grid-column: 28/32;grid-row:16/19;"
            SetimaPergunta.style="grid-column: 33/38;grid-row:16/19;"
            OitavaPergunta.style="grid-column: 28/37;grid-row:20/25;"
            NonaPergunta.style="grid-column: 28/31;grid-row:26/28;"
            DecimaPergunta.style="grid-column: 28/31;grid-row:29/31;"
            DecimaPriPregunta.style="grid-column: 32/38;grid-row:26/30;"
        }
    }
    
})