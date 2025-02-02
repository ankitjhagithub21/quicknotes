import { FilePenLine, Trash2 } from 'lucide-react'
import { useState } from 'react'

const Note = ({ note, handleDelete, handleEdit }) => {
    const [isEditable, setIsEditable] = useState(false)
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)

    const handleSave = () => {
        const data = {
            id: note.id,
            title,
            content
        }
        handleEdit(data)
        setIsEditable(false)
    }

    return (
        <>
            {
                isEditable ? <div className='border p-3 rounded-lg flex flex-col gap-3'>
                    <input type="text" placeholder='Edit title' className='border rounded-lg p-2' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder='Edit content' className='border rounded-lg p-2 resize-none' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    <div>
                        <button className='bg-gray-300 text-gray-800  text-sm px-3 py-1 rounded-lg cursor-pointer' onClick={() => setIsEditable(false)}>Cancel</button>
                        <button className='bg-green-500 text-white mx-2 text-sm px-3 py-1 rounded-lg cursor-pointer' onClick={handleSave}>Save</button>
                    </div>
                </div> : <div className='border p-3 rounded-lg' >
                    <div className='flex items-center justify-between  mb-2'>
                        <span>{new Date(note.id).toUTCString().slice(0, 16)}</span>
                        <div className='flex gap-2'>
                            <button onClick={() => handleDelete(note.id)}>
                                <Trash2 color='red' size={20} className='cursor-pointer' />
                            </button>
                            <button onClick={() => setIsEditable(true)}>
                                <FilePenLine color='blue' size={20} className='cursor-pointer' />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <h5 className='text-xl'>{note.title}</h5>
                    <p>{note.content}</p>

                </div>
            }
        </>
    )
}

export default Note