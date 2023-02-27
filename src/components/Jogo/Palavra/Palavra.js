import Palavra from "./style";

function PalavraSorteada({palavra, className}) {

    return(
        <Palavra className={className}>{palavra}</Palavra>
    )
}
export default PalavraSorteada;