import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import {
  ListAreaLocalStudents,
  MainLocalStudents,
} from "./ListLocalStudentsStyled";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Cookies from "js-cookie";
import { postAllStudents } from "../../services/student";

export default function ListLocalStudents() {
  const [infoLocalStudents, setInfoLocalStudents] = useState([]);

  function handleDeleteStudent(index) {
    const currentStudents = localStorage.getItem("students")
      ? JSON.parse(localStorage.getItem("students"))
      : [];

    currentStudents.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(currentStudents));

    setInfoLocalStudents(currentStudents);
  }

  function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    return age;
  }

  async function registerStudents() {
    const currentStudents = localStorage.getItem("students")
      ? JSON.parse(localStorage.getItem("students"))
      : [];

    if (currentStudents.length == 0) {
      return alert(
        "Você precisa registrar algum aluno na rede Local antes de enviar para a Rede Remota."
      );
    } else if (!Cookies.get("token")) {
      return alert(
        "Você precisa estar logado para registrar algum aluno na rede Remota"
      );
    }

    const response = await postAllStudents(infoLocalStudents);

    if (response.status == 200) {
      alert(response.data.message);
    } else if (response.status == 201) {
      alert(response.data.message);
      setInfoLocalStudents([]);
    }
  }

  useEffect(() => {
    setInfoLocalStudents(
      localStorage.getItem("students")
        ? JSON.parse(localStorage.getItem("students"))
        : []
    );
  }, []);
  return (
    <MainLocalStudents>
      <Navbar p2={1} />
      <Header />
      <ListAreaLocalStudents>
        <div id="listArea">
          <h2>Lista de Estudantes Local</h2>
          <table>
            <thead>
              <tr>
                <th>Nº</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Responsável</th>
                <th>Idade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {infoLocalStudents.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}º</td>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>{student.responsible_name}</td>
                  <td>{calculateAge(student.born_date)}</td>
                  <td>
                    <button
                      className="deleteButton"
                      onClick={() => handleDeleteStudent(index)}
                    ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <SubmitButton
          onClick={registerStudents}
          type="submit"
          title="Adicionar Lista de Alunos Ao Banco"
          width="70%"
        />
      </ListAreaLocalStudents>
    </MainLocalStudents>
  );
}
