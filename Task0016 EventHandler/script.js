//dit is deel I van de opdracht
const alertButton = document.querySelector("#mybutton");
alertButton.addEventListener("click", function(){
    alert("button clicked!!");
    }
);

//dit is deel II van de opdracht zonder toggle:
const bodyVar=document.querySelector("body");
const colorButton = document.querySelector("#mybutton2");

/* colorButton.addEventListener("click", function changeColor(){
    bodyVar.classList.add("red-background");
    }
); */

//dit is deel III van de opdracht met toggle
colorButton.addEventListener("click", function toggleColor(){
    bodyVar.classList.toggle("red-background");
    }
);
