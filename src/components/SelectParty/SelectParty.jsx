import { useEffect, useState } from "react";
import { SelectPartyStyle } from "./SelectPartyStyled";
import { getAllPartys } from "../../services/partyService";

export function SelectParty({ width, id }) {
  const [partysRemote, setPartysRemote] = useState([]);
  const [partysLocal, setPartysLocal] = useState([]);

  async function getRemotePartys() {
    const response = await getAllPartys();

    const currentParties = response.data.parties;
    localStorage.setItem("partiesCopyRemote", JSON.stringify(currentParties));
    setPartysRemote(JSON.parse(localStorage.getItem("partiesCopyRemote")));

    setPartysLocal(JSON.parse(localStorage.getItem("partys")));

    return;
  }

  useEffect(() => {
    getRemotePartys();
  });

  return (
    <SelectPartyStyle width={width}>
      <p>Turma:</p>
      <select name="" id={id}>
        <option value="">Selecione</option>
        {partysRemote.map((party) => (
          <option
            key={`${party.grade}-${party.time}`}
          >{`${party.grade} | ${party.time}`}</option>
        ))}
        {partysLocal.map((party) => (
          <option
            key={`${party.grade}-${party.time}`}
          >{`${party.grade} | ${party.time}`}</option>
        ))}
      </select>
    </SelectPartyStyle>
  );
}
