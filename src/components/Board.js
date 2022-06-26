import React from 'react'

import Letter from './Letter';

const Board = () => {
    
  return (
    <div className='board'>
        <div className='row'>
            <Letter letterpos={0} attempval={0} />
            <Letter letterpos={1} attempval={0} />
            <Letter letterpos={2} attempval={0} />
            <Letter letterpos={3} attempval={0} />
            <Letter letterpos={4} attempval={0} />
        </div>
        <div className='row'>
            <Letter letterpos={0} attempval={1} />
            <Letter letterpos={1} attempval={1} />
            <Letter letterpos={2} attempval={1} />
            <Letter letterpos={3} attempval={1} />
            <Letter letterpos={4} attempval={1} />
        </div>
        <div className='row'>
            <Letter letterpos={0} attempval={2} />
            <Letter letterpos={1} attempval={2} />
            <Letter letterpos={2} attempval={2} />
            <Letter letterpos={3} attempval={2} />
            <Letter letterpos={4} attempval={2} />
        </div>
        <div className='row'> 
            <Letter letterpos={0} attempval={3} />
            <Letter letterpos={1} attempval={3} />
            <Letter letterpos={2} attempval={3} />
            <Letter letterpos={3} attempval={3} />
            <Letter letterpos={4} attempval={3} />
        </div>
        <div className='row'>
            <Letter letterpos={0} attempval={4} />
            <Letter letterpos={1} attempval={4} />
            <Letter letterpos={2} attempval={4} />
            <Letter letterpos={3} attempval={4} />
            <Letter letterpos={4} attempval={4} />
        </div>
        <div className='row'>
            <Letter letterpos={0} attempval={5} />
            <Letter letterpos={1} attempval={5} />
            <Letter letterpos={2} attempval={5} />
            <Letter letterpos={3} attempval={5} />
            <Letter letterpos={4} attempval={5} />
        </div>
    </div>
  )
}

export default Board