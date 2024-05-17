import styled from "styled-components";

export const MainCourse = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionCourse = styled.section`
  display: flex;
  gap: 100px;

  #addCourseArea {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  #addCourseArea #form-course {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 25px;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #bababa;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #454545;
  }

  #addCourseArea #coursesLocalList {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    gap: 25px;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #bababa;
  }
  #addCourseArea table {
    width: 100%;
  }
  #addCourseArea table thead {
    font-size: 18px;
    font-weight: bold;
    color: #454545;
  }
  #addCourseArea table tbody {
    font-size: 12px;
    font-weight: 500;
    color: #525668;
  }
  #addCourseArea table th p {
    text-align: center;
  }
`;
