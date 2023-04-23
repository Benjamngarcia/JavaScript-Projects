import { Todo } from "../../interfaces/interfaces"
import CheckIcon from "../icons/CheckIcon"
import CrossIcon from "../icons/CrossIcon"

type ListProps = {
  todo?: Todo,
  updateTodo: (id: number) => void
  removeTodo: (id: number) => void
}

function ListItem(props: ListProps): JSX.Element {
  const { todo, updateTodo, removeTodo } = props
  return (
    <article className="flex gap-4 py-4 px-4 border-b-gray-300 border-b">
      <button
        onClick={() => todo?.id !== undefined && updateTodo(todo?.id)}
        className={`rounded-full border-2 w-5 h-5 flex-none
          ${todo?.completed ?
            "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
          }`
        }>
        {todo?.completed && <CheckIcon />}
      </button>
      <p className={`text-gray-600 grow ${todo?.completed && "line-through"} dark:text-gray-300 transition-all duration-700`}>{todo?.title}</p>
      <button className="flex-none" onClick={() => todo?.id !== undefined && removeTodo(todo?.id)} ><CrossIcon /></button>
    </article>
  )
}

export default ListItem