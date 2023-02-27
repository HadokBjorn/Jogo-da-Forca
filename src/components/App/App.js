import './reset.css';
import Div from './global';
import Imagem from '../Jogo/Imagem/Imagem';
import ButtonStart from '../Jogo/ButtonStart/ButtonStart';
import alfabeto from '../Letras/alfabeto';
import Button from '../Letras/Button';
import palavras from '../../palavras'
import { useState } from 'react';
import imagem0 from "../../assets/forca0.png";
import imagem1 from "../../assets/forca1.png";
import imagem2 from "../../assets/forca2.png";
import imagem3 from "../../assets/forca3.png";
import imagem4 from "../../assets/forca4.png";
import imagem5 from "../../assets/forca5.png";
import imagem6 from "../../assets/forca6.png";



function App() {
  const imagens = [imagem0, imagem1, imagem2, imagem3, imagem4, imagem5,imagem6];

  const [word, setWord] = useState(0);
  const [underline, setUnderline] = useState([]);
  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const [tentativa, setTentativa] = useState([]);
  const [contaErro, setContaErro] = useState(0);
  const [forca, setForca] = useState(imagens[contaErro])
  return (
    <Div>
      <Div className='image-buttonStart'>
        <Imagem forca={forca}/>
        <ButtonStart
        setWord={setWord}
        underline={underline}
        setUnderline={setUnderline}
        setButtonsDisabled={setButtonsDisabled}
        tentativa={tentativa}
        setTentativa={setTentativa}
        palavras={palavras}
        />
      </Div>
      <div className='button-container'>
        {alfabeto.map((l) =>(
        <Button key={l} 
        letra={l}
        setUnderline={setUnderline}
        word={word}
        underline={underline}
        setTentativa={setTentativa}
        buttonsDisabled={buttonsDisabled}
        tentativa={tentativa}
        palavras={palavras}
        contaErro={contaErro}
        setContaErro={setContaErro}
        setForca={setForca}
        imagens={imagens}
        />))}
      </div>
    </Div>
  );
}

export default App;
