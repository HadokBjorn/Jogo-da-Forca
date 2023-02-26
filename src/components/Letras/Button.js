import Letras from "./style";

function Button(props) {
    return(
        <Letras onClick={props.onClick} style={props.color} >
            {props.letra}
        </Letras>
    )
}

export default Button;