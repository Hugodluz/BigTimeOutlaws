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
let Dinheiro_txt = document.getElementById("Dinheiro-txt")
let Timer_img = document.getElementById("ui-tempo");
let Dinheiro_img = document.getElementById("ui-dinheiro");

let Dinheiro = 0

let ModifeirFacil = 1000
let ModifeirMedio = 5000
let ModifeirDificil = 10000
let ModifeirSafe = 20000

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
let win_sound = new Audio("../audio/win.wav")
let Lose_sound = new Audio("../audio/fail.wav")
let Closed_exe = new Audio("../audio/487614__deela__lock-a-door.wav")

// Desafios Modals
//Desafio Facil (15/15)
let Modal_Facil_Primeiro = document.getElementById("Modal_Facil_Primeiro");
let Modal_Facil_PrimeiroResposta = document.getElementById("Modal_Facil_PrimeiroResposta")
let Facil_Primeiro=0
let Modal_Facil_Segundo = document.getElementById("Modal_Facil_Segundo");
let Modal_Facil_SegundoResposta = document.getElementById("Modal_Facil_SegundoResposta")
let Facil_Segundo=0
let Modal_Facil_Terceiro = document.getElementById("Modal_Facil_Terceiro")
let Modal_Facil_TerceiroResposta = document.getElementById("Modal_Facil_TerceiroResposta")
let Facil_Terceiro=0
let Modal_Facil_Quarto = document.getElementById("Modal_Facil_Quarto");
let Modal_Facil_QuartoResposta = document.getElementById("Modal_Facil_QuatroResposta")
let Facil_Quarto=0
let Modal_Facil_Quinta = document.getElementById("Modal_Facil_Quinta");
let Modal_Facil_QuintaResposta = document.getElementById("Modal_Facil_QuintaResposta")
let Facil_Quinta=0
let Modal_Facil_Sexto = document.getElementById("Modal_Facil_Sexto");
let Modal_Facil_SextoResposta = document.getElementById("Modal_Facil_SextoResposta")
let Facil_Sexto=0
let Modal_Facil_Setima = document.getElementById("Modal_Facil_Setima");
let Modal_Facil_SetimaResposta = document.getElementById("Modal_Facil_SetimaResposta")
let Facil_Setima=0
let Modal_Facil_Oitava = document.getElementById("Modal_Facil_Oitava");
let Modal_Facil_OitavaResposta = document.getElementById("Modal_Facil_OitavaResposta")
let Facil_Oitava=0
let Modal_Facil_Nona = document.getElementById("Modal_Facil_Nona");
let Modal_Facil_NonaResposta = document.getElementById("Modal_Facil_NonaResposta")
let Facil_Nona=0
let Modal_Facil_Decima = document.getElementById("Modal_Facil_Decima");
let Modal_Facil_DecimaResposta = document.getElementById("Modal_Facil_DecimaResposta")
let Facil_Decima=0
let Modal_Facil_DecimaPrimeira = document.getElementById("Modal_Facil_DecimaPrimeira");
let Modal_Facil_DecimaPrimeiraResposta = document.getElementById("Modal_Facil_DecimaPrimeiraResposta")
let Facil_DecimaPrimeira =0
let Modal_Facil_DecimaSegunda = document.getElementById("Modal_Facil_DecimaSegunda");
let Modal_Facil_DecimaSegundaResposta = document.getElementById("Modal_Facil_DecimaSegundaResposta")
let Facil_DecimaSegunda=0
let Modal_Facil_DecimaTerceira = document.getElementById("Modal_Facil_DecimaTerceira");
let Modal_Facil_DecimaTerceiraResposta = document.getElementById("Modal_Facil_DecimaTerceiraResposta")
let Facil_DecimaTerceira=0
let Modal_Facil_DecimaQuarta = document.getElementById("Modal_Facil_DecimaQuarta");
let Modal_Facil_DecimaQuartaResposta = document.getElementById("Modal_Facil_DecimaQuartaResposta")
let Facil_DecimaQuarta = 0
let Modal_Facil_DecimaQuinta = document.getElementById("Modal_Facil_DecimaQuinta");
let Modal_Facil_DecimaQuintaResposta = document.getElementById("Modal_Facil_DecimaQuintaResposta")
let Facil_DecimaQuinta = 0

//Desafio Medio (15/15)
let Modal_Medio_Primeiro = document.getElementById("Modal_Medio_Primeira");
let Modal_Medio_PrimeiraResposta = document.getElementById("Modal_Medio_PrimeiraResposta")
let Medio_Primeira = 0
let Modal_Medio_Segundo = document.getElementById("Modal_Medio_Segundo");
let Modal_Medio_SegundoResposta = document.getElementById("Modal_Medio_SegundoResposta")
let Medio_Segundo = 0
let Modal_Medio_Terceiro = document.getElementById("Modal_Medio_Terceiro");
let Modal_Medio_TerceiroResposta = document.getElementById("Modal_Medio_TerceiroResposta")
let Medio_Terceiro = 0
let Modal_Medio_Quarta = document.getElementById("Modal_Medio_Quarta");
let Modal_Medio_QuartaResposta = document.getElementById("Modal_Medio_QuartaResposta")
let Medio_Quarta = 0
let Modal_Medio_Quinta = document.getElementById("Modal_Medio_Quinta");
let Modal_Medio_QuintaResposta = document.getElementById("Modal_Medio_QuintaResposta")
let Medio_Quinta = 0
let Modal_Medio_Sexta = document.getElementById("Modal_Medio_Sexta");
let Modal_Medio_SextaResposta = document.getElementById("Modal_Medio_SextaResposta")
let Medio_Sexta=0
let Modal_Medio_Setima = document.getElementById("Modal_Medio_Setima");
let Modal_Medio_SetimaResposta = document.getElementById("Modal_Medio_SetimaResposta")
let Medio_Setima = 0
let Modal_Medio_Oitavo = document.getElementById("Modal_Medio_Oitavo");
let Modal_Medio_OitavoResposta = document.getElementById("Modal_Medio_OitavoResposta");
let Medio_Oitavo = 0
let Modal_Medio_Nona = document.getElementById("Modal_Medio_Nona");
let Modal_Medio_NonaResposta = document.getElementById("Modal_Medio_NonaResposta")
let Medio_Nona = 0
let Modal_Medio_Decima = document.getElementById("Modal_Medio_Decima");
let Modal_Medio_DecimaResposta = document.getElementById("Modal_Medio_DecimaResposta")
let Medio_Decima = 0
let Modal_Medio_DecimaPrimeira = document.getElementById("Modal_Medio_DecimaPrimeira");
let Modal_Medio_DecimaPrimeiraResposta = document.getElementById("Modal_Medio_DecimaPrimeiraResposta");
let Medio_DecimaPrimeira = 0
let Modal_Medio_DecimaSegunda = document.getElementById("Modal_Medio_DecimaSegunda");
let Modal_Medio_DecimaSegundaResposta = document.getElementById("Modal_Medio_DecimaSegundaResposta")
let Medio_DecimaSegunda = 0
let Modal_Medio_DecimaTerceiro = document.getElementById("Modal_Medio_DecimaTerceiro");
let Modal_Medio_DecimaTerceiroResposta = document.getElementById("Modal_Medio_DecimaTerceiroResposta");
let Medio_DecimaTerceiro = 0;
let Modal_Medio_DecimaQuarto = document.getElementById("Modal_Medio_DecimaQuarto");
let Modal_Medio_DecimaQuartoResposta = document.getElementById("Modal_Medio_DecimaQuartoResposta");
let Medio_DecimaQuarto = 0;
let Modal_Medio_DecimaQuinta = document.getElementById("Modal_Medio_DecimaQuinta");
let Modal_Medio_DecimaQuintaResposta = document.getElementById("Modal_Medio_DecimaQuintaResposta")
let Medio_DecimaQuinta = 0

