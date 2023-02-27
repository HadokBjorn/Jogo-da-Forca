import ImageContainer from "./style";


function Imagem({forca}){
    return(
        <ImageContainer>
            <img src={forca} alt="imagem da forca"/>
        </ImageContainer>
    )
}

export default Imagem;