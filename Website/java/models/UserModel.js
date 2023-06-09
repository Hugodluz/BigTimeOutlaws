let users;
let leaderboard
// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
  leaderboard =localStorage.Leaderboard ? JSON.parse(localStorage.Leaderboard) : [];
}

// ADICIONAR UTILIZADOR
export function add(username, password) {
  if (users.some((user) => user.username === username)) {
    alert("Ja existe esse username")
    let ChangePage = false
    return ChangePage
  } else {
    users.push(new User(username, password));
    localStorage.setItem("users", JSON.stringify(users));
    let ChangePage = true
    return ChangePage;
  }
}
export function addLeaderBoard(Nome,Pontos){
  leaderboard.push(new Leaderboard(Nome,Pontos));
  localStorage.setItem("Leaderboard",JSON.stringify(leaderboard))
  return
}

// LOGIN DO UTILIZADOR
export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
    
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    let ChangePage = true
    return ChangePage;
  } else {
    let ChangePage = false
    return ChangePage;
  }
}

// LOGOUT DO UTILIZADOR
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// VERIFICA EXISTÊNCIA DE ALGUÉM AUTENTICADO
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// DEVOLVE UTILZIADOR AUTENTICADO
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}

/**
 * CLASSE QUE MODELA UM UTILIZADOR NA APLICAÇÃO
 */
class Leaderboard{
  Name=""
  Pontos=0
  constructor(Name,Pontos){
    this.Name=Name;
    this.Pontos = Pontos;
  }
}

class User {
  username = "";
  password = "";
  img = "";

  constructor(username, password, img="../img/") {
    this.username = username;
    this.password = password;
    this.img = img;
  }
}
