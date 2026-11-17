import Expenseitem from "./Expenseitem"

const Expenselist = ({ Expenses, onDelete }) => {

  if (Expenses.length === 0) {
    <p>something is not yet</p>
  }

  return (
    <div>
      <ul>
        {
          Expenses.map((item) => (

            <li>
              < Expenseitem
                key={item.id}
                item={item}
                onDelete={onDelete} />
            </li>

          ))
        }
      </ul>

    </div>
  )
}

export default Expenselist