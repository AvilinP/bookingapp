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
          (<form className="mt-12 flex flex-col flex-wrap items-center justify-center" onSubmit={onHandleSubmit} >
            <label>First Name </label>
            <input type="name" className="border" value={formValues.firstName} name="firstName" onChange={onHandleChange} />

            <label> Last Name </label>
            <input type="name" className="border" value={formValues.lastName} name="lastName" onChange={onHandleChange} />

            <label> Address </label>
            <input type="name" className="border" value={formValues.address} name="address" onChange={onHandleChange} />


            <label> Mobile Number </label>
            <input type="name" className="border" value={formValues.telephone} name="telephone" onChange={onHandleChange} />

            <Link to="/mybookings">
              <button className="text-indigo-500 px-6 mt-3 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Confirm Booking</button>
            </Link>


          </form>)
          :
          (<div> You're not an admin </div>)}

      </>
  )
}

export default Form;
