import styled from "styled-components";

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  #formStudent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #bababa;
    padding: 25px 20px;
  }
  #formStudent h2 {
    font-size: 20px;
    font-weight: bold;
    color: #454545;
  }
  #formStudent #flex {
    display: flex;
    gap: 80px;
  }
  #formStudent1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
