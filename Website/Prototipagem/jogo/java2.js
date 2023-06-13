let safe = document.getElementById("safe");
let FirstScene = document.getElementById("FirstScene")
let one1 = document.getElementById("one1")
let one2 = document.getElementById("one2")
let one3 = document.getElementById("one3")
let one4 = document.getElementById("one4")

let two1 = document.getElementById("two1")
let two2 = document.getElementById("two2")
let two3 = document.getElementById("two3")
let two4 = document.getElementById("two4")

let tree1 = document.getElementById("tree1")
let tree2 = document.getElementById("tree2")
let tree3 = document.getElementById("tree3")
let tree4 = document.getElementById("tree4")

let four1 = document.getElementById("four1")
let four2 = document.getElementById("four2")
let four3= document.getElementById("four3")
let four4 = document.getElementById("four4")

let Goback_2 = document.getElementById("Goback_2")

let goback_value = 0;

safe.addEventListener("click", function(event){
    event.preventDefault()
    FirstScene.src="img/FirstBackground-07.png"
    one1.style="grid-column: 37/41;grid-row:36/40"
    one2.style="grid-column: 37/41;grid-row:36/40"
    one3.style="grid-column: 37/41;grid-row:36/40"
    one4.style="grid-column: 37/41;grid-row:36/40"
    two1.style="grid-column: 37/41;grid-row:36/40"
    two2.style="grid-column: 37/41;grid-row:36/40"
    two3.style="grid-column: 37/41;grid-row:36/40"
    two4.style="grid-column: 37/41;grid-row:36/40"
    tree1.style="grid-column: 37/41;grid-row:36/40"
    tree2.style="grid-column: 37/41;grid-row:36/40"
    tree3.style="grid-column: 37/41;grid-row:36/40"
    tree4.style="grid-column: 37/41;grid-row:36/40"
    four1.style="grid-column: 37/41;grid-row:36/40"
    four2.style="grid-column: 37/41;grid-row:36/40"
    four3.style="grid-column: 37/41;grid-row:36/40"
    four4.style="grid-column: 37/41;grid-row:36/40"
    safe.style="grid-column: 37/41;grid-row:36/40"
    Goback_2.style="grid-column: 37/41;grid-row:36/40;"
    goback_value = 1
})
Goback_2.addEventListener("click", function(event){
    event.preventDefault()
    if(goback_value == 1){
        window.location.href = "index.html";
    }
})
