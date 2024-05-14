import { InputArea } from "./InputStyled";

export default function InputComponent({ register, name, ...props }) {
  return (
    <InputArea width={props.width}>
      <p>{props.title}</p>
      <input
        type={props.type}
        placeholder={props.plaHolder}
        {...register(name)}
      />
    </InputArea>
  );
}
