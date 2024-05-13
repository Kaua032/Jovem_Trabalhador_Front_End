import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { BackgroundNav } from "./NavbarStyled";

export default function Navbar({ ...props }) {
  return (
    <BackgroundNav>
      <a id="title" href="/">
        Jovem Trabalhador
      </a>
      <div>
        <NavbarComponent href="/" type={props.p1} name="Adicionar Aluno" />
        <NavbarComponent href="/" type={props.p2} name="Alunos Local" />
        <NavbarComponent href="/" type={props.p3} name="Alunos Remota" />
        <NavbarComponent href="/" type={props.p4} name="Instituições" />
        <NavbarComponent href="/" type={props.p5} name="Cursos" />
        <NavbarComponent href="/" type={props.p6} name="Turmas" />
        <NavbarComponent href="/" type={props.p7} name="Gerar Lista de Alunos" />
        <NavbarComponent href="/" type={props.p8} name="Exportar CSV" />
      </div>
    </BackgroundNav>
  );
}