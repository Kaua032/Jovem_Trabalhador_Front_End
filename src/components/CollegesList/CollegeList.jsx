import { useEffect, useState } from "react";
import { ListArea } from "./CollegeListStyled";
import { getAllColleges } from "../../services/collegeService";

export default function CollegeList() {
  const [allColleges, setAllColleges] = useState([]);

  async function findAllColleges() {
    try {
      const response = await getAllColleges();

      setAllColleges(response.data.colleges);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    findAllColleges();
  }, []);
  return (
    <ListArea>
      <div>
        <h2>Instituições na Rede Remota</h2>
        <table id="remota">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Nome</th>
              <th>Cidade</th>
              <th>UF</th>
            </tr>
          </thead>
          <tbody>
            {allColleges.map((college, index) => (
              <tr key={index}>
                <td>{index + 1}º</td>
                <td>{college.name}</td>
                <td>{college.city}</td>
                <td>{college.uf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListArea>
  );
}
