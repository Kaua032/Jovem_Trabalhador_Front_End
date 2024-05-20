import Navbar from "../../components/Navbar/Navbar";
import { MainHome } from "./HomeStyled";
import Header from "../../components/Header/Header";
import InputComponent from "../../components/Input/InputComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { SelectCollege } from "../../components/SelectCollege/SelectCollege";
import { SelectParty } from "../../components/SelectParty/SelectParty";

export default function Home() {
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
            />
            <InputComponent
              name="phone"
              type="text"
              title="Telefone:"
              width="300px"
            />
            <InputComponent
              name="responsible_name"
              type="text"
              title="Nome do Responsável:"
              width="300px"
            />
            <InputComponent
              name="born_date"
              type="date"
              title="Data de nascimento:"
              width="300px"
            />
            <SelectCollege width="300px" />
          </div>
          <div id="formStudent2">
            <SelectParty width="300px" />
            <SubmitButton type="submit" title="Adicionar" width="300px" />
          </div>
        </div>
      </div>
    </MainHome>
  );
}
