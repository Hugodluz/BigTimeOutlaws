
    // Retrieve leaderboard data from storage
    const leaderboardData = JSON.parse(localStorage.getItem("Leaderboard")) || [];

    // Sort the leaderboard data by score in descending order
    leaderboardData.sort((a, b) => b.Pontos - a.Pontos);

    // Populate leaderboard table with data
    const leaderboardTable = document.getElementById("leaderboard");
    leaderboardData.forEach((player, index) => {
      const rank = index + 1;
      const newRow = leaderboardTable.insertRow();
      newRow.innerHTML = `
        <td  class="Th_TD">${rank}</td>
        <td class ="Th_TD">${player.Name}</td>
        <td class = "Th_TD">${player.Pontos}$$</td>
      `;
    });



    // Save data to local storage
    function saveDataToStorage() {
      localStorage.setItem("leaderboardData", JSON.stringify(leaderboardData));
    }