import { useEffect, useState } from "react";
import { ListArea } from "../CollegesList/CollegeListStyled";
import { getAllPartys } from "../../services/partyService";

export default function PartyList() {
  const [allPartys, setAllPartys] = useState([]);

  async function findAllPartys() {
    try {
      const response = await getAllPartys();

      setAllPartys(response.data.parties);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    findAllPartys();
  }, []);
  return (
    <ListArea>
      <div>
        <h2>Instituições na Rede Remota</h2>
        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Nome</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {allPartys.map((party, index) => (
              <tr key={index}>
                <td>{index + 1}º</td>
                <td>{party.grade}</td>
                <td>{party.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListArea>
  );
}
