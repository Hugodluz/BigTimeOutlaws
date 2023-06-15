import * as User from "../../models/UserModel.js";

function navbarView() {
  User.init();
  let Log_btn = document.getElementById("Loginfrm")
  // CONSTRUIR CONTEÚDO DA NAVBAR (VERIFICAR SE USER AUTENTICADO)
  let result = `
  <div class="container-fluid ">
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand mt-2 mt-lg-0" href="../index.html">
        <img
          src="../img/logotipo final IDA.png"
          height="45"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="../Prototipagem/jogo/index.html">Jogar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tabela de classificação</a>
        </li>
      </ul>
    </div>
  `;

  if (User.isLogged()) {
    result += `<div class="dropdown">
    <img
      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
      class="rounded-circle"
      height="25"
      alt="Black and White Portrait of a Man"
      loading="lazy"
    />
</div>
<div class="d-flex align-items-center">      
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <button id="btnLogout" class="btn btn-outline-success m-2 my-sm-0">
          Logout
      </button>
        </li>
    </ul>
                `;
  } else {
    result += `                   
    <div class="d-flex align-items-center">      
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="Registar.html">Registar</a>
        </li>
    </ul>
                `;
  }
  result += `</div>
</div>
`;

  // INJETAR CONTEÚDO NA NAVBAR
  document.querySelector("nav").innerHTML = result;

  // CLICAR NO BOTÃO DE LOGIN
  Log_btn.addEventListener("click", function(event){
    event.preventDefault();
    const LoginUsername = document.getElementById("LogintxtUsername");
    const LoginPassword = document.getElementById("LogintxtPassword");
    let ChangePage=User.login(LoginUsername.value,LoginPassword.value);
      if (ChangePage == true){
        window.location="../index.html"
      } 
    }
  );
}


navbarView();
