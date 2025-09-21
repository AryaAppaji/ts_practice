async function getRow() {
    var result = await fetch("https://api.restful-api.dev/objects/7");
    var jsonResponse = await result.json();

    var idElement = document.createElement("p");
    var nameElement = document.createElement("p");
    var specsElement = document.createElement("p");

    idElement.innerHTML = `ID: ${jsonResponse["id"]}`;
    nameElement.innerHTML = `Name: ${jsonResponse["name"]}`;
    specsElement.innerHTML = `Specs: ${JSON.stringify(jsonResponse["data"])}`;

    document.body.appendChild(idElement);
    document.body.appendChild(nameElement);
    document.body.appendChild(specsElement);
}

getRow();
