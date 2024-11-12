import {ButtonContainer} from "./styles.js";

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}> 
        Buscar
    </ButtonContainer>
  );
}

export default Button;
