import React, { useState } from 'react';
import {Link} from "react-router-dom";


const isAdmin = true;

function Form() {


  const initialValues = {
    firstName: " ",
    lastName: " ",
    address: " ",
    telephone: " ",

  }
  const [formValues, setFormValues] = useState(initialValues)


  function onHandleSubmit(e) {
    e.preventDefault();
    console.log(formValues)

  }


  function onHandleChange(e) {

    console.log("Form values ", formValues);

    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }


  return (
    
      <>

        {isAdmin ?
          (
          <div className="min-h-screen">
          <form className="mt-12 flex flex-col items-center" onSubmit={onHandleSubmit} >
            <label>First Name </label>
            <input type="name" className="input-border" value={formValues.firstName} name="firstName" onChange={onHandleChange} />

            <label> Last Name </label>
            <input type="name" className="input-border" value={formValues.lastName} name="lastName" onChange={onHandleChange} />

            <label> Address </label>
            <input type="name" className="input-border" value={formValues.address} name="address" onChange={onHandleChange} />


            <label> Mobile Number </label>
            <input type="name" className="input-border" value={formValues.telephone} name="telephone" onChange={onHandleChange} />

            <Link to="/cart">
              <button className="btn  mt-4">buy item(s).</button>
            </Link>


          </form>
          </div>)
          :
          (<div> You're not an admin </div>)}

      </>
  )
}

export default Form;
