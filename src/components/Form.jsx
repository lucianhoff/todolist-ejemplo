import React, { useState } from 'react'

const Form = ({agregarTarea}) => {

    const [input, useInput] = useState('')
    const [prioridad, usePrioridad] = useState('')

  return (
    <>
        <form>
          <input
            id="tarea"
            type="text"
            name="tarea"
            placeholder="Descripción de la tarea"
            required
            onChange={(elemento) => {
                console.log(elemento)
                useInput(elemento.target.value)
            }}
            value={input}
          >
          </input>
          <label htmlFor="prioridad">Prioridad</label> 
          <select 
          name="prioridad" 
          id="prioridad"
          value={prioridad}
          onChange={(e) => usePrioridad(e.target.value)}
          >
            <option value="Baja">baja</option>
            <option value="Media">media</option>
            <option value="Alta">alta</option>
          </select>
          <button onClick={(e) => {
            e.preventDefault()
            agregarTarea({
                nombre: input, 
                prioridad: prioridad !== '' ? prioridad : 'Baja'
            })
            useInput('')
            usePrioridad('')
          }} id="agregar">Agregar!</button>
        </form>
    </>
  )
}

export default Form