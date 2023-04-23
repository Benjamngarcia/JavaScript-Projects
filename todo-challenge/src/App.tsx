import { useState } from "react"
import { Todo } from "./interfaces/interfaces"
import MoonIcon from "./components/icons/MoonIcon"
import Form from "./components/actions/Form"
import List from "./components/actions/List"
import Filter from "./components/actions/Filter"
import Clear from "./components/actions/Clear"

const initialStateTodo: Todo[] = [
  { id: 1, title: "OOP homework", completed: true },
  { id: 2, title: "Practice Typescript", completed: false },
  { id: 3, title: "Meditation", completed: false },
  { id: 4, title: "Read 10 minutes", completed: false },
];

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(initialStateTodo)
  const [filter, setFilter] = useState("all")

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos
      case "active":
        return todos.filter((todo) => !todo.completed)
      case "completed":
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }

  const createTodo = (title: string) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const updateTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const itemsLeft: number = todos.filter((todo) => !todo.completed).length

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }


  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat 
    bg-contain bg-gray-200 min-h-screen">
      <header className="container mx-auto px-4">
        <div className="flex justify-between pt-8">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">Todo</h1>
          <button>
            <MoonIcon fill="#fff" width="26px" height="26px" />
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <Form createTodo={createTodo} />
        <List todosList={filteredTodos()} updateTodo={updateTodo} removeTodo={removeTodo} />
        <Clear itemsLeft={itemsLeft} clearCompleted={clearCompleted} />
      </main>
      <Filter filter={filter} setFilter={setFilter}/>
      <footer className="text-center mt-8 text-gray-400 font-bold">Drag and drop to reorder list</footer>
    </div>
  )
}

export default App
