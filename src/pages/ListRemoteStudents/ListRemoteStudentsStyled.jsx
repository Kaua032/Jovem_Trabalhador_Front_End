import styled from "styled-components";

export const MainRemoteStudents = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListAreaRemoteStudents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  input {
    width: 360px;
    height: 40px;
    border-radius: 100px;
    border: 1px solid #bababa;
    padding-left: 10px;
  }
  #listArea {
    width: 720px;
    height: 571px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: white;
    padding-top: 20px;
    border-radius: 15px;
    border: 1px solid #bababa;
  }
  div h2 {
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
  table .editButton,
  table .deleteButton {
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    background-color: white;
  }
  table .editButton {
    width: 10px;
    height: 10px;
    background-image: url("./editIcon.png");
  }
  table .deleteButton {
    width: 15px;
    height: 16.67px;
    background-image: url("./deleteIcon.png");
  }
  #buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  #buttons p {
    margin: 0;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #454545;
  }
  #left,
  #right {
    border: none;
    background-color: #f6f7f9;
    color: #525668;
    font-size: 30px;
    font-weight: 500;
  }
  #left:hover,
  #right:hover {
    opacity: 0.85;
  }
`;
