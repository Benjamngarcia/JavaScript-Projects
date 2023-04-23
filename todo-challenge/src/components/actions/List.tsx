import { Todo } from "../../interfaces/interfaces"
import ListItem from "./ListItem"

type todosListProps = {
  todosList?: Todo[],
  updateTodo: (id: number) => void
  removeTodo: (id: number) => void
}

function List(props: todosListProps): JSX.Element {
  const { todosList, updateTodo, removeTodo } = props
  return (
    <div className="bg-white rounded-t-md mt-8">
      {todosList?.map((todo) =>
        <ListItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      )}
    </div>
  )

}

export default List