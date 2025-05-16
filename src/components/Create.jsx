import { nanoid } from 'nanoid';
import React, { useState } from 'react'

const Create = (props) => {
    const [value,setValue] = useState('Nothing...');
    const newTodo = {
      id: nanoid(),
      title: value,
      isCompleted: false
    }
    const inputHandler = (e) => {
        setValue(e.target.value);
    }
    const submitHandler = () => {
      const copyData = [...props.data];
      copyData.push(newTodo);
      props.setData(copyData);
      //props.setData([...props.data,newTodo]);
      setValue('');
    }
  return (
    <>
        <div className='mb-5 flex items-center gap-3'>
            <input 
            onChange={inputHandler}
            value={value}
            type='text' 
            placeholder='Todo..' 
            className='p-1 border rounded-sm outline-none'
            ></input>
            <span 
            onClick={submitHandler}
            className='p-1 border rounded-sm'
            >Create</span>
        </div>
    </>
  )
}

export default Create