import React, { useContext, useEffect } from 'react'
import {AppContext} from '../App'

const Letter = ({letterpos, attempval}) => {
    const  {board, correctWord, actualAttempt,disabledLetters, setDisabledLetters}  = useContext(AppContext);
    const letter = board[attempval][letterpos];

    const correct = correctWord.toUpperCase()[letterpos] ===letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    
    const letterState = 
    actualAttempt.attempt > attempval && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
      if (letter !== "" && !correct && !almost){
        setDisabledLetters((prev) => [...prev, letter]);
      }
    }, [actualAttempt.attempt]);
    
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter