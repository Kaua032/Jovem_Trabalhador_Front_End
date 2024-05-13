import { InputArea } from "./InputStyled";

export default function InputComponent({ ...props }) {
  return (
    <InputArea>
      <p>{props.title}</p>
      <input type={props.type} placeholder={props.plaHolder} />
    </InputArea>
  );
}
