import Navbar from "../../components/Navbar/Navbar";
import { MainHome } from "./HomeStyled";
import Header from "../../components/Header/Header";
import InputComponent from "../../components/Input/InputComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { SelectCollege } from "../../components/SelectCollege/SelectCollege";
import { SelectParty } from "../../components/SelectParty/SelectParty";
import CheckBoxCourses from "../../components/CheckBoxCourses/CheckBoxCourses";

export default function Home() {
  function registerStudent() {
    console.log("Register Student");
  }
  return (
    <MainHome>
      <Navbar p1={1} />
      <Header />
      <div id="formStudent">
        <h2>Adicionar Novo Estudante</h2>
        <div id="flex">
          <div id="formStudent1">
            <InputComponent
              name="name"
              type="text"
              title="Nome do Estudante:"
              width="300px"
              id="name"
            />
            <InputComponent
              name="phone"
              type="text"
              title="Telefone:"
              width="300px"
              id="phone"
            />
            <InputComponent
              name="responsible_name"
              type="text"
              title="Nome do Responsável:"
              width="300px"
              id="responsible"
            />
            <InputComponent
              name="born_date"
              type="date"
              title="Data de nascimento:"
              width="300px"
              id="born_date"
            />
            <SelectCollege width="300px" id="college" />
          </div>
          <div id="formStudent2">
            <SelectParty width="300px" id="party" />
            <CheckBoxCourses width="300px" name="courses" />
            <SubmitButton
              onClick={registerStudent}
              type="submit"
              title="Adicionar"
              width="300px"
            />
          </div>
        </div>
      </div>
    </MainHome>
  );
}
