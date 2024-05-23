import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import {
  ListAreaLocalStudents,
  MainLocalStudents,
} from "./ListLocalStudentsStyled";

export default function ListLocalStudents() {
  return (
    <MainLocalStudents>
      <Navbar p2={1} />
      <Header />
      <ListAreaLocalStudents>
        <div id="listArea"></div>
      </ListAreaLocalStudents>
    </MainLocalStudents>
  );
}
