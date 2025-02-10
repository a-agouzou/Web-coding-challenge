import { useState, useEffect } from 'react';
import TodoList from '../components/todo/TodoList';
import TodoForm from '../components/todo/TodoForm';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const completed = todos.filter(todo => todo.status === 'Completed').length;
    setStats({
      total: todos.length,
      completed,
      pending: todos.length - completed
    });
  }, [todos]);

  const fetchTodos = async () => {
    try {
      const data = await getTasks();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (todo) => {
    try {
      const newTodo = await createTask(todo);
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleUpdateTask = async (id, updates) => {
    try {
      await updateTask(id, updates);
      setTodos((todos) =>
        todos.map((todo) => (todo._id === id ? { ...todo, ...updates } : todo))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTodos((todos) => todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Todo List</h1>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-100">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded">
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
                <p className="text-sm text-gray-600">Total</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded">
                <p className="text-2xl font-bold text-gray-800">{stats.completed}</p>
                <p className="text-sm text-gray-600">Done</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded">
                <p className="text-2xl font-bold text-gray-800">{stats.pending}</p>
                <p className="text-sm text-gray-600">Pending</p>
              </div>
            </div>
            <TodoForm onSubmit={handleCreateTask} />
          </div>
          <div className="h-[500px] overflow-y-auto scrollbar-container">
            <div className="p-6">
              {todos.length === 0 ? (
                <p className="text-center text-gray-500 py-4">
                  No tasks yet. Add your first task above!
                </p>
              ) : (
                <TodoList todos={todos} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;