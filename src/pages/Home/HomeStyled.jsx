import styled from "styled-components";

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  #loginButton {
    font-size: 20px;
    font-weight: 600;
    width: 130px;
    align-self: flex-end;
    margin-right: 30px;
    border-radius: 10px;
  }
  #formStudent {
    background-color: white;
    border-radius: 15px;
    border: 1px solid #bababa;
    padding: 25px 20px;
  }
  #formStudent form{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
