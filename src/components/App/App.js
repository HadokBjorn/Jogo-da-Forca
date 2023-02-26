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
  const [underline, setUnderline] = useState('')

    function handleColor(caractere){
      console.log(caractere);
    }

    console.log(palavras[word]);

    function SorteiaPalavra(){
      const indiceDaPalavra = parseInt(Math.random()*palavras.length);
      const underlines = [];
      const caracteresDaPalavra = palavras[indiceDaPalavra].split('');
      caracteresDaPalavra.map(() => underlines.push('_'));
      setWord(indiceDaPalavra);
      setUnderline(underlines.join(' '));
      console.log(caracteresDaPalavra);
      console.log(underlines);
    }


  return (
    <Div>
      <Div className='image-buttonStart'>
        <Imagem/>
        <ButtonStart onClick={SorteiaPalavra} sortWord={underline}/>
      </Div>
      <div className='button-container'>
        {alfabeto.map((l) =>(<Button key={l} onClick={() => handleColor({l})} letra={l} />))}
      </div>
    </Div>
  );
}

export default App;
