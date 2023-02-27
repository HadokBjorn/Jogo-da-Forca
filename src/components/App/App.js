import './reset.css';
import Div from './global';
import Imagem from '../Jogo/Imagem/Imagem';
import ButtonStart from '../Jogo/ButtonStart/ButtonStart';
import alfabeto from '../Letras/alfabeto';
import Button from '../Letras/Button';
import palavras from '../../palavras'
import { useState } from 'react';


function App() {
  const [word, setWord] = useState(0);
  const [underline, setUnderline] = useState([]);
  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const [tentativa, setTentativa] = useState([]);
  const [contaErro, setContaErro] = useState(0);
  return (
    <Div>
      <Div className='image-buttonStart'>
        <Imagem/>
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
        />))}
      </div>
    </Div>
  );
}

export default App;
