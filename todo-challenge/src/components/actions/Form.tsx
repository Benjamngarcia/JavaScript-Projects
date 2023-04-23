
import { useState } from "react";

type FormProps = {
  createTodo: (title: string) => void
}

function Form({ createTodo }: FormProps): JSX.Element {
  const [title, setTitle] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim() === "") {
      return
    }
    createTodo(title.trim())
    setTitle("")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center mt-8"
    >
      <span className="rounded-full border-2 inline-block w-5 h-5" />
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-400 outline-none"
        onChange={handleChange}
      />
    </form>
  )
}

export default Form