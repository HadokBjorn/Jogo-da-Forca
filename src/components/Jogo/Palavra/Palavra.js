import Palavra from "./style";

function PalavraSorteada({palavra, style}) {

    return(
        <Palavra style={{color:style}}>{palavra}</Palavra>
    )
}
export default PalavraSorteada;