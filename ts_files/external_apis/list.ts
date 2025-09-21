async function getList() {
    const result = await fetch("https://api.restful-api.dev/objects");
    const data = await result.json();   // parse JSON properly
    return data;
}

async function renderTable() {
    const items = await getList();  // wait for data
    const tableBodyElement = document.getElementById("tableBody");

    for (const item of items) {
        const trElement = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = item["id"];

        const nameCell = document.createElement("td");
        nameCell.textContent = item["name"];

        const specsCell = document.createElement("td");
        specsCell.textContent = item["data"] ? JSON.stringify(item["data"]) : "-";

        trElement.appendChild(idCell);
        trElement.appendChild(nameCell);
        trElement.appendChild(specsCell);

        tableBodyElement?.appendChild(trElement);
    }
}

// run after DOM is loaded
renderTable();
