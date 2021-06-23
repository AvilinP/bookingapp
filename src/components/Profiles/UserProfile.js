import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MyOrders from "../MyOrders";
import OrderList from "../OrderList";
import GetAllList from "./GetAllList";
import Modal from "react-modal";



function UserProfile({ UserDataName, UserDataEmail, UserDataCart}) {

    const [getAdmin] = useState(localStorage.getItem("role"))
    const [getUsername] = useState(localStorage.getItem("username"))
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] = useState(localStorage.getItem("jwt"))

    function DeleteUser() {

        try {
            const deleteResponse = axios.delete(`http://localhost:1337/users/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            console.log("deleted user", deleteResponse)
            console.log("clicked", userId)
            localStorage.clear();
            window.location.reload();

        }

        catch (error) {
            console.log("failed to delete your profile", error.data)
        }

    }

    const modalInitialValues = {
        username: "",
        email: ""
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalFormValues, setModalFormValues] = useState(modalInitialValues)

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


    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }


    useEffect(() => {
        axios.get(`http://localhost:1337/users/${userId}`
            ,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(res => {
                setModalFormValues({
                    username: res.data.username,
                    email: res.data.email
                })
            })
    }, [])



    function handleOnChange(e) {
        setModalFormValues({
            ...modalFormValues,
            [e.target.name]: e.target.value
        })
        console.log(modalFormValues.username, modalFormValues.email)
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        axios.put(`http://localhost:1337/users/${userId}`,
            modalFormValues
            ,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        ).then((response) => {
            console.log(response.data)

        }).then(() => {
            setModalFormValues(modalInitialValues)
        })

    }

    function Reload() {
        window.location.reload()
    }


    return (
        <>

            <div className="min-h-screen flex justify-center py-20 px-4 sm:px-6 lg:px-8">


                {getAdmin === "Admin" ?


                    <div> {getUsername} is an admin

                        <div>

                            Your profile information: <br /><br />
                            Username: {UserDataName} <br />
                            Email: {UserDataEmail}   <br />

                        </div>

                        <div>
                            <Link to="/createProducts"><button className="btn mx-0"> handling products. </button> </Link>
                        </div>

                        <div className="mt-12">

                            <GetAllList />


                        </div>

                    </div>


                    :


                    <div className="min-h-screen"> {getUsername}  is NOT an admin.  <br /><br />

                        <div>

                            Your profile information: <br />
                            Username: {UserDataName} <br />
                            Email: {UserDataEmail}   <br />



                            Orders made: {UserDataCart}  <br />

                            <button className="btn" onClick={DeleteUser}> delete profile. </button>
                            <button className="btn" onClick={openModal}> update profile. </button>
                        </div>

                        <div className="mt-10">

                            {UserDataCart === 0 ? <p> You've made no previous orders </p> : <p> Your previous orders. </p>}

                            <div>
                                <OrderList>
                                    <MyOrders />
                                </OrderList>
                            </div>

                        </div>


                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            ariaHideApp={false}
                            contentLabel="Change profile info-modal"
                        >

                            <button onClick={closeModal}>(X)</button>

                            <form className="my-12" onSubmit={handleOnSubmit}>

                                <input
                                    className="input-border mx-1"
                                    type="text"
                                    name="username"
                                    placeholder="your username" required
                                    value={modalFormValues.username}
                                    onChange={handleOnChange} />

                                <input
                                    className="input-border mx-1"
                                    type="text"
                                    name="email"
                                    placeholder="your email" required
                                    value={modalFormValues.email}
                                    onChange={handleOnChange} />

                                <button
                                    className="btn"
                                    type="submit"
                                    onClick={Reload}>
                                    confirm change.
                                </button>

                            </form>
                        </Modal>

                    </div>

                }


            </div>

        </>
    )
}

export default UserProfile;