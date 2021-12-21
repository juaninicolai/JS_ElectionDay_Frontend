console.log("script init");

function logCandidates(response) {
  response.forEach((candidate) => {
    const table = document.querySelector(".table");
    const row = document.createElement("tr");
    row.innerHTML = candidate.candidateId;
    table.appendChild(row);
    const column = document.createElement("td");
    row.appendChild(column);
    column.textContent = candidate.candidateName;

    //edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const editCol = document.createElement("td");
    editCol.appendChild(editButton);
    row.appendChild(editCol);
    editButton.addEventListener("click", function () {
      let candidateId = candidate.candidateId;
      location.href = "/pages/candidates/edit.html";
    });

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    const deleteCol = document.createElement("td");
    deleteCol.appendChild(deleteButton);
    row.appendChild(deleteCol);
    deleteButton.addEventListener("click", async function () {
      const deleteResponse = await fetch(
        `https://juan-nicolai.herokuapp.com/api/candidate/${candidate.candidateId}`,
        { method: "delete" }
      );
      location.reload();
    });
  });
}

//get all candidates
const candidates = fetch("https://juan-nicolai.herokuapp.com/api/candidate")
  .then((Response) => Response.json())
  .then((response) => {
    console.log(response);
    logCandidates(response);
  });
