import React from 'react'

export default function Tasklist({ task, toggletask, deleteTask }) {
  return (
    <>
      <ul>
        {task.map((tasks, index) => 
          <li key={index}>
            <span 
              onClick={() => toggletask(tasks['id'])}  
              className={tasks['Completed'] ? 'completed' : undefined}
            >
              {tasks['text']}
            </span>
            <span 
              onClick={() => deleteTask(tasks['id'])} 
              className='delete'
            >
              X
            </span>
          </li>
        )}
      </ul>
    </>
  )
}

