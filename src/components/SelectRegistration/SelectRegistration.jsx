import { SelectRegistrationStyle } from "./SelectRegistrationStyled";

export function SelectRegistration({ width, id }) {
  return (
    <SelectRegistrationStyle width={width}>
      <p>Registro:</p>
      <input type="date" id={id} />
    </SelectRegistrationStyle>
  );
}
