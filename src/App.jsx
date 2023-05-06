import React, { useState } from 'react'

const App = () => {
const [user,setUser] = useState([])



  const  handleSubmit = (e)=>{
    e.preventDefault()
    const form  = e.target
    const name = form.name.value;
    const email = form.email.value;
    const user = {name , email}
    console.log(user);
      setUser(user)
    form.reset()
  }
  return (
    <div>


      <h2 className='text-5xl text-center my-5  font-bold'> Simple CRUD Server </h2>





   <div className=' flex justify-center'>
   <form className=''  onSubmit={handleSubmit} >
       <input type="text" name="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" placeholder=" Type Your Name  " required /> 
     
       <input type="email" name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" placeholder="  Email" required /> 
   
    <input type="submit" value=" Add user "  className='border-4 px-5'/>

      </form>
   </div>

      <div className='text-center mt-20 '>
       
      </div>




    </div>
  )
}

export default App