import ButtonContainer from "./style";
import Palavra from "../Palavra/style";
function ButtonStart(props){
    return(
        <ButtonContainer>
            <button onClick={props.onClick}>Escolher Palavra</button>
            <Palavra>Palavra Sorteada</Palavra>
        </ButtonContainer>
        
    )
}

export default ButtonStart;