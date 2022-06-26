
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import GameOver from './components/GameOver';
import Keyboard from './components/Keyboard';
import { boardDefault, generateWordSet } from './Words';

export const AppContext = createContext();


function App() {
  const [board, setBoard] = useState(boardDefault);
  const [actualAttempt, setActualAttempt] = useState({attempt:0 , letterpos:0})
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [gameOver, setGameOver]  = useState({
    gameOver: false,
    guessedWord: false
  })
  
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  },[]);

  const onEnter = () => {
    if(actualAttempt.letterpos !==5)return;

    let currWord = "";
    for(let i = 0; i < 5; i++) {
      currWord += board[actualAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setActualAttempt({attempt: actualAttempt.attempt + 1, letterpos: 0});
    } else {
      alert("La palabra no existe");
    }

    if(correctWord === currWord){
      setGameOver( { gameOver: true, guessedWord:true});
      return;
    }

    if (actualAttempt.attempt === 5){
      setGameOver({gameOver: true, guessedWord:false});
      return;
    }
    
  };
  const onDelete = () => {
    if(actualAttempt.letterpos === 0)return;
    const clickBoard = [...board]
    clickBoard[actualAttempt.attempt][actualAttempt.letterpos - 1] = "";
    setBoard(clickBoard)
    setActualAttempt({...actualAttempt, letterpos:actualAttempt.letterpos - 1});
  };
  const onSelectLetter = (keyVal) => {
    if(actualAttempt.letterpos >4)return;
        const clickBoard = [...board]
        clickBoard[actualAttempt.attempt][actualAttempt.letterpos] = keyVal;
        setBoard(clickBoard)
        setActualAttempt({...actualAttempt, letterpos:actualAttempt.letterpos+1});
  }
  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider 
      value={{board, setBoard, 
      actualAttempt, setActualAttempt, 
      onDelete, onEnter, onSelectLetter, 
      correctWord,
      disabledLetters, setDisabledLetters,
      gameOver, setGameOver,
      
      }}>
        <div className='game'>
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
