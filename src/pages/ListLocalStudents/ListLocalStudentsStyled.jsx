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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: white;
    padding-top: 20px;
    border-radius: 15px;
    border: 1px solid #bababa;
  }
  #listArea #header_list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  #listArea #header_list #space {
    width: 170px;
  }
  #listArea #header_list h2 {
    font-size: 20px;
    font-weight: bold;
    color: #454545;
    margin: 0;
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
