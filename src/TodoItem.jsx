import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'

export default function TodoItem({data, handleDelete, handleEdit}) {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors'>
      <h3 className='text-white text-lg'>{data.des}</h3>
      <div className='flex gap-2'>
        <button 
          onClick={() => handleEdit(data.id)}
          className='p-2 text-blue-400 hover:text-blue-300 transition-colors'
          title="Edit task"
        >
          <FaEdit size={20} />
        </button>
        <button 
          onClick={() => handleDelete(data.id)}
          className='p-2 text-red-400 hover:text-red-300 transition-colors'
          title="Delete task"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  )
}
