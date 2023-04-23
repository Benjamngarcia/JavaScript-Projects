type ClearProps = {
  itemsLeft: number,
  clearCompleted: () => void
}

function Clear(props : ClearProps): JSX.Element {
  const { itemsLeft, clearCompleted } = props
  return (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md">
      <span className="text-gray-400">{itemsLeft} items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>Clear completed</button>
    </section>
  )
}

export default Clear