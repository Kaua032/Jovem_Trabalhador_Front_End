import { useEffect, useState } from "react";
import { getAllColleges } from "../../services/collegeService";
import { SelectArea } from "./SelectCollegeStyled";

export function SelectCollege({ width, id }) {
  const [collegesRemote, setCollegesRemote] = useState([]);
  const [collegesLocal, setCollegesLocal] = useState([]);

  async function getRemoteColleges() {
    const response = await getAllColleges();

    const currentColleges = response.data.colleges;
    localStorage.setItem("collegesCopyRemote", JSON.stringify(currentColleges));
    setCollegesRemote(JSON.parse(localStorage.getItem("collegesCopyRemote")));

    setCollegesLocal(JSON.parse(localStorage.getItem("colleges")));

    return;
  }

  useEffect(() => {
    getRemoteColleges();
    console.log(collegesRemote);
    console.log(collegesLocal);
  });
  return (
    <SelectArea width={width}>
      <p>Instituição:</p>
      <select name="" id={id}>
        <option value="">Selecione</option>
        {collegesRemote.map((college) => (
          <option
            key={`${college.name}-${college.city}-remote`}
          >{`${college.name} | ${college.city}`}</option>
        ))}
        {collegesLocal.map((college) => (
          <option
            key={`${college.name}-${college.city}-local`}
          >{`${college.name} | ${college.city}`}</option>
        ))}
      </select>
    </SelectArea>
  );
}
