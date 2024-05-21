import { useEffect, useState } from "react";
import { BoxCoursesArea } from "./CheckBoxCoursesStyled";
import { getAllCourses } from "../../services/courseService";
import Cookies from "js-cookie";

export default function CheckBoxCourses({ width, name }) {
  const [coursesRemote, setCoursesRemote] = useState([]);
  const [coursesLocal, setCoursesLocal] = useState([]);

  async function getRemoteCourses() {
    if (!Cookies.get("token")) {
      const response = await getAllCourses();

      const currentCourses = response.data.courses;
      localStorage.setItem("coursesCopyRemote", JSON.stringify(currentCourses));
    }

    setCoursesRemote(JSON.parse(localStorage.getItem("coursesCopyRemote")));

    setCoursesLocal(JSON.parse(localStorage.getItem("courses")));

    return;
  }

  useEffect(() => {
    getRemoteCourses();
  });
  return (
    <BoxCoursesArea width={width}>
      <p>Cursos:</p>
      <div id="AllCourses">
        {coursesRemote.map((course) => (
          <div key={course.name}>
            <input type="checkbox" name={name} />
            <label htmlFor="">{course.name}</label>
          </div>
        ))}
        {coursesLocal.map((course) => (
          <div key={course.name}>
            <input type="checkbox" name={name} />
            <label htmlFor="">{course.name}</label>
          </div>
        ))}
      </div>
    </BoxCoursesArea>
  );
}
