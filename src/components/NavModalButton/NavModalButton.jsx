import { NavButtonArea } from "./NavModalButtonStyled";

export default function NavModalButton({...props}) {
  return <NavButtonArea>{props.text}</NavButtonArea>;
}
