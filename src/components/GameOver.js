import React, { useContext } from 'react'
import { AppContext } from '../App'

const GameOver = () => {
    const {gameOver, setGameOver, correctWord, actualAttempt} = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "Has encontrado la palabra correcta" : "Has perdido"}</h3>
        <h1> La palabra correcta es : {correctWord}</h1>
        {gameOver.guessedWord && (<h3>Lo has adivinado en {actualAttempt.attempt} intentos</h3>)}
        </div>
  )
}

export default GameOver