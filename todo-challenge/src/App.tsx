import { useState, useEffect } from "react"
import { Todo } from "./interfaces/interfaces"
import MoonIcon from "./components/icons/MoonIcon"
import SunIcon from "./components/icons/SunIcon"
import Form from "./components/actions/Form"
import List from "./components/actions/List"
import Filter from "./components/actions/Filter"
import Clear from "./components/actions/Clear"

const initialStateTodos : Todo[] = JSON.parse(localStorage.getItem("todos") || "[]")
const initialStateDarkMode : boolean = localStorage.getItem("theme") === "dark"

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>(initialStateTodos)
  const [filter, setFilter] = useState("all")
  const [darkMode, setDarkMode] = useState<boolean>(initialStateDarkMode)

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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  


  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]
    md:bg-[url('./assets/images/bg-desktop-light.jpg')]
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] 
    md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
    bg-no-repeat bg-contain bg-gray-200 min-h-screen dark:bg-gray-900 
    transition-all duration-700">
      <header className="container mx-auto px-4 md:max-w-xl">
        <div className="flex justify-between pt-8">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">Todo</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {
              darkMode ?
                <SunIcon fill="#fff" width="26px" height="26px" /> :
                <MoonIcon fill="#fff" width="26px" height="26px" />
            }
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        <Form createTodo={createTodo} />
        <List todosList={filteredTodos()} updateTodo={updateTodo} removeTodo={removeTodo} />
        <Clear itemsLeft={itemsLeft} clearCompleted={clearCompleted} />
      </main>
      <Filter filter={filter} setFilter={setFilter} />
      <footer className="text-center mt-8 text-gray-500 font-bold dark:text-gray-400 transition-all duration-700">
        Drag and drop to reorder list
      </footer>
    </div>
  )
}

export default App
