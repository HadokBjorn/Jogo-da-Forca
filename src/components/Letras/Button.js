import Letras from "./style";

function Button({
    palavras,
    letra,
    tentativa,
    buttonsDisabled,
    setButtonsDisabled,
    setUnderline,
    word,
    underline,
    setTentativa,
    contaErro,
    setContaErro,
    setForca,
    imagens,
    setCorPalavra,
}) {
    function isDisabled(){
        if(tentativa.includes(letra)){
            return true
        }
        return false;
    }

    function checkLetter(){
        const errou = contaErro + 1;
        const palavra = palavras[word];
        const newPalavra = [...underline].filter(el => el !== ' ');
        let chuteCorreto = [];

        console.log('palavra:',palavra)
        

        console.log("newPalavra fora do  if: ", newPalavra);

        if(palavra.includes(letra)){
            chuteCorreto = newPalavra.map((el,i) => (palavra[i]===letra)?letra:(el==='_'?'_':el))
            setUnderline(chuteCorreto.join(' '));

            console.log("newPalavra: ", newPalavra);
            console.log("palavra dentro do if:",palavra)
        }else if(errou >0 && errou<6){
            setContaErro(errou);
            setForca(imagens[errou])
            //console.log('errou',errou)
            //console.log("chuteCorreto: ", chuteCorreto.join(''));
        }else if(errou === 6){
            setForca(imagens[errou])
            setTentativa([])
            setButtonsDisabled(true)
            setCorPalavra('red');
            setUnderline(palavra)
            //console.log("chuteCorreto: ", chuteCorreto.join(''));
        }
        
        if((!chuteCorreto.join('').includes('_')) && errou<6 && (chuteCorreto.join('')===palavra)){
            setTentativa([])
            setButtonsDisabled(true)
            setCorPalavra('green')
            console.log("chuteCorreto: ", chuteCorreto.join('').includes('_'));
        }
    }
    function handleClick(){
        const listaChutes = [...tentativa,letra];
        setTentativa(listaChutes);

        console.log("tentativa",tentativa);
        console.log("letra",letra);
    }

    return(
        <Letras onClick={() => {checkLetter(); handleClick()}} disabled={(buttonsDisabled)?true:isDisabled()}>
            {letra}
        </Letras>
    )
}

export default Button;