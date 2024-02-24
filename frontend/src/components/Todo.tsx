import React, { useState } from "react";

interface TodoProps {
  todoObject: {
    id: string;
    name: string;
    isDone: boolean;
  };
  onEdit: (id: string, updatedTask: Todo) => void;
  onDelete: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todoObject, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todoObject.name);
  const [editedStatus, setEditedStatus] = useState(todoObject.isDone);

  const handleEdit = () => {
    const updatedTodo = { name: editedName, isDone: editedStatus };
    onEdit(todoObject.id, updatedTodo);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(todoObject.id);
  };

  return (
    <div className="todo-container">
      {isEditing ? (
        <div className="todo-item">
          <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          <input type="checkbox" checked={editedStatus} onChange={(e) => setEditedStatus(e.target.checked)} />
          <button onClick={handleEdit}>Save</button>
          <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="todo-item">
          {/* <input type="checkbox" name="isDone" id="isDone" checked={todoObject.isDone} readOnly /> */}
          <p className={todoObject.isDone ? "strike-through" : ""} style={{ margin: '0', flexGrow: '1' }}>{todoObject.name}</p>
          <div className="action-buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  ); 
}

export default Todo;
