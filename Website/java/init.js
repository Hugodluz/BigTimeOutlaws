
function IniciarData() {
  // Leaderboard
  if (!localStorage.Leaderboard) {
    const Leaderboard = [
      {
        Name: "Renato",
        Pontos: 350,
      },
      {
        Name: "Maria",
        Pontos: 327,
      },
      {
        Name: "Jose",
        Pontos: 300,
      },
      {
        Name: "Douglas",
        Pontos: 250,
      },
      {
        Name: "Floripes",
        Pontos: 338,
      },
    ];
    localStorage.setItem("Leaderboard", JSON.stringify(Leaderboard));
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
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }
}
IniciarData();