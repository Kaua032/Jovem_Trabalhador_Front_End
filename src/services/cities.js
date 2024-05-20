import axios from "axios";

export function GetAllCitiesFromAl() {
  const response = axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/al/municipios"
  );
  return response;
}
