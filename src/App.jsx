import { useState } from 'react';
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid';

function App() {
  const[notes, setNotes] = useState([]);
  const[activeNote, setActiveNote] = useState(false);

  //Note追加
  const onAddNote = () => {
    console.log("新しいノートを追加しました。")
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes,newNote]);
    console.log(notes);
  }


//Note削除
const onDeleteNote = (id) => {
  const filterNotes = notes.filter((note) => note.id !== id);
  setNotes(filterNotes);
}

  return (
    <>
      <div className="App">
        <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        notes={notes}/>
        <Main />
      </div>
    </>
  )
}

export default App
