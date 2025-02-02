import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddNote = ({handleSubmit}) => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        const note = {
            id:new Date().getTime(),
            title,
            content
        }

        handleSubmit(note)

        setTitle('')
        setContent('')
        navigate("/")
    }
  return (
    <div>
        <div className='max-w-xl mx-auto w-full my-12 px-5 flex flex-col gap-4'>
            <h2 className='text-3xl'>Add Note</h2>
            <input type="text" value={title} className='border focus:ring-2 ring-green-500 outline-none rounded-lg p-3' placeholder='Enter title' onChange={(e)=>setTitle(e.target.value)}/>
            <textarea rows={4} value={content} onChange={(e)=>setContent(e.target.value)} className='border outline-none rounded-lg p-3 focus:ring-2 ring-green-500 resize-none' placeholder='Enter content'></textarea>
            <button onClick={handleClick}  className='cursor-pointer rounded-lg outline-none bg-green-500 hover:bg-green-700 p-3'>Submit</button>
        </div>
    </div>
  )
}

export default AddNote