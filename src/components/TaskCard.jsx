import React, { useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext);
  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-400 text-xs'>{task.description}</p>
            <button onClick={() => deleteTask(task.id)} className='bg-red-400 px-2 py-1 rounded-md mt-4 hover:bg-red-300'>Eliminar Tarea</button>
          </div>
  )
}

export default TaskCard