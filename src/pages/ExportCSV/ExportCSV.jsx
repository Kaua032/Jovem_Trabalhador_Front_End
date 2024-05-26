import { MainExportCSV, SectionExportCSV } from "./ExportCSVStyled";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import SelectJustCollege from "../../components/SelectJustCollege/SelectJustCollege";
import SelectCity from "../../components/SelectCity/SelectCity";
import SelectJustParty from "../../components/SelectJustParty/SelectJustParty";
import SelectTime from "../../components/SelectTime/SelectTime";
import CheckBoxCourses from "../../components/CheckBoxCourses/CheckBoxCourses";
import SelectRegistration from "../../components/SelectRegistration/SelectRegistration";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

export default function ExportCSV() {
  return (
    <MainExportCSV>
      <Navbar p8={1} />
      <Header />
      <SectionExportCSV>
        <div id="formExportCSV">
          <h2>Exportar CSV</h2>
          <div id="areaInputs">
            <div className="inputs">
              <SelectJustCollege width="300px" id="college" />
              <SelectCity width="300px" id="city" />
              <SelectJustParty width="300px" id="party" />
            </div>
            <div className="inputs">
              <SelectTime width="300px" id="time" />
              <SelectRegistration width="300px" id="registration" />
              <CheckBoxCourses name="courses" width="300px" height="50px" />
            </div>
          </div>
          <SubmitButton width="300px" title="Exportar" />
        </div>
      </SectionExportCSV>
    </MainExportCSV>
  );
}
