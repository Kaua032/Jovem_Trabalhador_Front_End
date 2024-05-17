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
        <table>
          <thead>
            <tr>
              <td>
                <p>Nº</p>
              </td>
              <td>
                <p>Nome</p>
              </td>
              <td>
                <p>Cidade</p>
              </td>
            </tr>
          </thead>
          <tbody>
            {allColleges.map((college, index) => (
              <tr key={index}>
                <td>
                  <p>{index + 1}º</p>
                </td>
                <td>
                  <p>{college.name}</p>
                </td>
                <td>
                  <p>{college.city}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListArea>
  );
}
