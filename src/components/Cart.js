import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useCart, useDispatchCart } from "./CartProvider"
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const CartItem = ({ product, index, handleRemove }) => {
    return (
        <div>
            <article className="px-8 pl-14">
                <div>
                    <div>
                        <img src={`http://localhost:1337${product.img.formats.small.url}`} />
                    </div>
                    <div className="flex flex-col py-4">
                        <h1 className="py-2">{product.name}</h1>
                        <h2 className="py-2">{product.description}</h2>
                        <dl className="py-2">
                            {product.price.toLocaleString("se", {
                                style: "currency",
                                currency: "SEK"
                            })}
                        </dl>
                        <button className="btn w-full m-0" onClick={() => handleRemove(index)}>Remove from cart</button>
                    </div>
                </div>
            </article>
        </div>

    );
};



export default function Cart() {


    const customStyles = {
        content: {
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
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [username, setUsername] = useState(localStorage.getItem("username"))
    const [token, setToken] = useState(localStorage.getItem("jwt"))
    const [productsInCart, setProductsInCart] = useState(localStorage.getItem("productsInCart"))
    const [confirmCart, setConfirmCart] = useState("")
    const items = useCart()
    const dispatch = useDispatchCart()

 
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        setUserId(userId);
   }, [items]);
  

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
                name: username,
                address: modalFormValues.address,
                mobile: Number(modalFormValues.mobile),
                users_permissions_user: userId,
                product: productsInCart 
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
                    ).then(() => {
                    localStorage.removeItem("productsInCart")
                    dispatch({type: "CLEARCART"})
                    })
                        console.log(localStorage)
                        setConfirmCart(true)
                        console.log("added to userCart", response)
                            }
                            catch (error) {
                                console.log(error.data)
                            }

    }


    const totalPrice = items.reduce((total, b) => total + b.price, 0);
 

    const handleRemove = (index) => {
        dispatch({ type: "REMOVE", index });
    };

   

    //shows empty cart but disturbs confirmCart logic with order btn below
    // if (items.length === 0) {
    //     return (
    //         <main className="min-h-screen flex justify-center pt-14">
    //             <p>Cart is empty</p>
    //         </main>
    //     );
    // } 




    return (
        <main className="min-h-screen flex pt-14">
            {items.map((item, index) => (
                <CartItem
                    handleRemove={handleRemove}
                    key={index}
                    product={item}
                    index={index}
                />
            ))}

            <p className="px-8 ml-4 flex flex-col">
                Total price:{" "}
                {totalPrice.toLocaleString("se", {
                    style: "currency",
                    currency: "SEK"
                })}

                <button
                    className="btn mt-12 w-full"
                    onClick={openModal}> buy items.</button>
            </p>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Add to cart Modal"
            >

                <button onClick={closeModal}>(X)</button>
                <div> {confirmCart ? <> Success! <Link to="/order"> <button className="btn" > See your order </button></Link> </> : <> please fill in your info so we can send your order. </>}
                </div>
                <form className="my-12" onSubmit={onHandleSubmit}>

                    <input
                        className="input-border mx-1"
                        type="text"
                        name="name"
                        placeholder="your name" required
                        value={username}
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
                        type="submit">
                        confirm order.
                    </button>

                </form>
            </Modal>


        </main>
    );
}

