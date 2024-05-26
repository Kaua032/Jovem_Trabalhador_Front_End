import styled from "styled-components";

export const MainExportCSV = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionExportCSV = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  #formExportCSV {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #bababa;
    padding: 25px 20px;
  }
  #formExportCSV h2 {
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
`;
