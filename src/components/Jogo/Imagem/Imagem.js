import ImageContainer from "./style";
import imgInicial from "../../../assets/forca0.png";

function Imagem(){
    return(
        <ImageContainer>
            <img src={imgInicial} alt="imagem da forca"/>
        </ImageContainer>
    )
}

export default Imagem;