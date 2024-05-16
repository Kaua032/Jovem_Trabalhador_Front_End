import Navbar from "../../components/Navbar/Navbar";
import { MainHome } from "./HomeStyled";
import Header from "../../components/Header/Header";
import InputComponent from "../../components/Input/InputComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import InputSelect from "../../components/InputSelect/InputSelect";

export default function Home() {
  function bla() {
    console.log("joao");
  }
  return (
    <MainHome>
      <Navbar p1={1} />;
      <Header />
      <div id="formStudent">
        <InputComponent
          name="name"
          type="text"
          title="Nome do Estudante:"
          width="300px"
          register={bla}
        />
        <InputComponent
          name="phone"
          type="text"
          title="Telefone:"
          width="300px"
          register={bla}
        />
        <InputComponent
          name="responsible_name"
          type="text"
          title="Nome do Responsável:"
          width="300px"
          register={bla}
        />
        <InputComponent
          name="born_date"
          type="date"
          title="Data de nascimento:"
          width="300px"
          register={bla}
        />
        <InputSelect name="Node do Colegio" width="300px" />
        <SubmitButton type="submit" title="Adicionar" width="300px" />
      </div>
    </MainHome>
  );
}
