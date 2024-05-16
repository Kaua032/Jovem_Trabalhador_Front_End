import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { MainCollege, SectionCollege } from "./CollegeStyled";

export default function College() {
  return (
    <MainCollege>
      <Navbar p4={1} />;
      <Header />
      <SectionCollege>
        
      </SectionCollege>
    </MainCollege>
  );
}
