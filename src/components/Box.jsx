import React, { useEffect, useState } from 'react'


export default function Box(props) {

  return (
    <button onClick={props.onclick} className='w-[10vh] h-[10vh] bg-zinc-200 flex justify-center items-center border-[1px] border-zinc-800 text-[6vh] '>
        {props.val}
    </button>
  )
}
