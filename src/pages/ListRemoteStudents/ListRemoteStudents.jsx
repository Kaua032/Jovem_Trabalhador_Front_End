import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import {
  ListAreaRemoteStudents,
  MainRemoteStudents,
} from "./ListRemoteStudentsStyled";
import {
  delStudent,
  getAllStudentsByPage,
  getAllStudentsBySearch,
} from "../../services/student";
import Cookies from "js-cookie";

export default function ListRemoteStudent() {
  const [infoAllStudents, setInfoAllStudents] = useState([]);
  const [page, setPage] = useState(1);

  async function SearchStudent() {
    if (Cookies.get("token")) {
      const searchTerm = document.getElementById("searchStudent").value;

      if (searchTerm.length == 0) {
        return findAllStudents(1);
      }
      const response = await getAllStudentsBySearch({ searchTerm });
      setInfoAllStudents(response.data.students);

      document.getElementById("right").style.display = "none";
      document.getElementById("left").style.display = "none";
      document.getElementById("page").style.display = "none";
    } else {
      alert("Você precisa está logado para a pesquisa funcionar");
    }
  }

  async function findAllStudents(page) {
    try {
      const response = await getAllStudentsByPage({ page });
      setInfoAllStudents(response.data.students);
      document.getElementById("page").style.display = "flex";
      if (!response.data.nextPage) {
        document.getElementById("right").style.display = "none";
      } else {
        document.getElementById("right").style.display = "flex";
      }
      if (page > 1) {
        document.getElementById("left").style.display = "flex";
      } else {
        document.getElementById("left").style.display = "none";
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleNextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  function handlePreviousPage() {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  }

  function calculateAge(bornDate) {
    const birthDate = new Date(bornDate);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  async function deleteStudent(index) {
    const studentId = infoAllStudents[index]._id;
    const response = await delStudent(studentId);
    alert(response.data.message);
    window.location.reload();
  }

  useEffect(() => {
    findAllStudents(page);
  }, [page]);
  return (
    <MainRemoteStudents>
      <Navbar p3={1} />
      <Header />
      <ListAreaRemoteStudents>
        <div>
          <input
            onChange={SearchStudent}
            id="searchStudent"
            type="text"
            placeholder="Pesquisar..."
          />
        </div>
        <div id="listArea">
          <h2>Lista de Estudantes Remota</h2>
          <table>
            <thead>
              <tr>
                <th>Nº</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Responsável</th>
                <th>Idade</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Cookies.get("token") ? (
                infoAllStudents.map((student, index) => (
                  <tr key={student._id}>
                    <td>{index + 1}º</td>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.responsible_name}</td>
                    <td>{calculateAge(student.born_date)} anos</td>
                    <td>
                      <button className="editButton"></button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteStudent(index)}
                        className="deleteButton"
                      ></button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr id="noLogin">
                  <td colSpan="7">
                    <img src="./alerta.png" alt="" />
                    <p>
                      Você precisa está logado para ver os alunos da Rede
                      remota.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div id="buttons">
          <button id="left" onClick={handlePreviousPage}>
            &#60;
          </button>
          <p id="page">{page}</p>
          <button id="right" onClick={handleNextPage}>
            &#62;
          </button>
        </div>
      </ListAreaRemoteStudents>
    </MainRemoteStudents>
  );
}
