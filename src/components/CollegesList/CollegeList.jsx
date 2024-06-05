import { useEffect, useState } from "react";
import { ListArea } from "./CollegeListStyled";
import { getAllColleges, updateCollege } from "../../services/collegeService";

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

  const handleInputChange = async (index, field, value) => {
    const updatedColleges = [...allColleges];
    updatedColleges[index][field] = value;
    setAllColleges(updatedColleges);
    const response = await updateCollege(allColleges[index]._id, {
      [field]: allColleges[index][field],
    });

    console.log(response)
  };

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
                <td>
                  <input
                    type="text"
                    value={college.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={college.city}
                    onChange={(e) =>
                      handleInputChange(index, "city", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={college.uf}
                    onChange={(e) =>
                      handleInputChange(index, "uf", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListArea>
  );
}
