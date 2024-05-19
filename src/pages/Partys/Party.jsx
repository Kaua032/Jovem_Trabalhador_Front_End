import Header from "../../components/Header/Header";
import InputComponent from "../../components/Input/InputComponent";
import Navbar from "../../components/Navbar/Navbar";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { MainParty, SectionParty } from "./PartyStyled";

export default function Party() {
  return (
    <MainParty>
      <Navbar p6={1} />
      <Header />
      <SectionParty>
        <div id="addPartyArea">
          <div id="form-party">
            <h2>Adicionar Turma</h2>
            <InputComponent
              name="grade"
              type="text"
              title="Grade:"
              width="300px"
              id="nameParty"
            />
            <InputComponent
              name="grade"
              type="text"
              title="Horário:"
              width="300px"
              id="nameParty"
            />
            <SubmitButton title="Adicionar" width="300px" />
          </div>
          <div id="partysLocalList">
            <h2>Turmas na Rede Local</h2>
            <table>
              <thead>
                <tr>
                  <th>
                    <p>Nº</p>
                  </th>
                  <th>
                    <p>Grade</p>
                  </th>
                  <th>
                    <p>Horário</p>
                  </th>
                  <th>
                    <p></p>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <SubmitButton
            title="Adicionar ao Banco"
            width="100%"
          />
        </div>
      </SectionParty>
    </MainParty>
  );
}
