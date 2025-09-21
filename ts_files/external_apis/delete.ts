async function deleteRow(){
    var result = await fetch("https://api.restful-api.dev/objects/5", {
        method: "DELETE",
    });

    var jsonResponse = await result.json();

    var paragraphElement = document.createElement("p");

    paragraphElement.innerHTML = jsonResponse["message"];

    document.body.appendChild(paragraphElement);
}

deleteRow();