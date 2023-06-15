let PrimeiroRet=document.getElementById("PrimeiraRetangulo");
let SegundoRet=document.getElementById("SegundaRetangulo");
let TerceiroRet=document.getElementById("TerceirRetangulo");
let QuartaRet=document.getElementById("QuartaRetangulo");
let QuartaRet_2=document.getElementById("QuartaRetangulo_2");
let FirstScene= document.getElementById("FirstScene")
let ChangeScene = document.getElementById("ChangeScene")

let value_change = 1;
let vault_Value = 0;
let goBack = document.getElementById("Goback")
let goBack_2 = document.getElementById("Goback_2")


PrimeiroRet.addEventListener("click", function(event){
    event.preventDefault();
    FirstScene.src="img/FirstBackground-03.png";
    PrimeiroRet.style="grid-column: 20/20;grid-row:37/37;"
    SegundoRet.style="grid-column: 20/20;grid-row:37/37;"
    TerceiroRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet_2.style="grid-column: 20/20;grid-row:37/37;"
})
SegundoRet.addEventListener("click",function(event){
    event.preventDefault()
    FirstScene.src="img/FirstBackground-04.png";
    PrimeiroRet.style="grid-column: 20/20;grid-row:37/37;"
    SegundoRet.style="grid-column: 20/20;grid-row:37/37;"
    TerceiroRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet_2.style="grid-column: 20/20;grid-row:37/37;"
})
TerceiroRet.addEventListener("click",function(event){
    event.preventDefault()
    FirstScene.src="img/FirstBackground-05.png";
    PrimeiroRet.style="grid-column: 20/20;grid-row:37/37;"
    SegundoRet.style="grid-column: 20/20;grid-row:37/37;"
    TerceiroRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet.style="grid-column: 20/20;grid-row:37/37;"
    QuartaRet_2.style="grid-column: 20/20;grid-row:37/37;"
})
QuartaRet.addEventListener("click",function(event){
    if(vault_Value == 0){
        event.preventDefault()
        FirstScene.src="img/FirstBackground-06.png";
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
        FirstScene.src="img/FirstBackground-06.png";
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
    if (codigo == (2*3.14*3)){
        FirstScene.src="img/FirstBackground-08.png"
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
        alert("*safe sound* WRONG")
    }


})
goBack.addEventListener("click", function(event){
    if(value_change == 1){
        event.preventDefault()
        FirstScene.src="img/FirstBackground-09.png"
        PrimeiroRet.style="grid-column: 37/41;grid-row:36/40;"
        SegundoRet.style="grid-column: 37/41;grid-row:36/40;"
        TerceiroRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet.style="grid-column: 37/41;grid-row:36/40;"
        QuartaRet_2.style="grid-column: 37/41;grid-row:36/40;"
        ChangeScene.style="grid-column: 37/41;grid-row:36/40;"
        goBack.style="grid-column: 37/41;grid-row:36/40;"  
        value_change +=1
    }else if(value_change == 2){
        event.preventDefault()
        FirstScene.src="img/FirstBackground-01.png"
        PrimeiroRet.style="grid-column: 1/14;grid-row: 22/35;"
        SegundoRet.style="grid-column: 25/51;grid-row: 22/35;"
        TerceiroRet.style="grid-column: 28/36; grid-row: 7/15;"
        QuartaRet.style="grid-column: 19/23;grid-row:10/14;"
        QuartaRet_2.style="grid-column: 20/22;grid-row:9/15;"
        ChangeScene.style="grid-column: 20/20;grid-row:37/37;"
        goBack.style="grid-column: 17/25;grid-row:37/40;"
    }else if(value_change == 3){
        event.preventDefault()
        window.location.href = "index_2.html";
    }
   
})
goBack_2.addEventListener("click", function(event){
    event.preventDefault()
    FirstScene.src="img/FirstBackground-01.png"
    PrimeiroRet.style="grid-column: 1/14;grid-row: 22/35;"
    SegundoRet.style="grid-column: 25/51;grid-row: 22/35;"
    TerceiroRet.style="grid-column: 28/36; grid-row: 7/15;"
    QuartaRet.style="grid-column: 19/23;grid-row:10/14;"
    QuartaRet_2.style="grid-column: 20/22;grid-row:9/15;"
    ChangeScene.style="grid-column: 20/20;grid-row:37/37;"
    goBack.style="grid-column: 17/25;grid-row:37/40;"
})
