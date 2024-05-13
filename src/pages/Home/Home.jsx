import Navbar from "../../components/Navbar/Navbar";
import { MainHome } from "./HomeStyled";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <MainHome>
      <Navbar p1={1} />;
      <Header />
    </MainHome>
  );
}
