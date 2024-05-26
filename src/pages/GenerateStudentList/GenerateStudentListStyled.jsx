import styled from "styled-components";

export const MainGenerateStudent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const SectionGenerateStudent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  #formGenerateList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #bababa;
    padding: 25px 20px;
  }
  #formGenerateList h2 {
    font-size: 20px;
    font-weight: bold;
    color: #454545;
  }
  #areaInputs {
    display: flex;
    gap: 80px;
  }
  #areaInputs .inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  #listArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: white;
    padding-top: 20px;
    border-radius: 15px;
    border: 1px solid #bababa;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #454545;
  }
  table {
    width: 100%;
  }
  table thead {
    font-size: 18px;
    font-weight: bold;
    color: #454545;
  }
  table {
    text-align: center;
  }
  table tbody tr {
    border-top: 1px solid #bababa;
  }
  table thead tr th,
  table tbody tr td {
    padding: 10px;
  }

  #noStudents img {
    width: 40%;
  }
  #noStudents p {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: red;
  }
`;
