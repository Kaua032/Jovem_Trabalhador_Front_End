import styled from "styled-components";

export const MainLocalStudents = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListAreaLocalStudents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  #listArea {
    width: 720px;
    min-height: 571px;
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

  .deleteButton {
    border: none;
    width: 15px;
    height: 16.67px;
    background-image: url("./deleteIcon.png");
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
