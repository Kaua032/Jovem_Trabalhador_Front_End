import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Button, Modal } from "react-bootstrap";
import { MainHome } from "./HomeStyled";
import InputComponent from "../../components/Input/InputComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import NavModalButton from "../../components/NavModalButton/NavModalButton";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function changeModal(id) {
    console.log(id)
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
        <form id="loginForm">
          <InputComponent type="text" title="Email:" width="100%" />
          <InputComponent type="password" title="Senha:" width="100%" />
          <SubmitButton title="Entrar" width="100%" />
          <NavModalButton
            onClick={() => changeModal("loginButton")}
            text="Não possui uma conta? Clique aqui"
          />
        </form>
      </Modal>
    </MainHome>
  );
}
