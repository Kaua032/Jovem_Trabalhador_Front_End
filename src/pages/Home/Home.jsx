import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Button, Modal } from "react-bootstrap";
import { MainHome } from "./HomeStyled";
import InputComponent from "../../components/Input/InputComponent";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <form>
          <InputComponent type="text" title="Email:" />
          <InputComponent type="password" title="Senha:" />
        </form>
      </Modal>
    </MainHome>
  );
}
