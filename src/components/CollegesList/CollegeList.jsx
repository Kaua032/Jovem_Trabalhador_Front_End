import { ListArea } from "./CollegeListStyled";

export default function CollegeList() {
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
            <tr>
              <td>
                <p>1º</p>
              </td>
              <td>
                <p>Sesi</p>
              </td>
              <td>
                <p>Maceió / Al</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ListArea>
  );
}
