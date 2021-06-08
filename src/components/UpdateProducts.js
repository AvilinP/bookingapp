import React, {useState, useEffect} from "react";
import axios from "axios";

function UpdateProducts(productId) {

    const formInitialValues = {
        name: "",
        description: "",
        price: "",
    }

    const [formValues, setFormValues] = useState(formInitialValues)
    const [fileData, setFileData] = useState(null)

    const updateProductId = Number(localStorage.getItem("updateProductId"))

    useEffect(() => {
        axios.get(`http://localhost:1337/products/${updateProductId}`)
        .then(res => {
            setFormValues({
                name: res.data.name,
                description: res.data.description,
                price: res.data.price,
            })
        })
    }, [])
    


    function handleOnChange(e) {
        setFormValues({ 
            ...formValues, 
            [e.target.name]: e.target.value 
        })
        console.log(formValues.name, formValues.description, formValues.price)
    }

    function handleOnChangeImg(e) {
        setFileData(e.target.files[0])
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        axios.put(`http://localhost:1337/products/${updateProductId}`, 
            formValues
       ).then((response) => {
            console.log(response.data)

            // img file upload
            const data = new FormData();
            data.append("files", fileData)
            data.append("ref", "product") // append to collection
            data.append("refId", productId) // append to above product id  
            data.append("field", "img") // append to field in collection
            axios.post("http://localhost:1337/upload", data)
                .then((image) => console.log(image))
                .catch((err) => console.log(err))
                

        }).then(() => {
            setFormValues(formInitialValues)
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

                    <input className="input-border w-52 mt-4 mb-4"
                        id="file"
                        type="file"
                        name="file"
                        onChange={handleOnChangeImg}
                        required
                    />


                    <button className="btn mt-4">update product(s).</button>

                </form>

            </div>

        </>
    )
}


export default UpdateProducts
