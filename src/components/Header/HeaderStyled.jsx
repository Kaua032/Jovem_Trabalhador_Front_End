import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
export const LogOut = styled.div`
  margin-right: 20px;

  display: flex;
  align-items: center;
  gap: 25px;
  cursor: pointer;

  p {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: #454545;
  }
  button {
    border: none;
  }
  button {
    width: 25px;
    height: 25px;
    background-image: url("./public/logout.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover {
    button {
      background-image: url("./public/logoutHover.svg");
    }
    p {
      color: #0a7de8;
    }
  }
`;