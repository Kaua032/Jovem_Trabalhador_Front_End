import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { MainRemoteStudents } from "./ListRemoteStudentsStyled";

export default function ListRemoteStudent() {
  return (
    <MainRemoteStudents>
      <Navbar p3={1} />
      <Header />
    </MainRemoteStudents>
  );
}
