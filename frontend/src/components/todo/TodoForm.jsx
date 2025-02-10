import { useState } from 'react';

function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, status: 'Pending' });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
}
export default TodoForm;