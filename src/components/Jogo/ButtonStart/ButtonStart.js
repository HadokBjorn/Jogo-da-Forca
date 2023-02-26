import ButtonContainer from "./style";
import PalavraSorteada from "../Palavra/Palavra";
function ButtonStart(props){
    return(
        <ButtonContainer>
            <button onClick={props.onClick}>Escolher Palavra</button>
            <PalavraSorteada palavra={props.sortWord}/> 
        </ButtonContainer>
        
    )
}

export default ButtonStart;