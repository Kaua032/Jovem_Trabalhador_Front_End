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
            {allPartys.map((party, index) => (
              <tr key={index}>
                <td>
                  <p>{index + 1}º</p>
                </td>
                <td>
                  <p>{party.grade}</p>
                </td>
                <td>
                  <p>{party.time}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListArea>
  );
}
