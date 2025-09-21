async function submitForm(event){
        event.preventDefault();

    var form = document.forms["createDevice"];

    var deviceName = (form["deviceName"] as HTMLInputElement).value;
    var deviceYear = (form["deviceYear"] as HTMLInputElement).value;
    var devicePrice = (form["devicePrice"] as HTMLInputElement).value;
    var cpuModel = (form["cpuModel"] as HTMLInputElement).value;
    var diskSize = (form["diskSize"] as HTMLInputElement).value;

    var apiPayload = {
        name: deviceName,
        data: {
            "year": deviceYear,
            "price": devicePrice,
            "CPU Model": cpuModel,
            'Hard disk size': diskSize
        }
    }

    var response = await fetch("https://api.restful-api.dev/objects",{
        "method": "POST",
        'body': JSON.stringify(apiPayload),
        "headers":{
            "Content-Type" : "application/json",
        }
    });

    var responseBlock = document.getElementById("response");

    if(responseBlock){
        responseBlock.textContent = JSON.stringify(await response.json(), null, 4);
    }
}