import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import {
  ListAreaRemoteStudents,
  MainRemoteStudents,
} from "./ListRemoteStudentsStyled";

export default function ListRemoteStudent() {
  return (
    <MainRemoteStudents>
      <Navbar p3={1} />
      <Header />
      <ListAreaRemoteStudents>
        <div>
          <input id="searchStudent" type="text" placeholder="Pesquisar..." />
          <button></button>
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
                <th>Nascimento</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nº</td>
                <td>Nome</td>
                <td>Telefone</td>
                <td>Responsável</td>
                <td>Nascimento</td>
                <td>
                  <button className="editButton"></button>
                </td>
                <td>
                  <button className="deleteButton"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ListAreaRemoteStudents>
    </MainRemoteStudents>
  );
}
