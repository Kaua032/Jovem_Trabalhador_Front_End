import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import InputComponent from "../../components/Input/InputComponent";
import Navbar from "../../components/Navbar/Navbar";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { MainCollege, SectionCollege } from "./CollegeStyled";
import CollegeList from "../../components/CollegesList/CollegeList";
import { registerColleges } from "../../services/collegeService";
import Cookies from "js-cookie";

export default function College() {
  const [infoAllColleges, setInfoAllColleges] = useState([]);

  function handleDeleteCollege(index) {
    const currentColleges = localStorage.getItem("colleges")
      ? JSON.parse(localStorage.getItem("colleges"))
      : [];

    currentColleges.splice(index, 1);

    localStorage.setItem("colleges", JSON.stringify(currentColleges));

    setInfoAllColleges(currentColleges);
  }

  function registerCollege() {
    const nameCollege = document.getElementById("nameCollege").value;
    const nameCityCollege = document.getElementById("nameCityCollege").value;

    if ((nameCollege !== "") & (nameCityCollege !== "")) {
      const currentColleges = localStorage.getItem("colleges")
        ? JSON.parse(localStorage.getItem("colleges"))
        : [];

      currentColleges.push({ name: nameCollege, city: nameCityCollege });

      localStorage.setItem("colleges", JSON.stringify(currentColleges));
      setInfoAllColleges(currentColleges);
      document.getElementById("nameCollege").value = "";
      document.getElementById("nameCityCollege").value = "";
    }
  }

  async function submitColleges() {
    if (!Cookies.get("token")) {
      return alert("Você precisa estar logado para realizar essa ação");
    }
    const colleges = localStorage.getItem("colleges")
      ? JSON.parse(localStorage.getItem("colleges"))
      : [];

    if (colleges.length == 0) {
      return alert("Você não possui instituições cadastradas");
    }
    const response = await registerColleges(colleges);
    if (response.status == 200) {
      alert(response.data.message);
      return;
    } else if (response.status == 201) {
      localStorage.setItem("colleges", []);
      setInfoAllColleges([]);
      alert(response.data.message);
      window.location.reload();
    }

    return;
  }

  useEffect(() => {
    setInfoAllColleges(
      localStorage.getItem("colleges")
        ? JSON.parse(localStorage.getItem("colleges"))
        : []
    );
  }, []);
  return (
    <MainCollege>
      <Navbar p4={1} />
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
            <table id="local">
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Nome</th>
                  <th>Cidade</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {infoAllColleges.map((college, index) => (
                  <tr key={index}>
                    <td>{index + 1}º</td>
                    <td>{college.name}</td>
                    <td>{college.city}</td>
                    <td>
                      <button
                        id={`delete-${index}`}
                        onClick={() => handleDeleteCollege(index)}
                      ></button>
                    </td>
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
