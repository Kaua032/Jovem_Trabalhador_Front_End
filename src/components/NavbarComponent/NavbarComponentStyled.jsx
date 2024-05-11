import styled from "styled-components";

export const NavbarButton = styled.a`
    width: 100%;
    padding: 15px 0px 15px 0px;
    padding-left: ${(props) => props.type == 1 ? "25px": "30px"};
    text-decoration: none;
    font-size: 15px;
    font-weight: bold; 
    color: ${(props) => props.type == 1 ? "#0A7DE8": "#525668"};
    background-color: ${(props) => props.type == 1 ? "#F6F7F9": "#fff"};
    border-left: ${(props) => props.type == 1 ? "solid 5px #0A7DE8" : "none"} ;

    &:hover{
        color: #0A7DE8;
        background-color: #F6F7F9;
        border-left: solid 5px #0A7DE8;
        padding-left: 25px;
    }
`