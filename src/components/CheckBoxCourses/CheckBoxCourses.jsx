import { BoxCoursesArea } from "./CheckBoxCoursesStyled";

export default function CheckBoxCourses({ width, name }) {
  return (
    <BoxCoursesArea width={width}>
      <p>Cursos:</p>
      <div id="AllCourses">
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
        <div>
          <input type="checkbox" name={name} />
          <label htmlFor="">Curso</label>
        </div>
      </div>
    </BoxCoursesArea>
  );
}
