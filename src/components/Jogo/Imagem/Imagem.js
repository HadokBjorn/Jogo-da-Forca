import ImageContainer from "./style";


function Imagem({forca}){
    return(
        <ImageContainer>
            <img src={forca} alt="imagem da forca" data-test="game-image"/>
        </ImageContainer>
    )
}

export default Imagem;