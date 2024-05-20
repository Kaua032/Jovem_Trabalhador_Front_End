import { useEffect } from "react";
import { useState } from "react";
import { GetAllCitiesFromAl } from "../../services/cities";

export default function SelectCity() {
  const [cities, setCities] = useState([]);

  async function GetAllCities() {
    const response = await GetAllCitiesFromAl();
    if (!localStorage.getItem("cities")) {
      const currentCities = response.data;
      localStorage.setItem("cities", JSON.stringify(currentCities));
      setCities(localStorage.getItem("cities"));
    } else {
      const storedCities = JSON.parse(localStorage.getItem("cities"));
      console.log(storedCities);
      setCities(storedCities);
    }
  }

  useEffect(() => {
    GetAllCities();
  });
  return (
    <>
      <select name="" id="">
        <option value="0">Cidade</option>
        {cities.map((city) => (
          <option
            key={city.id}
            value={`${city.nome}-${city.microrregiao.mesorregiao.UF.sigla}`}
          >
            {`${city.nome}-${city.microrregiao.mesorregiao.UF.sigla}`}
          </option>
        ))}
      </select>
    </>
  );
}
