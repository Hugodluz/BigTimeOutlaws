
function IniciarData() {
  // Leaderboard
  if (!localStorage.Leaderboard) {
    const Leaderboard = [
      {
        Name: "Renato",
        Pontos: 20000,
      },
      {
        Name: "Maria",
        Pontos: 25000,
      },
      {
        Name: "Jose",
        Pontos: 16000,
      },
      {
        Name: "Douglas",
        Pontos: 30000,
      },
      {
        Name: "Floripes",
        Pontos: 1000,
      },
    ];
    localStorage.setItem("Leaderboard", JSON.stringify(Leaderboard));
  }
  //
  if (!sessionStorage.getItem("Time")) {
    let timeValue = 5;
    sessionStorage.setItem("Time", timeValue);
  }
  // USERS
  if (!localStorage.users) {
    const users = [
      {
        username: "Bruno",
        password: "123",
      },
      {
        username: "Hugo",
        password: "123",
      },
      {
        username: "Admin",
        password: "123",
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }
}
IniciarData();