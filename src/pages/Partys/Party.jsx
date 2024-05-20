import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import InputComponent from "../../components/Input/InputComponent";
import Navbar from "../../components/Navbar/Navbar";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { MainParty, SectionParty } from "./PartyStyled";
import Cookies from "js-cookie";
import { registerPartys } from "../../services/partyService";
import PartyList from "../../components/PartysList/PartyList";
import SelectTime from "../../components/SelectTime/SelectTime";

export default function Party() {
  const [infoAllPartys, setInfoAllPartys] = useState([]);

  function handleDeleteParty(index) {
    const currentPartys = localStorage.getItem("partys")
      ? JSON.parse(localStorage.getItem("partys"))
      : [];

    currentPartys.splice(index, 1);

    localStorage.setItem("partys", JSON.stringify(currentPartys));

    setInfoAllPartys(currentPartys);
  }

  function registerParty() {
    const gradeParty = document.getElementById("nameParty").value;
    const timeParty = document.getElementById("timeParty").value;

    if (gradeParty !== "" && timeParty !== "") {
      const currentPartys = localStorage.getItem("partys")
        ? JSON.parse(localStorage.getItem("partys"))
        : [];

      currentPartys.push({ grade: gradeParty, time: timeParty });

      localStorage.setItem("partys", JSON.stringify(currentPartys));
      setInfoAllPartys(currentPartys);
      document.getElementById("nameParty").value = "";
      document.getElementById("timeParty").value = "";
    }
  }

  async function submitPartys() {
    if (!Cookies.get("token")) {
      return alert("Você precisa estar logado para realizar essa ação");
    }

    const partys = localStorage.getItem("partys")
      ? JSON.parse(localStorage.getItem("partys"))
      : [];

    if (partys.length == 0) {
      return alert("Você não possui turmas cadastradas");
    }

    const response = await registerPartys(partys);

    if (response.status == 200) {
      alert(response.data.message);
      return;
    } else if (response.status == 201) {
      localStorage.setItem("partys", []);
      setInfoAllPartys([]);
      alert(response.data.message);
      window.location.reload();
    }

    return;
  }

  useEffect(() => {
    setInfoAllPartys(
      localStorage.getItem("partys")
        ? JSON.parse(localStorage.getItem("partys"))
        : []
    );
  }, []);
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
            <SelectTime width="300px" id="timeParty" />
            <SubmitButton
              onClick={registerParty}
              title="Adicionar"
              width="300px"
            />
          </div>
          <div id="partysLocalList">
            <h2>Turmas na Rede Local</h2>
            <table id="local">
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
              <tbody>
                {infoAllPartys.map((party, index) => (
                  <tr key={index}>
                    <th>
                      <p>{index + 1}º</p>
                    </th>
                    <th>
                      <p>{party.grade}</p>
                    </th>
                    <th>
                      <p>{party.time}</p>
                    </th>
                    <th>
                      <button
                        id={`delete-${index}`}
                        onClick={() => handleDeleteParty(index)}
                      ></button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubmitButton
            onClick={submitPartys}
            title="Adicionar ao Banco"
            width="100%"
          />
        </div>
        <PartyList />
      </SectionParty>
    </MainParty>
  );
}
