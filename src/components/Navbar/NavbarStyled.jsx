import styled from "styled-components";

export const BackgroundNav = styled.section`
  width: 285px;
  height: 100%;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  #title {
    color: #0a7de8;
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
  }
  div{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  padding-top: 50px;
`;
