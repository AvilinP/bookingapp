import React, { useState } from 'react'


const isAdmin = true;

function Form() {


  const initialValues = {
    productName: " ",
    productPrice: " "
  }
  const [formValues, setFormValues] = useState(initialValues)


  function onHandleSubmit(e) {
    e.preventDefault();
    console.log(formValues)

  }


  function onHandleChange(e) {
    console.log("SINGLE NAME ", e.target.name);
    console.log("VALUE", e.target.value);
    console.log("Form values ", formValues);

    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div class="flex flex-row flex-wrap justify-center">

        {isAdmin ?
          (<form onSubmit={onHandleSubmit} >
            <label>First Name </label>
            <input placeholder="Ange product name" className="border" value={formValues.productName} name="productName" onChange={onHandleChange} />

            <label> Last Name </label>
            <input placeholder="Ange price " type="number" name="Prices" value={formValues.productPrice} onChange={onHandleChange} />

            <button> Lägg till</button>

          </form>)
          :
          (<div> Du har inte behörighet att se denna sida</div>)}

      </div>
    </>
  )
}

export default Form;