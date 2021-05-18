import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import {useDispatchCart} from "./CartProvider";


function Card({ product, productName, productPrice, productDescription, productImage }) {

    const dispatch = useDispatchCart();

    const addToCart = (item) => {
        console.log(item)
        dispatch({type: "ADD", item})
    }

    const customStyles = {
        content: {
            // height: '300px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };


    const modalInitialValues = {
        name: "",
        address: "", 
        mobile: ""
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalFormValues, setModalFormValues] = useState(modalInitialValues)


    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function onHandleChange(e) {
        setModalFormValues({ ...modalFormValues, [e.target.name]: e.target.value })
    }

    async function onHandleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:1337/user-carts", {
            name: modalFormValues.name,
            address: modalFormValues.address,
            mobile:Number(modalFormValues.mobile)
        }) 
        console.log("added to userCart",response)
        } 
        catch(error) {
            console.log(error.data)
        }

    }


    return (

        <div className="border-2 border-black flex flex-col">


            <img className="p-1 h-screen object-cover" src={`http://localhost:1337${productImage.formats.small.url}`} alt="Products possible to buy" />

            <div className="flex flex-col items-center pb-2">

                <div className="text-2xl font-bold p-2">
                    {productName}
                </div>

                <h2 className="p-2">
                    {productDescription}
                </h2>

                <div className="text-gray-800 font-extrabold leading-relaxed p-2">
                    {productPrice} SEK
                </div>

                {/* <Link to="/form"> */}
                <button
                    className="btn w-48 md:w-96" onClick={openModal}> modal.</button>
                    <button
                    className="btn w-48 md:w-96" onClick={() => addToCart(product)}> buy.</button>
                {/* </Link> */}

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Add to cart Modal"
                >

                    <button onClick={closeModal}>(X)</button>
                    <div> please fill in your info before adding to cart.</div>
                    <form className="my-12" onSubmit={onHandleSubmit}>

                        <input 
                        className="input-border mx-1" 
                        type="text" 
                        name="name" 
                        placeholder="your name" required
                        value={modalFormValues.name} 
                        onChange={onHandleChange} />

                        <input 
                        className="input-border mx-1" 
                        type="text" 
                        name="address" 
                        placeholder="your address" required
                        value={modalFormValues.address} 
                        onChange={onHandleChange} />

                        <input 
                        className="input-border mx-1" 
                        type="number" 
                        name="mobile" 
                        placeholder="your mobile number" required
                        value={modalFormValues.mobile} 
                        onChange={onHandleChange} />

                        <button 
                        className="btn" 
                        type="submit">add to cart.
                        </button>
                    </form>
                </Modal>
            </div>

        </div>



    )
}

export default Card
