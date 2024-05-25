import Navbar from "../../components/Navbar/Navbar";
import { MainHome } from "./HomeStyled";
import Header from "../../components/Header/Header";
import InputComponent from "../../components/Input/InputComponent";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { SelectCollege } from "../../components/SelectCollege/SelectCollege";
import { SelectParty } from "../../components/SelectParty/SelectParty";
import CheckBoxCourses from "../../components/CheckBoxCourses/CheckBoxCourses";

export default function Home() {
  function registerStudent() {
    const student_name = document.getElementById("name").value;
    const student_phone = document.getElementById("phone").value;
    const student_responsible = document.getElementById("responsible").value;
    const student_born = document.getElementById("born_date").value;

    const name_city_college = document.getElementById("college").value;
    const college_parts = name_city_college
      .split("|")
      .map((part) => part.trim());
    const college_name = college_parts[0];
    const college_city = college_parts[1];

    const grade_time_party = document.getElementById("party").value;
    const party_parts = grade_time_party.split("|").map((part) => part.trim());
    const party_grade = party_parts[0];
    const party_time = party_parts[1];

    const courses = document.getElementsByName("courses");
    const student_courses = [];
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].checked) {
        student_courses.push(courses[i].value);
      }
    }

    const actualDate = new Date();
    const formatedDate = actualDate.toISOString().split("T")[0];

    const student = {
      name: student_name.toLowerCase(),
      phone: student_phone,
      responsible_name: student_responsible.toLowerCase(),
      born_date: student_born,
      registration: formatedDate,
      name_college: college_name.toLowerCase(),
      city_college: college_city.toLowerCase(),
      time_party: party_time.toLowerCase(),
      grade_party: party_grade.toLowerCase(),
      courses: student_courses,
    };

    let students = localStorage.getItem("students")
      ? JSON.parse(localStorage.getItem("students"))
      : [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("responsible").value = "";
    document.getElementById("born_date").value = "";
    document.getElementById("college").value = "Selecione";
    document.getElementById("party").value = "Selecione";
    for (let i = 0; i < courses.length; i++) {
      courses[i].checked = false;
    }
  }
  return (
    <MainHome>
      <Navbar p1={1} />
      <Header />
      <div id="formStudent">
        <h2>Adicionar Novo Estudante</h2>
        <div id="flex">
          <div id="formStudent1">
            <InputComponent
              name="name"
              type="text"
              title="Nome do Estudante:"
              width="300px"
              id="name"
            />
            <InputComponent
              name="phone"
              type="text"
              title="Telefone:"
              width="300px"
              id="phone"
            />
            <InputComponent
              name="responsible_name"
              type="text"
              title="Nome do Responsável:"
              width="300px"
              id="responsible"
            />
            <InputComponent
              name="born_date"
              type="date"
              title="Data de nascimento:"
              width="300px"
              id="born_date"
            />
            <SelectCollege width="300px" id="college" />
          </div>
          <div id="formStudent2">
            <SelectParty width="300px" id="party" />
            <CheckBoxCourses height="239px" width="300px" name="courses" />
            <SubmitButton
              onClick={registerStudent}
              type="submit"
              title="Adicionar"
              width="300px"
            />
          </div>
        </div>
      </div>
    </MainHome>
  );
}
