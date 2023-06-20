import * as User from "../../models/UserModel.js";

function navbarView() {
  User.init();
  let Reg_btn = document.getElementById("RegisterFrm")
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
      `
      if (User.isLogged()) {
        result += `<ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="../html/BigTimeOutlaws.html">Jogar</a>
        </li>`
      }else{
        result += `<ul class="navbar-nav me-auto mb-2 mb-lg-0">`
      }

      result += `  <li class="nav-item">
          <a class="nav-link" href="../index.html">Tabela de classificação</a>
        </li>
      </ul>
    </div>
  `;

  
if (User.isLogged()) {
  if(User.getUserLogged().username=="Admin"){
    result += `<div class="d-flex align-items-center">      
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="admin.html">Admin</a>
        </li>
    </ul>`;
  }
  result += `
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

  // CLICAR NO BOTÃO DE REGISTAR
  Reg_btn.addEventListener("click", function(event){
      event.preventDefault();
      // Gestão do formulário de Registo
      const registerUsername = document.getElementById("txtUsernameRegister");
      const registerPassword = document.getElementById("txtPasswordRegister");
      const registerPassword2 = document.getElementById("txtPasswordRegister2");
        if (registerPassword.value !== registerPassword2.value) {
          alert("Password nao é igual a Confirmação da Password")
        }else{
          User.add(registerUsername.value, registerPassword.value);
          let ChangePage=User.login(registerUsername.value,registerPassword.value);
          if (ChangePage == true){
            window.location="../index.html"
          } 
        }
    });
}


navbarView();
