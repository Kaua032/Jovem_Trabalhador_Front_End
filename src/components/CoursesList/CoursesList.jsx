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
              <td>
                <p>Nº</p>
              </td>
              <td>
                <p>Nome</p>
              </td>
            </tr>
          </thead>
          <tbody>
            {allCourses.map((course, index) => (
              <tr key={index}>
                <td>
                  <p>{index + 1}º</p>
                </td>
                <td>
                  <p>{course.name}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListArea>
  );
}