//Desafio Dificil (6/6)
let Modal_Dificil_Primeiro = document.getElementById("Modal_Dificil_Primeiro");
let Modal_Dificil_PrimeiroResposta = document.getElementById("Modal_Dificil_PrimeiroResposta")
let Dificil_Primeiro=0
let Modal_Dificil_Segundo = document.getElementById("Modal_Dificil_Segundo");
let Modal_Dificil_SegundoResposta = document.getElementById("Modal_Dificil_SegundoResposta")
let Dificil_Segundo=0
let Modal_Dificil_Terceiro = document.getElementById("Modal_Dificil_Terceiro");
let Modal_Dificil_TerceiroResposta = document.getElementById("Modal_Dificil_TerceiroResposta")
let Dificil_Terceiro=0
let Modal_Dificil_Quarta = document.getElementById("Modal_Dificil_Quarta");
let Modal_Dificil_QuartaResposta = document.getElementById("Modal_Dificil_QuartaResposta")
let Dificil_Quarta =0
let Modal_Dificil_Quinta = document.getElementById("Modal_Dificil_Quinta");
let Modal_Dificil_QuintaResposta = document.getElementById("Modal_Dificil_QuintaResposta")
let Dificil_Quinta =0
let Modal_Dificil_Sexta = document.getElementById("Modal_Dificil_Sexta");
let Modal_Dificil_SextaResposta = document.getElementById("Modal_Dificil_SextaResposta")
let Dificil_Sexta=0


//Desafio Final(1/1)
let Modal_Desafio_Final = document.getElementById("Modal_Dificil_Final")


//let x = Math.floor(Math.random() * 12) + 2
//let Room = Math.floor(Math.random() * 5) + 1
let Room = 1
let x = 3

//Desafios set
let Room1Facil1;
let Room1Facil2;
let Room1Facil3;
let Room1Facil4;
let Room1Facil5;
let Room1Medio1;
let Room1Medio2;
let Room1Medio3;
let Room1Medio4;
let Room1Medio5;
let Room1Medio6;
let Room1Dificil1;
let Room1Dificil2;


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

