var block = document.getElementById("block");

let x = 0;
let y = 0;
let step = 100;

document.addEventListener("keydown", function(event){
    switch(event.key){
        case "ArrowUp": 
            y -= step;
            break;
        
        case "ArrowDown":
            y += step;
            break;
        
        case "ArrowLeft":
            x -= step;
            break;

        case "ArrowRight":
            x += step;
            break;
    }

    block?.style.transform = `translate(${x}px, ${y}px)`;
});