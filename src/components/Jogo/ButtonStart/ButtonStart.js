import ButtonContainer from "./style";
import PalavraSorteada from "../Palavra/Palavra";
function ButtonStart({
    setWord,
    underline,
    setUnderline,
    setButtonsDisabled,
    tentativa,
    setTentativa,
    palavras,
    corPalavra,
    setCorPalavra,
    imagens,
    setForca,
    setContaErro
}){
    function SorteiaPalavra(){
        const indiceDaPalavra = parseInt(Math.random()*palavras.length);
        const underlines = [];
        const caracteresDaPalavra = palavras[indiceDaPalavra].split('');
        caracteresDaPalavra.map(() => underlines.push('_'));
        
        setWord(indiceDaPalavra);
        setUnderline(underlines.join(' '));
        setButtonsDisabled(false);
        if(tentativa.length > 0){
            setTentativa([])
            setForca(imagens[0])
            setContaErro(0)
            setCorPalavra('black');
        };
        
        console.log(caracteresDaPalavra);
        console.log(underlines.join(' ').length);
        console.log(underlines.join(''))
        console.log(underlines.length);
        console.log("underline: ",underline);
        console.log("tamanhos da lista de palavras: ",palavras.length);
    }
    return(
        <ButtonContainer>
            <button onClick={SorteiaPalavra}>Escolher Palavra</button>
            <PalavraSorteada palavra={underline} style={corPalavra}/> 
        </ButtonContainer>
        
    )
}

export default ButtonStart;