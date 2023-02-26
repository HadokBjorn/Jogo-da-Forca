import Letras from "./style";

function Button(props) {
    return(
        <Letras onClick={props.onClick} >
            {props.letra}
        </Letras>
    )
}

export default Button;