import React, { useState } from 'react'
import TaskForm from './TaskForm'
import Tasklist from './Tasklist';
import './Task.css';

export default function TaskManager() {
    const [task, settask] = useState([])
    const addtask = (text) => {
        const newTask = { id: Date.now(), text, Completed: false };
        settask([...task, newTask])
    }
    const toggletask = (id) => {
        settask(task.map((tasks) => {
            return tasks.id == id
                ? { ...tasks, Completed: !tasks.Completed }
                : tasks
        }))
    }

    const deleteTask = (id) => {
        const filterTask = task.filter((tasks) => {
            return tasks['id'] !== id
        })
        settask(filterTask)
    }

    return (
        <>
            <center style={{position:'relative',top:'150px'}}>
                <h1>TASK MANAGER</h1><br />
                <TaskForm addtask={addtask} />

                <Tasklist
                    task={task}
                    toggletask={toggletask}
                    deleteTask={deleteTask} />

                <p>Tasks:{task.length}</p>
            </center>
        </>
    )
}
