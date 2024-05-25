import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { SelectCollege } from "../../components/SelectCollege/SelectCollege";
import SelectCity from "../../components/SelectCity/SelectCity";
import {
  MainGenerateStudent,
  SectionGenerateStudent,
} from "./GenerateStudentListStyled";
import { SelectParty } from "../../components/SelectParty/SelectParty";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import SelectTime from "../../components/SelectTime/SelectTime";
import CheckBoxCourses from "../../components/CheckBoxCourses/CheckBoxCourses";
import { SelectRegistration } from "../../components/SelectRegistration/SelectRegistration";
import { useState } from "react";
import SelectJustParty from "../../components/SelectJustParty/SelectJustParty";

export default function GenerateStudentList() {
  const [infoAllStudents, setInfoAllStudents] = useState([]);

  async function GenerateStudents() {
    const name_city_college = document.getElementById("college").value;
    const college_parts = name_city_college
      .split("|")
      .map((part) => part.trim());
    const name_college = college_parts[0];
    const city_college = college_parts[1];
    const time_party = document.getElementById("time").value;
    const grade_party = document.getElementById("party").value;
    const student_registration = document.getElementById("registration").value;

    const courses = document.getElementsByName("courses");
    const student_courses = [];
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].checked) {
        student_courses.push(courses[i].value);
      }
    }

    const filterCriteria = {};

    if (name_college) {
      filterCriteria.name_college = name_college.toLowerCase();
    }
    if (city_college) {
      filterCriteria.city_college = city_college.toLowerCase();
    }
    if (time_party) {
      filterCriteria.time_party = time_party.toLowerCase();
    }
    if (grade_party) {
      filterCriteria.grade_party = grade_party.toLowerCase();
    }
    if (student_registration) {
      filterCriteria.student_registration = student_registration.toLowerCase();
    }
    if (student_courses && student_courses.length > 0) {
      filterCriteria.courses = student_courses;
    }

    return console.log(filterCriteria);
  }

  return (
    <MainGenerateStudent>
      <Navbar p7={1} />
      <Header />
      <SectionGenerateStudent>
        <div id="formGenerateList">
          <h2>Gerar Lista de Alunos</h2>
          <div id="areaInputs">
            <div className="inputs">
              <SelectCollege width="300px" id="college" />
              <SelectCity width="300px" id="city" />
              <SelectJustParty width="300px" id="party" />
            </div>
            <div className="inputs">
              <SelectTime width="300px" id="time" />
              <SelectRegistration width="300px" id="registration" />
              <CheckBoxCourses height="50px" width="300px" />
            </div>
          </div>
          <SubmitButton
            onClick={GenerateStudents}
            width="300px"
            title="Gerar Lista"
          />
        </div>
        <div>
          <table></table>
        </div>
      </SectionGenerateStudent>
    </MainGenerateStudent>
  );
}
