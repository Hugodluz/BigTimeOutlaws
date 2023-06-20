let AdminInput = document.getElementById("Timer_question");
let Timer_submit = document.getElementById("Timer_submit");

Timer_submit.addEventListener("click", function(event){
    event.preventDefault();
    sessionStorage.Time = AdminInput.value
})
// Retrieve leaderboard data from storage
const leaderboardData = JSON.parse(localStorage.getItem("users")) || [];

// Populate leaderboard table with data
const leaderboardTable = document.getElementById("leaderboard");
leaderboardData.forEach((player, index) => {
  const newRow = leaderboardTable.insertRow();
  newRow.innerHTML = `
    <td>${index + 1}</td>
    <td>${player.username}</td>
    <td><button onclick="deletePlayer(this)">Delete</button></td>
  `;
});

// Delete a player row
function deletePlayer(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
  saveDataToStorage(); // Save updated data to storage
}

// Add a new player row
function addPlayer(event) {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const scoreInput = document.getElementById("scoreInput");

  const player = {
    name: nameInput.value,
    score: scoreInput.value
  };

  leaderboardData.push(player);
  const rank = leaderboardData.length;
  const newRow = leaderboardTable.insertRow();
  newRow.innerHTML = `
    <td>${rank}</td>
    <td>${player.name}</td>
    <td>${player.score} $$</td>
    <td><button onclick="deletePlayer(this)">Delete</button></td>
  `;

  nameInput.value = "";
  scoreInput.value = "";

  saveDataToStorage(); // Save updated data to storage
}

// Save data to local storage
function saveDataToStorage() {
  localStorage.setItem("leaderboardData", JSON.stringify(leaderboardData));
}