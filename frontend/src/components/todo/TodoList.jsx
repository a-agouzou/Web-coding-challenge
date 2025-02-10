import TodoItem from "./TodoItem";

function TodoList({ todos, onUpdate, onDelete }) {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
