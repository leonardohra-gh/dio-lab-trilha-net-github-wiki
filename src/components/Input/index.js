import {InputContainer} from "./styles.js";

function Input({value, onChange}) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange}/>
    </InputContainer>
  );
}

export default Input;
