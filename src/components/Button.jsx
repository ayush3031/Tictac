import React from 'react'

export default function Button(props) {
  return (
    <div className='text-zinc-100  text-[5vh] flex flex-col items-center'>
        <h1>{props.win==='1'?<span>Player 1</span>:<span>Player 2</span>} Wins!</h1>
        <p className='text-zinc-100 border-[0.5px] border-green-500 text-[3vh] p-[10px] m-[5vh] rounded-md'>Note:Refresh to start a new Game</p>
    </div>
  )
}
