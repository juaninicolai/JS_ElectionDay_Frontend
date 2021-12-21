console.log("script init");
console.log("it's necessary to add manually candidate Id");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let postCandidate = "https://juan-nicolai.herokuapp.com/api/candidate";

  fetch(postCandidate, {
    method: "PUT",
    body: JSON.stringify({
      candidateId: document.querySelector("#cid").value,
      candidateName: document.querySelector("#cname").value,
      partyId: document.querySelector("#partyId").value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((Response) => Response.json())
    .then(console.log("I am here"));
  window.alert("Candidate successfully updated");
  location.reload();
});
