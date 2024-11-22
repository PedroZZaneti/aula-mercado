// Importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

// Importando o hook useState para monitorar a mudanca de variaveis
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

   //Variaves para o alerta
   const [alertClass, setAlertClass] = useState("mb-3 d-none");
   const [alertMensagem, setAlertMensagem] = useState("");
   const [alertVariant, setAlertVariant] = useState("danger");

   // Lista de Usuarios
   const usuarios = [
    {id: 1, nome: "João", email: "joaov@gmail.com", senha: "11"},
    {id: 2, nome: "Gregory", email: "gregory@gmail.com", senha: "61"}
   ]

   // Criando o navigate

   const navigate = useNavigate()

   // Função pra guarda na memoria do navegador as informações do usuario
   const graverLocalStorage = (usuario) => {
    localStorage.setItem{"userName",usuario.nome}
    localStorage.setItem{"email",usuario.email}
    
   }

   // Função para tratar os dados do Login
   const handleLogin = async (e) => {
    // Previne a pagina de ser recarregada
    e.preventDefault()

    // Verifica se ha daquele usuario digitados na lista
    const userToFind = usuarios.find(
      (user) => user.email == email
    )

    if (email !="") {
      if (senha !=""){
        if(userToFind != undefined && userToFind.senha == senha){
          graverLocalStorage(userToFind)
          setAlertClass("mb-3 mt-2")
          setAlertVariant("success")
          setAlertMensagem("login efetuado com sucesso")
          alert("login efetuado com sucesso")
          navigate("/home")
      }
      else{
        setAlertClass("mb-3 mt-2")
        setAlertMensagem("Usuario ou senha invalidos")
      }
    
  }else{
      setAlertClass("mb-3 mt-2")
      setAlertMensagem("O campo senha não pode estar vazio")
    }
  }else{
      setAlertClass("mb-3 mt-2")
      setAlertMensagem("O campo email não pode estar vazio")
    }}
  

   

  return (
    <div>
      <Container
        style={{ background: "dodgerblue", height: "100vh" }}
        className="justify-content-center align-content-center"
      >
        {/* Icone de login */}
        <span
          style={{ fontSize: "200px", color: "white" }}
          className="material-symbols-outlined"
        >
          login
        </span>

        
        {/* Caixinha de email */}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" 
          onChange={(e) => {
            setEmail(e.target.value);
          }}></Form.Control>
        </FloatingLabel>

        {/* Caixinha de senha */}
        <FloatingLabel controlId="floatingPassword" label="Senha">
          <Form.Control type="password" 
          placeholder="Password" 
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}/>
        </FloatingLabel>

        {/* Alerta Caso haja erro */}
        <Alert key="danger" variant={alertVariant} 
        className={alertMensagem}
        >
            {alertMensagem}
        </Alert>

        {/* Botao pra enviar o formulário */}
        <Button variant="light" className="mt-4" size="lg" href="/home">
          Login
        </Button>
      </Container>
    </div>
  );
};

export default Login;
