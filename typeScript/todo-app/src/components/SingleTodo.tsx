import React, { useRef, useState } from 'react';
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdOutlineDoneOutline } from "react-icons/md";
import { Todo } from "../Model";
import { toast } from 'react-toastify';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos, index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, isDone: !todoItem.isDone };
        } else {
          return todoItem;
        }
      })
    );
    toast.success("Task Done!");
  };

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todoItem) => {
        return todoItem.id !== id;
      })
    );
    toast.info("Task deleted");
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, todo: editTodo };
        } else {
          return todoItem;
        }
      })
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
              <input
                ref={inputRef}
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="todos__single--text"
              />
            ) : todo.isDone ? (
              <s className="todos__single--text">{todo.todo}</s>
            ) : (
              <span className="todos__single--text">{todo.todo}</span>
            )}

            <div>
              <span
                className="icon"
                onClick={() => {
                  if (!edit) {
                    setEdit(!edit);
                  }
                }}
              >
                <FiEdit2 />
              </span>
              <span className="icon" onClick={() => handleDelete(todo.id)}>
                <RiDeleteBin5Fill />
              </span>
              <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdOutlineDoneOutline />
              </span>
            </div>
          </form>
        </div>
      )}
    </Draggable>
  );
};

export default SingleTodo;
