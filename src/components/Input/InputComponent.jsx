import { InputArea } from "./InputStyled";

export default function InputComponent({
  register,
  name,
  width,
  title,
  type,
  plaHolder,
  id,
}) {
  return (
    <InputArea width={width}>
      <p>{title}</p>
      <input
        id={id}
        type={type}
        placeholder={plaHolder}
        {...(register && register(name))}
      />
    </InputArea>
  );
}
