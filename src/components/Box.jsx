import React, { useEffect, useState } from 'react'


export default function Box(props) {

  return (
    <button onClick={props.onclick} className='w-[12vh] h-[12vh] bg-zinc-200 flex justify-center items-center border-[1px] border-zinc-800 text-[7vh] '>
        {props.val}
    </button>
  )
}
