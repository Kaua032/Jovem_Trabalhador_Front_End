import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import InputComponent from "../../components/Input/InputComponent";
import Navbar from "../../components/Navbar/Navbar";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { MainCourse, SectionCourse } from "./CoursesStyled";
import Cookies from "js-cookie";
import { registerCourses } from "../../services/courseService";

export default function Courses() {
  const [infoAllCourses, setInfoAllCourses] = useState([]);

  function handleDeleteCourse(index) {
    const currentCourses = localStorage.getItem("courses")
      ? JSON.parse(localStorage.getItem("courses"))
      : [];

    currentCourses.splice(index, 1);

    localStorage.setItem("courses", JSON.stringify(currentCourses));

    setInfoAllCourses(currentCourses);
  }

  function registerCourse() {
    const nameCourse = document.getElementById("nameCourse").value;

    if (nameCourse !== "") {
      const currentCourses = localStorage.getItem("courses")
        ? JSON.parse(localStorage.getItem("courses"))
        : [];

      currentCourses.push({ name: nameCourse });

      localStorage.setItem("courses", JSON.stringify(currentCourses));
      setInfoAllCourses(currentCourses);
    }
  }

  async function submitCourses() {
    if (!Cookies.get("token")) {
      return alert("Você precisa estar logado para realizar essa ação");
    }
    const courses = localStorage.getItem("courses")
      ? JSON.parse(localStorage.getItem("courses"))
      : [];

    if (courses.length == 0) {
      return alert("Você não possui cursos cadastrados");
    }
    const response = await registerCourses(courses);
    if (response.status == 200) {
      alert(response.data.message);
      return;
    } else if (response.status == 201) {
      localStorage.setItem("courses", []);
      setInfoAllCourses([]);
      alert(response.data.message);
      window.location.reload();
    }
  }

  useEffect(() => {
    setInfoAllCourses(
      localStorage.getItem("courses")
        ? JSON.parse(localStorage.getItem("courses"))
        : []
    );
  }, []);

  return (
    <MainCourse>
      <Navbar p5={1} />
      <Header />
      <SectionCourse>
        <div id="addCourseArea">
          <div id="form-course">
            <h2>Adicionar Curso</h2>
            <InputComponent
              name="name"
              type="text"
              title="Nome:"
              width="300px"
              id="nameCourse"
            />
            <SubmitButton
              onClick={registerCourse}
              title="Adicionar"
              width="300px"
            />
          </div>
          <div id="coursesLocalList">
            <h2>Cursos na Rede Local</h2>
            <table>
              <thead>
                <tr>
                  <th>
                    <p>Nº</p>
                  </th>
                  <th>
                    <p>Nome</p>
                  </th>
                  <th>
                    <p></p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {infoAllCourses.map((course, index) => (
                  <tr key={index}>
                    <th>
                      <p>{index + 1}º</p>
                    </th>
                    <th>
                      <p>{course.name}</p>
                    </th>
                    <th>
                      <button
                        id={`delete-${index}`}
                        onClick={() => handleDeleteCourse(index)}
                      >
                        D
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubmitButton
            onClick={submitCourses}
            title="Adicionar ao Banco"
            width="100%"
          />
        </div>
      </SectionCourse>
    </MainCourse>
  );
}
