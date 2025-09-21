function changeRating(value){
    for(var s = 1; s <= 5; s++){
        if(s <= value){
            var box = document.getElementById(`innerDiv${s}`)

            box?.style.backgroundColor = "black";
        }else{
            var box = document.getElementById(`innerDiv${s}`)

            box?.style.backgroundColor = "white";
        }
    }
}

function clearRating(){
    for(var s = 1; s <= 5; s++){
        var box = document.getElementById(`innerDiv${s}`);
        box?.style.backgroundColor = "white";
    }
}