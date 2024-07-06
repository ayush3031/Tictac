import React, { useEffect, useState } from 'react'
import Box from './components/Box'
import Button from './components/Button';
import Title from './components/Title';

export default function App() {

  const [state, changeState] = useState(Array(9).fill(null));

  const [isX, changeX] = useState(true);

  const [winX,changewin]=useState(-1);

 

  function handleClick(index) {
    //console.log('hello');
    if (state[index] === null) {
      const copy = state;
      isX ? copy[index] = 'X' : copy[index] = 'O';

      changeState(copy);
      changeX(!isX);

      //rows for X
      if (state[0] === state[1] && state[1] === state[2]) {
        if(state[1] === 'X') changewin(1);
        if(state[1] === 'O')changewin(0); 
      }
      else if (state[3] === state[4] && state[4] === state[5]) {
        if(state[3] === 'X') changewin(1);
        if(state[3] === 'O')changewin(0); 
      }
      else if (state[6] === state[7] && state[7] === state[8]) {
        if(state[6] === 'X') changewin(1);
        if(state[6] === 'O')changewin(0); 
      }

      //columns
      if (state[0] === state[3] && state[3] === state[6]) {
        if(state[0] === 'X') changewin(1);
        if(state[0] === 'O')changewin(0); 
      }
      else if (state[1] === state[4] && state[4] === state[7]) {
        if(state[1] === 'X') changewin(1);
        if(state[1] === 'O')changewin(0); 
      }
      else if (state[2] === state[5] && state[5] === state[8]) {
        if(state[2] === 'X') changewin(1);
        if(state[2] === 'O')changewin(0); 
      }
      else if(state[0]===state[4]&&state[4]===state[8]){
        if(state[0] === 'X') changewin(1);
        if(state[0] === 'O')changewin(0); 
      }
      else if(state[2]===state[4]&&state[4]===state[6]){
        if(state[2] === 'X') changewin(1);
        if(state[2] === 'O')changewin(0); 
      }
    }
  }
  return (
    <div className='h-screen bg-zinc-900  flex flex-col items-center justify-center'>
      <div>
        <Title/>
      </div>
      {winX==-1 ?<div className='flex gap-[10vw]'><div className=' flex flex-col items-center justify-center'>
        <div className=' flex'>
          <Box onclick={() => handleClick(0)} val={state[0]} />
          <Box onclick={() => handleClick(1)} val={state[1]} />
          <Box onclick={() => handleClick(2)} val={state[2]} />
        </div>
        <div className=' flex'>
          <Box onclick={() => handleClick(3)} val={state[3]} />
          <Box onclick={() => handleClick(4)} val={state[4]} />
          <Box onclick={() => handleClick(5)} val={state[5]} />
        </div>
        <div className=' flex'>
          <Box onclick={() => handleClick(6)} val={state[6]} />
          <Box onclick={() => handleClick(7)} val={state[7]} />
          <Box onclick={() => handleClick(8)} val={state[8]} />
        </div>
        </div>
        <div className='text-zinc-100 text-[3vw] border-[1px] border-zinc-200 p-[2vw]'>
          <span className='border-b-[1px] border-zinc-200'>Rules:</span>
          <h1>Player 1 has X</h1>
          <h1>Player 2 has O</h1>
          <h1 className='border-b-[1px] border-zinc-200'>Player {isX? <span>1</span>:<span>2</span> }'s turn to mark</h1>
        </div>
      </div>:
      <div>
        {winX===1?<Button win={'1'}/>:<Button win={'0'}/>}
      </div>}
    </div>

  )
}
