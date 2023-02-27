import Letras from "./style";

function Button({
    palavras,
    letra,
    tentativa,
    buttonsDisabled,
    setUnderline,
    word,
    underline,
    setTentativa,
    contaErro,
    setContaErro,
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
        }else{
            setContaErro(errou)
            console.log(errou)
        }
    }
    function handleClick(){
        const listaChutes = [...tentativa,letra];
        setTentativa(listaChutes);

        console.log("tentativa",tentativa);
        console.log("letra",letra);
        console.log("Erros: ",contaErro)
    }

    return(
        <Letras onClick={() => {checkLetter(); handleClick()}} disabled={(buttonsDisabled)?true:isDisabled()}>
            {letra}
        </Letras>
    )
}

export default Button;