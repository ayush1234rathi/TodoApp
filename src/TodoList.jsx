import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({data, handleDelete, handleEdit}) {
  return (
    <div className='space-y-4'>
      {data.length === 0 ? (
        <p className='text-gray-400 text-center py-4'>No tasks yet. Add one above!</p>
      ) : (
        <ul className='space-y-2'>
          {data.map((item) => (
            <li key={item.id}>
              <TodoItem data={item} handleDelete={handleDelete} handleEdit={handleEdit} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
