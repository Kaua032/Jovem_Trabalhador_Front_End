import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { BackgroundNav } from "./NavbarStyled";

export default function Navbar() {
  return (
    <BackgroundNav>
      <a id="title" href="/">Jovem Trabalhador</a>
      <div>
        <NavbarComponent href="/" type={1} name="Adicionar Aluno"/>
        <NavbarComponent href="/" type={0} name="Alunos Local"/>
        <NavbarComponent href="/" type={0} name="Alunos Remota"/>
        <NavbarComponent href="/" type={0} name="Instituições"/>
        <NavbarComponent href="/" type={0} name="Cursos"/>
        <NavbarComponent href="/" type={0} name="Turmas"/>
        <NavbarComponent href="/" type={0} name="Gerar Lista de Alunos"/>
        <NavbarComponent href="/" type={0} name="Exportar CSV"/>
      </div>
    </BackgroundNav>
  );
}
