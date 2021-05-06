import React, { useState } from "react";
import axios from "axios";


function CreateProducts() {

    const formInitialValues = {
        name: "",
        description: "",
        price: 0,
    }

    const [formValues, setFormValues] = useState(formInitialValues)


    function handleOnChange(e) {
        setFormValues({...formValues, [e.target.name] : e.target.value})
        console.log(formValues.name, formValues.description, formValues.price)
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:1337/products" , {
            name: formValues.name,
            description: formValues.description,
            price: formValues.price,
        }).then(  (response)=> {
            console.log(response.data)
   
   
   
        }).catch(  (err)=> {
               console.log(err)
        })
    }


    return (
        <>
            <div className="min-h-screen">
                <form className="mt-12 flex flex-col items-center" onSubmit={handleOnSubmit} >

                    <input className="input-border mb-2"
                    id="name" 
                    type="text" 
                    name="name"
                    value={formValues.name}
                    onChange={handleOnChange} 
                    required
                    placeholder="Name"
                    /> 
                    <input className="input-border mb-2"
                    id="description" 
                    type="text" 
                    name="description"
                    value={formValues.description}
                    onChange={handleOnChange} 
                    required
                    placeholder="Description"
                    /> 
                    <input className="input-border mb-2"
                    id="price" 
                    type="number" 
                    name="price"
                    value={formValues.price}
                    onChange={handleOnChange} 
                    required
                    placeholder="Price"
                    /> 
 

                    <button className="btn mt-4">create product(s).</button>

                </form>
            </div>
        </>
    )
}

export default CreateProducts



