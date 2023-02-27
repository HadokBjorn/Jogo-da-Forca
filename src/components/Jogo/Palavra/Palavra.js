import Palavra from "./style";

function PalavraSorteada({palavra, className}) {

    return(
        <Palavra className={className} data-test="word">{palavra}</Palavra>
    )
}
export default PalavraSorteada;