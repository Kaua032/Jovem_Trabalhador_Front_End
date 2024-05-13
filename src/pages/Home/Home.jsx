import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Button, Modal } from "react-bootstrap";
import { MainHome } from "./HomeStyled";
import InputComponent from "../../components/Input/InputComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import NavModalButton from "../../components/NavModalButton/NavModalButton";

export default function Home() {
  const [show, setShow] = useState(false);
  const [dilpayLoginNavButton, setDisplayLoginNavButton] = useState("flex")
  const [dilpayRegisterNavButton, setDisplayRegisterNavButton] = useState("none")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function changeModal(id) {
    console.log(id)
    if(id === "loginForm"){
      setDisplayLoginNavButton("none")
      document.getElementById("loginForm").style.display = "none"

      setDisplayRegisterNavButton("flex")
      document.getElementById("registerForm").style.display = "flex"
    }
    else if (id === "registerForm"){
      setDisplayLoginNavButton("flex")
      document.getElementById("loginForm").style.display = "flex"

      setDisplayRegisterNavButton("none")
      document.getElementById("registerForm").style.display = "none"
    }
  }

  return (
    <MainHome>
      <Navbar p1={1} />;
      <Button id="loginButton" variant="primary" onClick={handleShow}>
        Entrar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="modalTitle">Entrar</Modal.Title>
        </Modal.Header>
        <div id="formArea">
          <form id="loginForm">
            <InputComponent type="text" title="Email:" width="100%" />
            <InputComponent type="password" title="Senha:" width="100%" />
            <SubmitButton title="Entrar" width="100%" />
          </form>
          <NavModalButton
            display={dilpayLoginNavButton}
            idModalButton="loginForm"
            changeModal={changeModal}
            text="Não possui uma conta? Clique aqui."
          />
          <form id="registerForm">
            <InputComponent type="text" title="Nome:" width="100%" />
            <InputComponent type="text" title="Email:" width="100%" />
            <InputComponent type="password" title="Senha:" width="100%" />
            <SubmitButton title="Cadastrar-se" width="100%" />
          </form>
          <NavModalButton
            display={dilpayRegisterNavButton}
            idModalButton="registerForm"
            changeModal={changeModal}
            text="Já possui uma conta? Clique aqui."
          />
        </div>
      </Modal>
    </MainHome>
  );
}
