import { useEffect, useState } from "react";
import { ListArea } from "../CollegesList/CollegeListStyled";
import { getAllCourses } from "../../services/courseService";

export default function CourseList() {
  const [allCourses, setAllCourses] = useState([]);

  async function findAllCourses() {
    try {
      const response = await getAllCourses();

      setAllCourses(response.data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    findAllCourses();
  }, []);
  return (
    <ListArea>
      <div>
        <h2>Cursos na Rede Remota</h2>
        <table>
          <thead>
            <tr>
              <td>Nº</td>
              <td>Nome</td>
            </tr>
          </thead>
          <tbody>
            {allCourses.map((course, index) => (
              <tr key={index}>
                <td>{index + 1}º</td>
                <td>{course.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListArea>
  );
}
