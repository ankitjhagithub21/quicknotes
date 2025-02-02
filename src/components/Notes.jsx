import Note from './Note'

const Notes = ({ notes, handleDelete ,handleEdit}) => {

  return (
    <section>
      <h2 className='text-center text-3xl my-10'>Your Notes</h2>
      {
        notes.length === 0 ? <p className='text-center my-5 text-2xl'>No notes found.</p> : <div className='grid grid-cols-1 p-5 container mx-auto md:grid-cols-3 items-start gap-5'>
          {
            notes.map((note) => {
              return <Note key={note.id} note={note} handleDelete={handleDelete} handleEdit={handleEdit}/>
            })
          }
        </div>
      }
    </section>
  )
}

export default Notes