import React, { useState } from 'react'

const ExpenseForm = ({onaddexpense }) => {
    
   const [title , settitle] =  useState("")
   const [amount , setamount ] = useState("")

   const handler = (e) =>{
      e.preventDefault()

      console.log(title , amount)

    if(!title.trim() || !amount  ){

        alert("required field are missing")
    }
    onaddexpense(title , amount)

  settitle("")
  setamount("")
   }

 

  return (
    <div>
     <form onSubmit={handler} >

  <input type="text"  value={title}  placeholder='title' onChange={(e)=>settitle(e.target.value)} />
  <input type="text"  value={amount} placeholder='Amount' onChange={(e)=>setamount(e.target.value)} />

  <button type='submit'>add </button>

        </form>
        <br />
        <br />
    </div>
  )
}

export default ExpenseForm