import React from 'react'

const List = ({tareas}) => {

    return (
        <>
            <h3>Tareas</h3>
            <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
            <ul id="lista-tareas">
                {tareas.map((tarea, i) => {
                    return (
                        <li key={i}>Tarea: {tarea?.nombre} - Prioridad: <span className={tarea?.prioridad === 'Alta' ? 'alta' : null}>{tarea?.prioridad}</span></li>
                    )
                })}
            </ul>
            <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
        </>
    )
}

export default List