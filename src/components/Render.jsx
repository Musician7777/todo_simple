import React from 'react'

const Render = (props) => {
  const renderData = props.data.map((elem)=>{
        return <li 
        className='text-xl border-b mb-3' 
        key={elem.id}
        >{elem.title}
         | <span
            onClick={() => deleteHandler(elem.id)}
           >Delete</span></li>
    })
    const deleteHandler = (id) =>{
      const filteredData = props.data.filter((elem)=> elem.id != id);
      props.setData(filteredData);
    }
  return (
    <div className='h-full p-5 px-10 border rounded-md overflow-auto'>
      <h1 className='text-2xl mb-5'>Todos</h1>
      <ol className='list-decimal'>{renderData}</ol>
    </div>
  )
}

export default Render