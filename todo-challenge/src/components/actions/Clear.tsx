type ClearProps = {
  itemsLeft: number,
  clearCompleted: () => void
}

function Clear(props: ClearProps): JSX.Element {
  const { itemsLeft, clearCompleted } = props
  return (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md 
    dark:bg-gray-800 transition-all duration-700">
      <span className="text-gray-400">{itemsLeft} items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>Clear completed</button>
    </section>
  )
}

export default Clear