const Expenseitem = ({item  , onDelete}) => {

         
  return (
    <div className="item-class">
        <p>{item.title}</p>
        <p>{item.amount}</p>
    <button className="delete-btn" onClick={()=>onDelete(item.id)}> Delete</button>
    </div>
  )
}



export default Expenseitem