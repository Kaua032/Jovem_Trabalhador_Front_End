import { useEffect } from "react";
import { useState } from "react";
import { GetAllCitiesFromAl } from "../../services/cities";
import { SelectStyle } from "./SelectCityStyled";

export default function SelectCity({ width, id }) {
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
    <SelectStyle width={width}>
      <p>Cidade:</p>
      <select name="" id={id}>
        {cities.map((city) => (
          <option
            key={city.id}
            value={`${city.nome}-${city.microrregiao.mesorregiao.UF.sigla}`}
          >
            {`${city.nome}-${city.microrregiao.mesorregiao.UF.sigla}`}
          </option>
        ))}
      </select>
    </SelectStyle>
  );
}
