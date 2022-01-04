console.log("script init");
function logParties(response) {
  response.forEach((element) => {
    const table = document.querySelector(".table");
    const row = document.createElement("tr");
    row.innerHTML = element.partyId;
    table.appendChild(row);
    const column = document.createElement("td");
    row.appendChild(column);
    column.textContent = element.partyName;
  });
}

//get all parties
const parties = fetch("https://juan-nicolai.herokuapp.com/api/party")
  .then((Response) => Response.json())
  .then((response) => {
    console.log(response);
    logParties(response);
  });