//Mandar aliatoriamente os numeros para as gavetas
let FacilNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let MedioNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let DificilNumbers = [1, 2, 3, 4, 5, 6];
if(Room == 1){
    // Facil Questions (3)
    // Gerar Numero aliatorio
    let randomIndex1 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil1 = FacilNumbers[randomIndex1];
  
    // Remover do array
    FacilNumbers.splice(randomIndex1, 1);

    // Gerar Numero aliatorio
    let randomIndex2 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil2 = FacilNumbers[randomIndex2];
  
    // Remover do array
    FacilNumbers.splice(randomIndex2, 1);
    // Gerar Numero aliatorio
    let randomIndex3 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil3 = FacilNumbers[randomIndex3];
  
    // Remover do array
    FacilNumbers.splice(randomIndex3, 1);

    // Media Questions (6)
    // Gerar Numero aliatorio
    let randomIndex4 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio1 = MedioNumbers[randomIndex4];
  
    // Remover do array
    MedioNumbers.splice(randomIndex4, 1);

    let randomIndex5 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio2 = MedioNumbers[randomIndex5];
  
    // Remover do array
    MedioNumbers.splice(randomIndex5, 1);

    // Gerar Numero aliatorio
    let randomIndex6 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio3 = MedioNumbers[randomIndex6];
  
    // Remover do array
    MedioNumbers.splice(randomIndex6, 1);

    // Gerar Numero aliatorio
    let randomIndex7 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio4 = MedioNumbers[randomIndex7];
  
    // Remover do array
    MedioNumbers.splice(randomIndex7, 1);

    // Gerar Numero aliatorio
    let randomIndex8 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio5 = MedioNumbers[randomIndex8];
  
    // Remover do array
    MedioNumbers.splice(randomIndex8, 1);

    // Gerar Numero aliatorio
    let randomIndex9 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio6 = MedioNumbers[randomIndex9];
  
    // Remover do array
    MedioNumbers.splice(randomIndex9, 1);

    //  Dificil Questions (2)
    // Gerar Numero aliatorio
    let randomIndex10 = Math.floor(Math.random() * DificilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Dificil1 = 2//DificilNumbers[randomIndex10];
  
    // Remover do array
    DificilNumbers.splice(randomIndex10, 1);
    
    // Gerar Numero aliatorio
    let randomIndex11 = Math.floor(Math.random() * DificilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Dificil2 = DificilNumbers[randomIndex11];
  
    // Remover do array
    DificilNumbers.splice(randomIndex11, 1);
}else if(Room == 2){
    // Facil Questions (4)
    // Gerar Numero aliatorio
    let randomIndex1 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil1 = FacilNumbers[randomIndex1];
  
    // Remover do array
    FacilNumbers.splice(randomIndex1, 1);

    // Gerar Numero aliatorio
    let randomIndex2 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil2 = FacilNumbers[randomIndex2];
  
    // Remover do array
    FacilNumbers.splice(randomIndex2, 1);

    // Gerar Numero aliatorio
    let randomIndex3 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil3 = FacilNumbers[randomIndex3];
  
    // Remover do array
    FacilNumbers.splice(randomIndex3, 1);

    let randomIndex4 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil4 = FacilNumbers[randomIndex4];
  
    // Remover do array
    FacilNumbers.splice(randomIndex4, 1);


    // Media Questions (5)
    // Gerar Numero aliatorio
    let randomIndex5 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio1 = MedioNumbers[randomIndex5];
  
    // Remover do array
    MedioNumbers.splice(randomIndex5, 1);

    // Gerar Numero aliatorio
    let randomIndex6 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio2 = MedioNumbers[randomIndex6];
  
    // Remover do array
    MedioNumbers.splice(randomIndex6, 1);

    // Gerar Numero aliatorio
    let randomIndex7 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio3 = MedioNumbers[randomIndex7];
  
    // Remover do array
    MedioNumbers.splice(randomIndex7, 1);

    // Gerar Numero aliatorio
    let randomIndex8 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio4 = MedioNumbers[randomIndex8];
  
    // Remover do array
    MedioNumbers.splice(randomIndex8, 1);

    // Gerar Numero aliatorio
    let randomIndex9 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio5 = MedioNumbers[randomIndex9];
  
    // Remover do array
    MedioNumbers.splice(randomIndex9, 1);

    //  Dificil Questions (2)
    // Gerar Numero aliatorio
    let randomIndex10 = Math.floor(Math.random() * DificilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Dificil1 = DificilNumbers[randomIndex10];
  
    // Remover do array
    DificilNumbers.splice(randomIndex10, 1);
    
    // Gerar Numero aliatorio
    let randomIndex11 = Math.floor(Math.random() * DificilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Dificil2 = DificilNumbers[randomIndex11];
  
    // Remover do array
    DificilNumbers.splice(randomIndex11, 1);
} else if(Room==3){
    // Facil Questions (4)
    // Gerar Numero aliatorio
    let randomIndex1 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil1 = FacilNumbers[randomIndex1];
  
    // Remover do array
    FacilNumbers.splice(randomIndex1, 1);

    // Gerar Numero aliatorio
    let randomIndex2 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil2 = FacilNumbers[randomIndex2];
  
    // Remover do array
    FacilNumbers.splice(randomIndex2, 1);

    // Gerar Numero aliatorio
    let randomIndex3 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil3 = FacilNumbers[randomIndex3];
  
    // Remover do array
    FacilNumbers.splice(randomIndex3, 1);

    let randomIndex4 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil4 = FacilNumbers[randomIndex4];
  
    // Remover do array
    FacilNumbers.splice(randomIndex4, 1);


    // Media Questions (5)
    // Gerar Numero aliatorio
    let randomIndex5 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio1 = MedioNumbers[randomIndex5];
  
    // Remover do array
    MedioNumbers.splice(randomIndex5, 1);

    // Gerar Numero aliatorio
    let randomIndex6 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio2 = MedioNumbers[randomIndex6];
  
    // Remover do array
    MedioNumbers.splice(randomIndex6, 1);

    // Gerar Numero aliatorio
    let randomIndex7 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio3 = MedioNumbers[randomIndex7];
  
    // Remover do array
    MedioNumbers.splice(randomIndex7, 1);

    // Gerar Numero aliatorio
    let randomIndex8 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio4 = MedioNumbers[randomIndex8];
  
    // Remover do array
    MedioNumbers.splice(randomIndex8, 1);

    // Gerar Numero aliatorio
    let randomIndex9 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio5 = MedioNumbers[randomIndex9];
  
    // Remover do array
    MedioNumbers.splice(randomIndex9, 1);

    //  Dificil Questions (6)
    // Gerar Numero aliatorio
    let randomIndex10 = Math.floor(Math.random() * DificilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Dificil1 = DificilNumbers[randomIndex10];
  
    // Remover do array
    DificilNumbers.splice(randomIndex10, 1);
    
    // Gerar Numero aliatorio
    let randomIndex11 = Math.floor(Math.random() * DificilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Dificil2 = DificilNumbers[randomIndex11];
  
    // Remover do array
    DificilNumbers.splice(randomIndex11, 1);
}else if(Room==4){
        // Facil Questions (5)
    // Gerar Numero aliatorio
    let randomIndex1 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil1 = FacilNumbers[randomIndex1];
  
    // Remover do array
    FacilNumbers.splice(randomIndex1, 1);

    // Gerar Numero aliatorio
    let randomIndex2 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil2 = FacilNumbers[randomIndex2];
  
    // Remover do array
    FacilNumbers.splice(randomIndex2, 1);

    // Gerar Numero aliatorio
    let randomIndex3 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil3 = FacilNumbers[randomIndex3];
  
    // Remover do array
    FacilNumbers.splice(randomIndex3, 1);

    let randomIndex4 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil4 = FacilNumbers[randomIndex4];
  
    // Remover do array
    FacilNumbers.splice(randomIndex4, 1);

    // Gerar Numero aliatorio
    let randomIndex5 = Math.floor(Math.random() * FacilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Facil5 = FacilNumbers[randomIndex5];

    // Remover do array
    FacilNumbers.splice(randomIndex5, 1);


    // Media Questions (4)
    
    // Gerar Numero aliatorio
    let randomIndex6 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio1 = MedioNumbers[randomIndex6];
  
    // Remover do array
    MedioNumbers.splice(randomIndex6, 1);

    // Gerar Numero aliatorio
    let randomIndex7 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio2 = MedioNumbers[randomIndex7];
  
    // Remover do array
    MedioNumbers.splice(randomIndex7, 1);

    // Gerar Numero aliatorio
    let randomIndex8 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    Room1Medio3 = MedioNumbers[randomIndex8];
  
    // Remover do array
    MedioNumbers.splice(randomIndex8, 1);

    // Gerar Numero aliatorio
    let randomIndex9 = Math.floor(Math.random() * MedioNumbers.length);
    
    // Receber Random numbero da lista
    let Room1Medio4 = MedioNumbers[randomIndex9];
  
    // Remover do array
    MedioNumbers.splice(randomIndex9, 1);

    //  Dificil Questions (6)
    // Gerar Numero aliatorio
    let randomIndex10 = Math.floor(Math.random() * DificilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Dificil1 = DificilNumbers[randomIndex10];
  
    // Remover do array
    DificilNumbers.splice(randomIndex10, 1);
    
    // Gerar Numero aliatorio
    let randomIndex11 = Math.floor(Math.random() * DificilNumbers.length);
    
    // Receber Random numbero da lista
    Room1Dificil2 = DificilNumbers[randomIndex11];
  
    // Remover do array
    DificilNumbers.splice(randomIndex11, 1);
}else if(Room==5){
    // Facil Questions (5)
    // Gerar Numero aliatorio
    let randomIndex1 = Math.floor(Math.random() * FacilNumbers.length);

    // Receber Random numbero da lista
    Room1Facil1 = FacilNumbers[randomIndex1];

    // Remover do array
    FacilNumbers.splice(randomIndex1, 1);

    // Gerar Numero aliatorio
    let randomIndex2 = Math.floor(Math.random() * FacilNumbers.length);

    // Receber Random numbero da lista
    Room1Facil2 = FacilNumbers[randomIndex2];

    // Remover do array
    FacilNumbers.splice(randomIndex2, 1);

    // Gerar Numero aliatorio
    let randomIndex3 = Math.floor(Math.random() * FacilNumbers.length);

    // Receber Random numbero da lista
    Room1Facil3 = FacilNumbers[randomIndex3];

    // Remover do array
    FacilNumbers.splice(randomIndex3, 1);

    let randomIndex4 = Math.floor(Math.random() * FacilNumbers.length);

    // Receber Random numbero da lista
    Room1Facil4 = FacilNumbers[randomIndex4];

    // Remover do array
    FacilNumbers.splice(randomIndex4, 1);

    // Gerar Numero aliatorio
    let randomIndex5 = Math.floor(Math.random() * FacilNumbers.length);

    // Receber Random numbero da lista
    Room1Facil5 = FacilNumbers[randomIndex5];

    // Remover do array
    FacilNumbers.splice(randomIndex5, 1);


    // Media Questions (4)

    // Gerar Numero aliatorio
    let randomIndex6 = Math.floor(Math.random() * MedioNumbers.length);

// Receber Random numbero da lista
Room1Medio1 = MedioNumbers[randomIndex6];

// Remover do array
MedioNumbers.splice(randomIndex6, 1);

// Gerar Numero aliatorio
let randomIndex7 = Math.floor(Math.random() * MedioNumbers.length);

// Receber Random numbero da lista
Room1Medio2 = MedioNumbers[randomIndex7];

// Remover do array
MedioNumbers.splice(randomIndex7, 1);

// Gerar Numero aliatorio
let randomIndex8 = Math.floor(Math.random() * MedioNumbers.length);

// Receber Random numbero da lista
Room1Medio3 = MedioNumbers[randomIndex8];

// Remover do array
MedioNumbers.splice(randomIndex8, 1);

// Gerar Numero aliatorio
let randomIndex9 = Math.floor(Math.random() * MedioNumbers.length);

// Receber Random numbero da lista
Room1Medio4 = MedioNumbers[randomIndex9];

// Remover do array
MedioNumbers.splice(randomIndex9, 1);

//  Dificil Questions (6)
// Gerar Numero aliatorio
let randomIndex10 = Math.floor(Math.random() * DificilNumbers.length);

// Receber Random numbero da lista
Room1Dificil1 = DificilNumbers[randomIndex10];

// Remover do array
DificilNumbers.splice(randomIndex10, 1);

// Gerar Numero aliatorio
let randomIndex11 = Math.floor(Math.random() * DificilNumbers.length);

// Receber Random numbero da lista
Room1Dificil2 = DificilNumbers[randomIndex11];

// Remover do array
DificilNumbers.splice(randomIndex11, 1);
}


//EventListeners

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
            QuintaPergunta.style="grid-column: 4/7;grid-row:27/29;"
            SextaPergunta.style="grid-column: 8/11;grid-row:27/29;"
            SetimaPergunta.style="grid-column: 11/14;grid-row:27/29;"
            OitavaPergunta.style="grid-column: 28/33;grid-row:16/19;"
            NonaPergunta.style="grid-column: 33/38;grid-row:16/19;"
            DecimaPergunta.style="grid-column: 28/38;grid-row:20/27;"
            DecimaPriPregunta.style="grid-column: 28/38;grid-row:27/31;"
            Safe.style="grid-column: 19/23;grid-row: 25/32;"

            //Desafios
            PrimieraPergunta.addEventListener("click",function(event){
                event.preventDefault()
                if (Room1Medio1==1){
                    if(Medio_Primeira==0){
                        Modal_Medio_Primeiro.style.display = "block";
                        Modal_Medio_PrimeiraResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_PrimeiraInput").value
                            if (Resposta == 0.2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Primeira = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Primeira");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }else if(Room1Medio1==2){
                    if(Medio_Segundo==0){
                        Modal_Medio_Segundo.style.display = "block";
                        Modal_Medio_SegundoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_SegundoResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Segundo = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Segundo");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    Modal_Medio_Segundo.style.display = "block";
                }
                else if(Room1Medio1==3){
                    if(Medio_Terceiro==0){
                        Modal_Medio_Terceiro.style.display = "block";
                        Modal_Medio_TerceiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_TerceiroInput").value
                            if (Resposta == 7){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Terceiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Terceiro");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio1==4){
                    if(Medio_Quarta==0){
                        Modal_Medio_Quarta.style.display = "block";
                        Modal_Medio_QuartaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_QuartaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Quarta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Quarta");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    
                }
                else if(Room1Medio1==5){
                    if(Medio_Quinta==0){
                        Modal_Medio_Quinta.style.display = "block";
                        Modal_Medio_QuintaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_QuintaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Quinta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Quinta");
                        })
                        }else{
                            Closed_exe.play()
                        }
                }
                else if(Room1Medio1==6){
                       
                        if(Medio_Sexta==0){
                            Modal_Medio_Sexta.style.display = "block";
                            Modal_Medio_SextaResposta.addEventListener("click", function(event){
                                event.preventDefault()
                                var Resposta = document.getElementById("Modal_Medio_SextaInput").value
                                if (Resposta == 5){
                                    Dinheiro +=5000
                                    Dinheiro_txt.innerHTML= Dinheiro
                                    Medio_Sexta = 1
                                    win_sound.play()
                                }else{
                                    Lose_sound.play()
                                }
                                closeModal("Modal_Medio_Sexta");
                            })
                        }else{
                            Closed_exe.play()
                        }
                   
                }
                else if(Room1Medio1==7){
                    if(Medio_Setima==0){
                        Modal_Medio_Setima.style.display = "block";
                        Modal_Medio_SetimaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_SetimaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Setima = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Setima");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    
                }
                else if(Room1Medio1==8){
                    if(Medio_Oitavo==0){
                        Modal_Medio_Oitavo.style.display = "block";
                        Modal_Medio_OitavoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_OitavoResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Oitavo = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Oitavo");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    
                }
                else if(Room1Medio1==9){
                    if(Medio_Nona == 0){
                        Modal_Medio_Nona.style.display = "block";
                        Modal_Medio_NonaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_NonaInput").value
                            if (Resposta == 5){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Nona = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Nona");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio1==10){
                    if(Medio_Decima==0){
                        Modal_Medio_Decima.style.display = "block";
                        Modal_Medio_DecimaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_DecimaInput").value
                            if (Resposta == 6){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Decima = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Decima");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio1==11){
                    if(Medio_DecimaPrimeira==0){
                    Modal_Medio_DecimaPrimeira.style.display = "block";
                    Modal_Medio_DecimaPrimeiraResposta.addEventListener("click", function(event){
                        event.preventDefault()
                        var radios = document.getElementsByName("Modal_Medio_DecimaPrimeiraResposta");
                        var selectedValue;
            
                        for (var i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                selectedValue = radios[i].value;
                            break;
                        }
                        }
                        if(selectedValue == 2){
                            Dinheiro +=5000
                            Dinheiro_txt.innerHTML= Dinheiro
                            Medio_DecimaPrimeira = 1
                            win_sound.play()
                        }else{
                            Lose_sound.play()
                        }
                        closeModal("Modal_Medio_DecimaPrimeira");
                    })
                    }else{
                        Closed_exe.play()
                    }
                }
                else if(Room1Medio1==12){
                    if(Medio_DecimaSegunda == 0){
                        Modal_Medio_DecimaSegunda.style.display = "block";
                        Modal_Medio_DecimaSegundaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_DecimaSegundaInput").value
                            if (Resposta == 2*3.14*2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_DecimaSegunda = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_DecimaSegunda");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    

                }
                else if(Room1Medio1==13){
                    if(Medio_DecimaTerceiro==0){
                        Modal_Medio_DecimaTerceiro.style.display = "block";
                        Modal_Medio_DecimaTerceiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_DecimaTerceiroInput").value
                            if(Resposta == 2*3.14*4){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_DecimaTerceiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_DecimaTerceiro");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio1==14){
                    if(Medio_DecimaQuinta==0){
                    Modal_Medio_DecimaQuarto.style.display = "block";
                    Modal_Medio_DecimaQuartoResposta.addEventListener("click", function(event){
                        event.preventDefault()
                        var radios = document.getElementsByName("Modal_Medio_DecimaQuartoResposta");
                        var selectedValue;
            
                        for (var i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                selectedValue = radios[i].value;
                            break;
                        }
                        }
                        if(selectedValue == 3){
                            Dinheiro +=5000
                            Dinheiro_txt.innerHTML= Dinheiro
                            Medio_DecimaQuarto = 1
                            win_sound.play()
                        }else{
                            Lose_sound.play()
                        }
                        closeModal("Modal_Medio_DecimaQuarto");
                    })
                    }else{
                        Closed_exe.play()
                    }
                }
                else if(Room1Medio1==15){
                    if(Medio_DecimaQuinta==0){
                    Modal_Medio_DecimaQuinta.style.display = "block";
                    Modal_Medio_DecimaQuintaResposta.addEventListener("click", function(event){
                        event.preventDefault()
                        
                            var radios = document.getElementsByName("Modal_Medio_DecimaQuintaResposta");
                        var selectedValue;
            
                        for (var i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                selectedValue = radios[i].value;
                            break;
                        }
                        }
                        if(selectedValue == 1){
                            Dinheiro +=5000
                            Dinheiro_txt.innerHTML= Dinheiro
                            Medio_DecimaQuinta = 1
                            win_sound.play()
                        }else{
                            Lose_sound.play()
                        }
                        closeModal("Modal_Medio_DecimaQuinta");       
                        })    
                    }else{
                        Closed_exe.play()
                    }
                }
            })
            SegundaPergunta.addEventListener("click",function(event){
                event.preventDefault()
                if (Room1Medio2==1){
                    if(Medio_Primeira==0){
                        Modal_Medio_Primeiro.style.display = "block";
                        Modal_Medio_PrimeiraResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_PrimeiraInput").value
                            if (Resposta == 0.2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Primeira = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Primeira");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }else if(Room1Medio2==2){
                    if(Medio_Segundo==0){
                        Modal_Medio_Segundo.style.display = "block";
                        Modal_Medio_SegundoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_SegundoResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Segundo = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Segundo");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    Modal_Medio_Segundo.style.display = "block";
                }
                else if(Room1Medio2==3){
                    if(Medio_Terceiro==0){
                        Modal_Medio_Terceiro.style.display = "block";
                        Modal_Medio_TerceiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_TerceiroInput").value
                            if (Resposta == 7){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Terceiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Terceiro");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio2==4){
                    if(Medio_Quarta==0){
                        Modal_Medio_Quarta.style.display = "block";
                        Modal_Medio_QuartaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_QuartaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Quarta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Quarta");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    
                }
                else if(Room1Medio2==5){
                    if(Medio_Quinta==0){
                        Modal_Medio_Quinta.style.display = "block";
                        Modal_Medio_QuintaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_QuintaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Quinta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Quinta");
                        })
                        }else{
                            Closed_exe.play()
                        }
                }
                else if(Room1Medio2==6){
                       
                        if(Medio_Sexta==0){
                            Modal_Medio_Sexta.style.display = "block";
                            Modal_Medio_SextaResposta.addEventListener("click", function(event){
                                event.preventDefault()
                                var Resposta = document.getElementById("Modal_Medio_SextaInput").value
                                if (Resposta == 5){
                                    Dinheiro +=5000
                                    Dinheiro_txt.innerHTML= Dinheiro
                                    Medio_Sexta = 1
                                    win_sound.play()
                                }else{
                                    Lose_sound.play()
                                }
                                closeModal("Modal_Medio_Sexta");
                            })
                        }else{
                            Closed_exe.play()
                        }
                   
                }
                else if(Room1Medio2==7){
                    if(Medio_Setima==0){
                        Modal_Medio_Setima.style.display = "block";
                        Modal_Medio_SetimaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_SetimaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Setima = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Setima");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    
                }
                else if(Room1Medio2==8){
                    if(Medio_Oitavo==0){
                        Modal_Medio_Oitavo.style.display = "block";
                        Modal_Medio_OitavoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_OitavoResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Oitavo = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Oitavo");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    
                }
                else if(Room1Medio2==9){
                    if(Medio_Nona == 0){
                        Modal_Medio_Nona.style.display = "block";
                        Modal_Medio_NonaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_NonaInput").value
                            if (Resposta == 5){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Nona = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Nona");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio2==10){
                    if(Medio_Decima==0){
                        Modal_Medio_Decima.style.display = "block";
                        Modal_Medio_DecimaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_DecimaInput").value
                            if (Resposta == 6){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Decima = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Decima");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio2==11){
                    if(Medio_DecimaPrimeira==0){
                    Modal_Medio_DecimaPrimeira.style.display = "block";
                    Modal_Medio_DecimaPrimeiraResposta.addEventListener("click", function(event){
                        event.preventDefault()
                        var radios = document.getElementsByName("Modal_Medio_DecimaPrimeiraResposta");
                        var selectedValue;
            
                        for (var i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                selectedValue = radios[i].value;
                            break;
                        }
                        }
                        if(selectedValue == 2){
                            Dinheiro +=5000
                            Dinheiro_txt.innerHTML= Dinheiro
                            Medio_DecimaPrimeira = 1
                            win_sound.play()
                        }else{
                            Lose_sound.play()
                        }
                        closeModal("Modal_Medio_DecimaPrimeira");
                    })
                    }else{
                        Closed_exe.play()
                    }
                }
                else if(Room1Medio2==12){
                    if(Medio_DecimaSegunda == 0){
                        Modal_Medio_DecimaSegunda.style.display = "block";
                        Modal_Medio_DecimaSegundaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_DecimaSegundaInput").value
                            if (Resposta == 2*3.14*2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_DecimaSegunda = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_DecimaSegunda");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    

                }
                else if(Room1Medio2==13){
                    if(Medio_DecimaTerceiro==0){
                        Modal_Medio_DecimaTerceiro.style.display = "block";
                        Modal_Medio_DecimaTerceiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_DecimaTerceiroInput").value
                            if(Resposta == 2*3.14*4){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_DecimaTerceiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_DecimaTerceiro");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio2==14){
                    if(Medio_DecimaQuinta==0){
                    Modal_Medio_DecimaQuarto.style.display = "block";
                    Modal_Medio_DecimaQuartoResposta.addEventListener("click", function(event){
                        event.preventDefault()
                        var radios = document.getElementsByName("Modal_Medio_DecimaQuartoResposta");
                        var selectedValue;
            
                        for (var i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                selectedValue = radios[i].value;
                            break;
                        }
                        }
                        if(selectedValue == 3){
                            Dinheiro +=5000
                            Dinheiro_txt.innerHTML= Dinheiro
                            Medio_DecimaQuarto = 1
                            win_sound.play()
                        }else{
                            Lose_sound.play()
                        }
                        closeModal("Modal_Medio_DecimaQuarto");
                    })
                    }else{
                        Closed_exe.play()
                    }
                }
                else if(Room1Medio2==15){
                    if(Medio_DecimaQuinta==0){
                    Modal_Medio_DecimaQuinta.style.display = "block";
                    Modal_Medio_DecimaQuintaResposta.addEventListener("click", function(event){
                        event.preventDefault()
                        
                            var radios = document.getElementsByName("Modal_Medio_DecimaQuintaResposta");
                        var selectedValue;
            
                        for (var i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                selectedValue = radios[i].value;
                            break;
                        }
                        }
                        if(selectedValue == 1){
                            Dinheiro +=5000
                            Dinheiro_txt.innerHTML= Dinheiro
                            Medio_DecimaQuinta = 1
                            win_sound.play()
                        }else{
                            Lose_sound.play()
                        }
                        closeModal("Modal_Medio_DecimaQuinta");       
                        })    
                    }else{
                        Closed_exe.play()
                    }
                }
            })
            TerceiraPergunta.addEventListener("click",function(event){
                event.preventDefault()
                event.preventDefault()
                if (Room1Medio3==1){
                    if(Medio_Primeira==0){
                        Modal_Medio_Primeiro.style.display = "block";
                        Modal_Medio_PrimeiraResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_PrimeiraInput").value
                            if (Resposta == 0.2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Primeira = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Primeira");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }else if(Room1Medio3==2){
                    if(Medio_Segundo==0){
                        Modal_Medio_Segundo.style.display = "block";
                        Modal_Medio_SegundoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_SegundoResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Segundo = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Segundo");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    Modal_Medio_Segundo.style.display = "block";
                }
                else if(Room1Medio3==3){
                    if(Medio_Terceiro==0){
                        Modal_Medio_Terceiro.style.display = "block";
                        Modal_Medio_TerceiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_TerceiroInput").value
                            if (Resposta == 7){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Terceiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Terceiro");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio3==4){
                    if(Medio_Quarta==0){
                        Modal_Medio_Quarta.style.display = "block";
                        Modal_Medio_QuartaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_QuartaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Quarta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Quarta");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    
                }
                else if(Room1Medio3==5){
                    if(Medio_Quinta==0){
                        Modal_Medio_Quinta.style.display = "block";
                        Modal_Medio_QuintaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_QuintaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Quinta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Quinta");
                        })
                        }else{
                            Closed_exe.play()
                        }
                }
                else if(Room1Medio3==6){
                       
                        if(Medio_Sexta==0){
                            Modal_Medio_Sexta.style.display = "block";
                            Modal_Medio_SextaResposta.addEventListener("click", function(event){
                                event.preventDefault()
                                var Resposta = document.getElementById("Modal_Medio_SextaInput").value
                                if (Resposta == 5){
                                    Dinheiro +=5000
                                    Dinheiro_txt.innerHTML= Dinheiro
                                    Medio_Sexta = 1
                                    win_sound.play()
                                }else{
                                    Lose_sound.play()
                                }
                                closeModal("Modal_Medio_Sexta");
                            })
                        }else{
                            Closed_exe.play()
                        }
                   
                }
                else if(Room1Medio3==7){
                    if(Medio_Setima==0){
                        Modal_Medio_Setima.style.display = "block";
                        Modal_Medio_SetimaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_SetimaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Setima = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Setima");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    
                }
                else if(Room1Medio3==8){
                    if(Medio_Oitavo==0){
                        Modal_Medio_Oitavo.style.display = "block";
                        Modal_Medio_OitavoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var radios = document.getElementsByName("Modal_Medio_OitavoResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Oitavo = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Oitavo");
                        })
                        }else{
                            Closed_exe.play()
                        }
                    
                }
                else if(Room1Medio3==9){
                    if(Medio_Nona == 0){
                        Modal_Medio_Nona.style.display = "block";
                        Modal_Medio_NonaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_NonaInput").value
                            if (Resposta == 5){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Nona = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Nona");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio3==10){
                    if(Medio_Decima==0){
                        Modal_Medio_Decima.style.display = "block";
                        Modal_Medio_DecimaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_DecimaInput").value
                            if (Resposta == 6){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_Decima = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_Decima");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio3==11){
                    if(Medio_DecimaPrimeira==0){
                    Modal_Medio_DecimaPrimeira.style.display = "block";
                    Modal_Medio_DecimaPrimeiraResposta.addEventListener("click", function(event){
                        event.preventDefault()
                        var radios = document.getElementsByName("Modal_Medio_DecimaPrimeiraResposta");
                        var selectedValue;
            
                        for (var i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                selectedValue = radios[i].value;
                            break;
                        }
                        }
                        if(selectedValue == 2){
                            Dinheiro +=5000
                            Dinheiro_txt.innerHTML= Dinheiro
                            Medio_DecimaPrimeira = 1
                            win_sound.play()
                        }else{
                            Lose_sound.play()
                        }
                        closeModal("Modal_Medio_DecimaPrimeira");
                    })
                    }else{
                        Closed_exe.play()
                    }
                }
                else if(Room1Medio3==12){
                    if(Medio_DecimaSegunda == 0){
                        Modal_Medio_DecimaSegunda.style.display = "block";
                        Modal_Medio_DecimaSegundaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_DecimaSegundaInput").value
                            if (Resposta == 2*3.14*2){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_DecimaSegunda = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_DecimaSegunda");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    

                }
                else if(Room1Medio3==13){
                    if(Medio_DecimaTerceiro==0){
                        Modal_Medio_DecimaTerceiro.style.display = "block";
                        Modal_Medio_DecimaTerceiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Medio_DecimaTerceiroInput").value
                            if(Resposta == 2*3.14*4){
                                Dinheiro +=5000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Medio_DecimaTerceiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Medio_DecimaTerceiro");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
                else if(Room1Medio3==14){
                    if(Medio_DecimaQuinta==0){
                    Modal_Medio_DecimaQuarto.style.display = "block";
                    Modal_Medio_DecimaQuartoResposta.addEventListener("click", function(event){
                        event.preventDefault()
                        var radios = document.getElementsByName("Modal_Medio_DecimaQuartoResposta");
                        var selectedValue;
            
                        for (var i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                selectedValue = radios[i].value;
                            break;
                        }
                        }
                        if(selectedValue == 3){
                            Dinheiro +=5000
                            Dinheiro_txt.innerHTML= Dinheiro
                            Medio_DecimaQuarto = 1
                            win_sound.play()
                        }else{
                            Lose_sound.play()
                        }
                        closeModal("Modal_Medio_DecimaQuarto");
                    })
                    }else{
                        Closed_exe.play()
                    }
                }
                else if(Room1Medio3==15){
                    if(Medio_DecimaQuinta==0){
                    Modal_Medio_DecimaQuinta.style.display = "block";
                    Modal_Medio_DecimaQuintaResposta.addEventListener("click", function(event){
                        event.preventDefault()
                        
                            var radios = document.getElementsByName("Modal_Medio_DecimaQuintaResposta");
                        var selectedValue;
            
                        for (var i = 0; i < radios.length; i++) {
                            if (radios[i].checked) {
                                selectedValue = radios[i].value;
                            break;
                        }
                        }
                        if(selectedValue == 1){
                            Dinheiro +=5000
                            Dinheiro_txt.innerHTML= Dinheiro
                            Medio_DecimaQuinta = 1
                            win_sound.play()
                        }else{
                            Lose_sound.play()
                        }
                        closeModal("Modal_Medio_DecimaQuinta");       
                        })    
                    }else{
                        Closed_exe.play()
                    }
                }
            })

            QuartaPergunta.addEventListener("click", function(event){
                event.preventDefault()
                if(Room1Dificil1==1){
                    if(Dificil_Primeiro==0){
                        Modal_Dificil_Primeiro.style.display = "block";
                        Modal_Dificil_PrimeiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Dificil_PrimeiroInput").value
                            if(Resposta ==20){
                                Dinheiro +=10000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Dificil_Primeiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Dificil_Primeiro");
                        })
                    }else{
                        Closed_exe.play()
                    }
                }else if(Room1Dificil1==2){
                    if(Dificil_Segundo==0){
                        Modal_Dificil_Segundo.style.display = "block";
                        Modal_Dificil_SegundoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                            var radios = document.getElementsByName("Modal_Dificil_SegundoResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=10000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Dificil_Segundo = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Dificil_Segundo");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                }else if(Room1Dificil1==3){
                    if(Dificil_Terceiro==0){
                        Modal_Dificil_Terceiro.style.display = "block";
                        Modal_Dificil_TerceiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Dificil_TerceiroInput").value
                            if(Resposta ==4){
                                Dinheiro +=10000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Dificil_Terceiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Dificil_Terceiro");
                        })
                    }else{
                        Closed_exe.play()
                    }
                }else if(Room1Dificil1==4){
                    if(Dificil_Quarta==0){
                        Modal_Dificil_Quarta.style.display = "block";
                        Modal_Dificil_QuartaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Dificil_QuartaInput").value
                            if(Resposta ==17){
                                Dinheiro +=10000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Dificil_Quarta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Dificil_Quarta");
                        })
                    }else{
                        Closed_exe.play()
                    }
                }else if(Room1Dificil1==5){
                    if(Dificil_Quinta==0){
                        Modal_Dificil_Quinta.style.display = "block";
                        Modal_Dificil_QuintaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Dificil_QuintaInput").value
                            if(Resposta == 6.28*4){
                                Dinheiro +=10000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Dificil_Quinta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Dificil_Quinta");
                        })
                    }else{
                        Closed_exe.play()
                    }
                }else if(Room1Dificil1==6){
                    if(Dificil_Sexta==0){
                        Modal_Dificil_Sexta.style.display = "block";
                        Modal_Dificil_SextaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Dificil_SextaInput").value
                            if(Resposta == 25){
                                Dinheiro +=10000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Dificil_Sexta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Dificil_Sexta");
                        })
                    }else{
                        Closed_exe.play()
                    }
                    
                }
            })

            QuintaPergunta.addEventListener("click", function(event){
                event.preventDefault()
                if(Room1Facil1==1){
                    if(Facil_Primeiro == 0){
                        Modal_Facil_Primeiro.style.display = "block";
                        Modal_Facil_PrimeiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_PrimeiroResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Primeiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Primeiro");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                }else if(Room1Facil1==2){
                    if(Facil_Segundo == 0){
                        Modal_Facil_Segundo.style.display = "block";
                        Modal_Facil_SegundoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_SegundoResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Segundo = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Segundo");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                }else if(Room1Facil1==3){
                    if(Facil_Terceiro == 0){
                        Modal_Facil_Terceiro.style.display = "block";
                        Modal_Facil_TerceiroResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_TerceiroResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 3){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Terceiro = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Terceiro");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                }else if(Room1Facil1==4){
                    if(Facil_Quarto == 0){
                        Modal_Facil_Quarto.style.display = "block";
                        Modal_Facil_QuartoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_QuatroResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Quarto = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Quarto");       
                            })    
                        }else{
                            Closed_exe.play()
                        }

                }else if(Room1Facil1==5){
                    if(Facil_Quinta == 0){
                        Modal_Facil_Quinta.style.display = "block";
                        Modal_Facil_QuintaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_QuintaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Quinta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Quinta");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                }else if(Room1Facil1==6){
                    if(Facil_Sexto == 0){
                        Modal_Facil_Sexto.style.display = "block";
                        Modal_Facil_SextoResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_SextoResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Sexto = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Sexto");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                }else if(Room1Facil1==7){
                    if(Facil_Setima == 0){
                        Modal_Facil_Setima.style.display = "block";
                        Modal_Facil_SetimaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_SetimaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 3){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Setima = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Setima");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                }else if(Room1Facil1==8){
                    if(Facil_Oitava==0){
                        Modal_Facil_Oitava.style.display = "block";
                        Modal_Facil_OitavaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Facil_OitavaInput").value
                            if(Resposta == 4){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Oitava = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Oitava");
                        })
                    }else{
                        Closed_exe.play()
                    }
                }else if(Room1Facil1==9){
                    if(Facil_Nona==0){
                        Modal_Facil_Nona.style.display = "block";
                        Modal_Facil_NonaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Facil_NonaInput").value
                            if(Resposta == 4){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Nona = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Nona");
                        })
                    }else{
                        Closed_exe.play()
                    }
                }else if(Room1Facil1==10){
                    if(Facil_Decima==0){
                        Modal_Facil_Decima.style.display = "block";
                        Modal_Facil_DecimaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Facil_DecimaInput").value
                            if(Resposta == 3){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_Decima = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_Decima");
                        })
                    }else{
                        Closed_exe.play()
                    }
                }else if(Room1Facil1==11){
                    if(Facil_DecimaPrimeira==0){
                        Modal_Facil_DecimaPrimeira.style.display = "block";
                        Modal_Facil_DecimaPrimeiraResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            var Resposta = document.getElementById("Modal_Facil_DecimaPrimeiraInput").value
                            if(Resposta == 2){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_DecimaPrimeira = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_DecimaPrimeira");
                        })
                    }else{
                        Closed_exe.play()
                    }
                }else if(Room1Facil1==12){
                    if(Facil_DecimaSegunda == 0){
                        Modal_Facil_DecimaSegunda.style.display = "block";
                        Modal_Facil_DecimaSegundaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_DecimaSegundaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 2){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_DecimaSegunda = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_DecimaSegunda");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                    
                }else if(Room1Facil1==13){
                    
                    if(Facil_DecimaTerceira == 0){
                        Modal_Facil_DecimaTerceira.style.display = "block";
                        Modal_Facil_DecimaTerceiraResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_DecimaTerceiraResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 3){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_DecimaTerceira = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_DecimaTerceira");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                }else if(Room1Facil1==14){                    
                    if(Facil_DecimaQuarta == 0){
                        Modal_Facil_DecimaQuarta.style.display = "block";
                        Modal_Facil_DecimaQuartaResposta.addEventListener("click", function(event){
                            event.preventDefault()
                            
                                var radios = document.getElementsByName("Modal_Facil_DecimaQuartaResposta");
                            var selectedValue;
                
                            for (var i = 0; i < radios.length; i++) {
                                if (radios[i].checked) {
                                    selectedValue = radios[i].value;
                                break;
                            }
                            }
                            if(selectedValue == 1){
                                Dinheiro +=1000
                                Dinheiro_txt.innerHTML= Dinheiro
                                Facil_DecimaQuarta = 1
                                win_sound.play()
                            }else{
                                Lose_sound.play()
                            }
                            closeModal("Modal_Facil_DecimaQuarta");       
                            })    
                        }else{
                            Closed_exe.play()
                        }
                    }else if(Room1Facil1 == 15){
                        if(Facil_DecimaQuinta==0){
                            Modal_Facil_DecimaQuinta.style.display = "block";
                            Modal_Facil_DecimaQuintaResposta.addEventListener("click", function(event){
                                event.preventDefault()
                                var radios = document.getElementsByName("Modal_Facil_DecimaQuintaResposta");
                                var selectedValue;
                                for (var i = 0; i < radios.length; i++) {
                                    if (radios[i].checked) {
                                        selectedValue = radios[i].value;
                                    break;
                                }
                                }
                                if(selectedValue == 2){
                                    Dinheiro +=1000
                                    Dinheiro_txt.innerHTML= Dinheiro
                                    Facil_DecimaQuinta = 1
                                    win_sound.play()
                                }else{
                                    Lose_sound.play()
                                }
                                closeModal("Modal_Facil_DecimaQuinta");       
                            })
                        }else{
                            Closed_exe.play()
                        }
                    }
                    
            })
            Safe.addEventListener("click",function(event){
                event.preventDefault()
                Modal_Desafio_Final.style.display = "block";
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