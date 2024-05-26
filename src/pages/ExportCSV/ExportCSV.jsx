import { MainExportCSV } from "./ExportCSVStyled";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

export default function ExportCSV() {
  return (
    <MainExportCSV>
      <Navbar p8={1} />
      <Header />
    </MainExportCSV>
  );
}
