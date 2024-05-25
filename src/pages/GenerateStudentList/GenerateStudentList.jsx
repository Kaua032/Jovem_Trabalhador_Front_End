import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { SelectCollege } from "../../components/SelectCollege/SelectCollege";
import SelectCity from "../../components/SelectCity/SelectCity";
import {
  MainGenerateStudent,
  SectionGenerateStudent,
} from "./GenerateStudentListStyled";
import { SelectParty } from "../../components/SelectParty/SelectParty";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import SelectTime from "../../components/SelectTime/SelectTime";
import CheckBoxCourses from "../../components/CheckBoxCourses/CheckBoxCourses";
import { SelectRegistration } from "../../components/SelectRegistration/SelectRegistration";

export default function GenerateStudentList() {
  return (
    <MainGenerateStudent>
      <Navbar p7={1} />
      <Header />
      <SectionGenerateStudent>
        <div id="formGenerateList">
          <h2>Gerar Lista de Alunos</h2>
          <div id="areaInputs">
            <div className="inputs">
              <SelectCollege width="300px" id="college" />
              <SelectCity width="300px" id="city" />
              <SelectParty width="300px" id="party" />
            </div>
            <div className="inputs">
              <SelectTime width="300px" id="time" />
              <SelectRegistration />
              <CheckBoxCourses height="50px" width="300px" />
            </div>
          </div>
          <SubmitButton width="300px" title="Gerar Lista" />
        </div>
        <div></div>
      </SectionGenerateStudent>
    </MainGenerateStudent>
  );
}
