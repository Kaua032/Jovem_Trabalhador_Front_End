import { InputArea } from "../Input/InputStyled";

export default function InputSelect({ ...props }) {
  return (
    <InputArea>
      <label htmlFor={props.name}>{props.title}</label>
      <input
        type={props.type}
        placeholder={props.plaHolder}
      />
    </InputArea>
  );
}
