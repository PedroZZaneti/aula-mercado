// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

// Importando o hook useState para monitorar a mudanca de variaveis
import { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

   //Variaves para o alerta
   const [alertClass, setAlertClass] = useState("mb-3 d-none");
   const [alertMensagem, setAlertMensagem] = useState("");
   const [alertVariant, setAlertVariant] = useState("danger");


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
