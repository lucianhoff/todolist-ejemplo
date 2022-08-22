import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import List from './components/List'
function App() {
  
  const [tareas, useTareas] = useState([])
  
  const agregarTarea = (tarea) => {
    if ( tarea.nombre !== '' ) useTareas([...tareas, tarea]);
  }
  
  return (
    <>
      <Form agregarTarea={agregarTarea} />
      <List tareas={tareas} />
    </>
  )
}

export default App
