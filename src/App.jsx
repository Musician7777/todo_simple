import React, { useState } from 'react'
import Create from './components/Create'
import Render from './components/Render'
import Brand from './components/Brand'

const App = () => {
  const [commonData, setCommonData] = useState([]);
  // const colors = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone"];
  // const randomColor = (shade) =>{
  //   let color = Math.floor(Math.floor(Math.random()*22));
  //   let shadeNumber = Math.floor((Math.floor(Math.random() * 9) + 1) * 100);
  //   return `${colors[color]}-${shade==undefined ? shadeNumber : shade}`;
  // }
  return (
    <div className='p-5 w-full h-screen bg-rose-400 flex overflow-hidden'>
      <div className='flex flex-col justify-center flex-2'>
        <Brand></Brand>
        <Create data={commonData} setData={setCommonData}></Create>
      </div>
      <div className='flex-1'>
        <Render data={commonData} setData={setCommonData}></Render>
      </div>
    </div>
  )
}

export default App