import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { FaPlus } from 'react-icons/fa';

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem('todos')) || [];
    setData(d);
  }, [setData]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    let newID = 0;
    if (data.length !== 0)
      newID = data[data.length - 1].id;
    if(text.length==0)  return;
    const newData = { id: newID + 1, des: text };
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem('todos', JSON.stringify(updatedData));
    setText("");
  }
  function handleDelete(id){
    const newData = data.filter(item=> item.id!=id);
    setData(newData);
    localStorage.setItem('todos', JSON.stringify(newData));
  }
  function handleEdit(id){
    let edit = data.filter(item=>item.id==id);
    setText(edit[0].des);
    handleDelete(edit[0].id);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-cyan-900 to-gray-800 flex flex-col items-center py-8 px-4'>
      <div className='w-full max-w-2xl'>
        <h1 className='text-4xl font-bold text-white text-center mb-8'>Todo App</h1>
        <div className='flex gap-2 mb-8'>
          <input 
            type="text" 
            value={text} 
            onChange={handleChange}
            placeholder="Add a new task..."
            className='flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button 
            onClick={handleClick}
            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2'
          >
            <FaPlus /> Add
          </button>
        </div>
        <TodoList data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
