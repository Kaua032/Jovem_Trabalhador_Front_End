import { ButtonArea } from "./SubmitButtonStyled";

export default function SubmitButton({ ...props }) {
  return <ButtonArea width={props.width}>{props.title}</ButtonArea>;
}
