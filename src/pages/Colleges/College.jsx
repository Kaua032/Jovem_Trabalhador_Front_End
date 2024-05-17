import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import InputComponent from "../../components/Input/InputComponent";
import Navbar from "../../components/Navbar/Navbar";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { MainCollege, SectionCollege } from "./CollegeStyled";
import CollegeList from "../../components/CollegesList/CollegeList";

export default function College() {
  const [infoAllColleges, setInfoAllColleges] = useState([]);

  function handleDeleteCollege(index) {
    const currentColleges = JSON.parse(localStorage.getItem("colleges")) || [];

    currentColleges.splice(index, 1);

    localStorage.setItem("colleges", JSON.stringify(currentColleges));

    setInfoAllColleges(currentColleges);
  }

  function registerCollege() {
    const nameCollege = document.getElementById("nameCollege").value;
    const nameCityCollege = document.getElementById("nameCityCollege").value;

    if ((nameCollege != "") & (nameCityCollege != "")) {
      const currentColleges =
        JSON.parse(localStorage.getItem("colleges")) || [];

      currentColleges.push({ nameCollege, nameCityCollege });

      localStorage.setItem("colleges", JSON.stringify(currentColleges));
      setInfoAllColleges(currentColleges);
      document.getElementById("nameCollege").value = "";
      document.getElementById("nameCityCollege").value = "";
    }
  }

  async function submitColleges(){}

  useEffect(() => {
    setInfoAllColleges(JSON.parse(localStorage.getItem("colleges")) || []);
  }, []);
  return (
    <MainCollege>
      <Navbar p4={1} />;
      <Header />
      <SectionCollege>
        <div id="addCollegeArea">
          <div id="form-college">
            <h2>Adicionar Instituição</h2>
            <InputComponent
              name="name"
              type="text"
              title="Nome:"
              width="300px"
              id="nameCollege"
            />
            <InputComponent
              name="city"
              type="text"
              title="Cidade:"
              width="300px"
              id="nameCityCollege"
            />
            <SubmitButton
              onClick={registerCollege}
              title="Adicionar"
              width="300px"
            />
          </div>
          <div id="collegesLocalList">
            <h2>Instituições na Rede Local</h2>
            <table>
              <thead>
                <tr>
                  <th>
                    <p>Nº</p>
                  </th>
                  <th>
                    <p>Nome</p>
                  </th>
                  <th>
                    <p>Cidade</p>
                  </th>
                  <th>
                    <p></p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {infoAllColleges.map((college, index) => (
                  <tr key={index}>
                    <th>
                      <p>{index + 1}º</p>
                    </th>
                    <th>
                      <p>{college.nameCollege}</p>
                    </th>
                    <th>
                      <p>{college.nameCityCollege}</p>
                    </th>
                    <th>
                      <button
                        id={`delete-${index}`}
                        onClick={() => handleDeleteCollege(index)}
                      >
                        D
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubmitButton
            onClick={submitColleges}
            title="Adicionar ao Banco"
            width="100%"
          />
        </div>
        <CollegeList />
      </SectionCollege>
    </MainCollege>
  );
}
