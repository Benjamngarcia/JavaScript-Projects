import { Todo } from "../../interfaces/interfaces"
import { Droppable, Draggable } from '@hello-pangea/dnd';

import ListItem from "./ListItem"

type todosListProps = {
  todosList?: Todo[],
  updateTodo: (id: number) => void
  removeTodo: (id: number) => void
}

function List(props: todosListProps): JSX.Element {
  const { todosList, updateTodo, removeTodo } = props
  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="rounded-t-md bg-white mt-8 overflow-hidden dark:bg-gray-800 transition-all duration-700">
          {todosList?.map((todo, index) => (
            <Draggable
              key={todo.id}
              index={index}
              draggableId={String(todo.id)}
            >
              {(draggableProvided) => (
                <ListItem
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                  todo={todo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>

  )

}

export default List