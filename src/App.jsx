import React, { useState } from 'react'
import AddNote from './components/AddNote'
import Notes from './components/Notes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'


const App = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [note, setNote] = useState(null)
 
  const addNewNote = (note) => {
    const updatedNotes = [...notes, note]
    setNotes(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
    toast.success("Note added.")
  }

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes))
      toast.success("Note deleted.")
    }
  }


const handleEdit = (note) => {
   const updatedNotes = notes.map((n)=>n.id === note.id ? note : n)
   setNotes(updatedNotes);
   localStorage.setItem('notes', JSON.stringify(updatedNotes))
   toast.success("Note saved.")
}
 
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Notes notes={notes} handleDelete={handleDelete} handleEdit={handleEdit}/>} />
        <Route path='/add' element={<AddNote handleSubmit={addNewNote} />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App