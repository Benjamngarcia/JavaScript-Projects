import { Dispatch, SetStateAction } from "react"

type FilterProps = {
  filter: string,
  setFilter: Dispatch<SetStateAction<string>>
}

function Filter(props: FilterProps): JSX.Element {
  const { filter, setFilter } = props

  return (
    <section className="container mx-auto px-4 mt-8">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button
          className={`
            ${filter === "all" ?
              'text-blue-600 hover:text-gray-400' : 'text-gray-400 hover:text-blue-600'
            }
          `}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`
          ${filter === "active" ?
            'text-blue-600 hover:text-gray-400' : 'text-gray-400 hover:text-blue-600'
          }
        `}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`
          ${filter === "completed" ?
            'text-blue-600 hover:text-gray-400' : 'text-gray-400 hover:text-blue-600'
          }
        `}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  )
}

export default Filter