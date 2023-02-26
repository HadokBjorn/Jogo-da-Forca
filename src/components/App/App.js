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
  const[cor, setCor] = useState('blue');

    function handleColor(){
        setCor('red');
    }

  console.log(palavras[word]);

  function SorteiaPalavra(){
    setWord(parseInt(Math.random()*palavras.length));
    console.log(palavras[word]);
  }


  return (
    <Div>
      <Div className='image-buttonStart'>
        <Imagem/>
        <ButtonStart onClick={SorteiaPalavra}/>
      </Div>
      <div className='button-container'>
        {alfabeto.map((l) =>(<Button key={l} onClick={handleColor} letra={l} color={{color:`${cor}`}} />))}
      </div>
    </Div>
  );
}

export default App;
