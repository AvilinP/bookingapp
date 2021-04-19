import React, {useState} from 'react'


const isAdmin=true;

function Form() {


    const initialValues = {
        productName:" ",
        productPrice: " "
    }
    const [formValues, setFormValues] = useState(initialValues)


    function onHandleSubmit(e) {
      e.preventDefault();
      
    }
  

    function onHandleChange(e) {
        setFormValues( {
            ...formValues, 
            [e.target.name]:e.target.value
           } )
          }


    return (
        <>
            
      {isAdmin ?   
      (<form onSubmit={onHandleSubmit} >
            <label> ProductName:  </label> <input className="border" placeholder="Ange product name" value={formValues.productName} name="productName" onChange={onHandleChange} />
            <input className="border " placeholder="Ange price " type="number" name="productPrice" value ={formValues.productPrice} onChange={onHandleChange}/>

            <button className="bg-purple-600">Lägg till</button>
       </form>) 
         : 
         (<div>Du har inte behörighet att se denna sida</div> )}  
        
        </>
    )
}

export default Form;
