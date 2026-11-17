import { useEffect, useState } from "react"
import ExpenseForm from "./component/ExpenseForm"
import Expenselist from "./component/Expenselist"

export const App = () => {
 
    const [expenses , setExpenses] = useState(()=>{
       const  saved = localStorage.getItem("expense")

      //  if(!saved || saved === "undefined"){
      //      return []
      //  } 
       return saved ? JSON.parse(saved) : []
      // return JSON.parse(saved)
    })

    useEffect(()=>{
      localStorage.setItem("expense" , JSON.stringify(expenses))

    } ,[expenses])

    const Addexpense = (title , amount) =>{

        const newExpense  = {

        id : Date.now(),
        title,
        amount : Number(amount)
      }

      setExpenses([...expenses ,  newExpense ])
    }
    

    const DeleteExpense = (id) =>{
       
    const updatedexpense = 
     expenses.filter((item)=>(

         item.id   !== id

    ))

            setExpenses(updatedexpense)
        }

    const  total = expenses.reduce((sum ,item) =>
        sum + item.amount,0
    )

  return (
    <div style={parentobj}>
    <h1>Expense Tracker App</h1>
    <h1>Total Expense: {total} </h1>
    < ExpenseForm onaddexpense={Addexpense}  />
    < Expenselist  Expenses={expenses} onDelete={DeleteExpense} />
    </div>
  )
}
export default App

const parentobj = {

  border : "2px solid  black" ,
  width :"450px" ,
  margin :"50px auto",
  backgroundColor : "lightgrey",  
  borderRadius :"10px",
  height :"400px",
  padding :"10px"

}