import { useState } from "react";
import EditModal from "./EditModal";
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";

function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg mb-2 hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-3 flex-1">
          <input
            type="checkbox"
            checked={todo.status === "Completed"}
            onChange={() =>
              onUpdate(todo._id, {
                status: todo.status === "Completed" ? "Pending" : "Completed",
              })
            }
            className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-950"
          />
          <span
            className={`flex-1 ${
              todo.status === "Completed"
                ? "line-through text-gray-400"
                : "text-gray-700"
            }`}
          >
            {todo.title}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="p-1.5 text-gray-400 hover:text-blue-500 rounded cursor-pointer"
          >
            <img src={EditIcon} alt="Edit" className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(todo._id)}
            className="p-1.5 text-gray-400 hover:text-red-500 rounded cursor-pointer"
            title="Delete"
          >
            <img src={DeleteIcon} alt="Delete" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        todo={todo}
        onUpdate={onUpdate}
      />
    </>
  );
}

export default TodoItem;
