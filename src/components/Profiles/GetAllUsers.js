import React, {useState, useEffect} from "react";
import axios from "axios";
import Modal from "react-modal";


export default function GetAllUsers({getAllUserskey, getAllUsersName, getAllUsersEmail, getAllUsersRole}) {

    const [token, setToken] = useState(localStorage.getItem("jwt"))

    function DeleteUserId() {

            try {

                const deleteUserIdRes = axios.delete(`http://localhost:1337/users/${getAllUserskey}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                console.log("deleted user", deleteUserIdRes)
                console.log("clicked", getAllUserskey)
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
            axios.get(`http://localhost:1337/users/${getAllUserskey}`
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
    
            axios.put(`http://localhost:1337/users/${getAllUserskey}`,
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
                Id: {getAllUserskey} <br/>
                Username: {getAllUsersName} <br/>
                Email: {getAllUsersEmail}   <br/> 
                Role: {getAllUsersRole}    <br/> <br/>
                <button className="btn mx-0" onClick={DeleteUserId}> delete profile. </button>
                <button className="btn" onClick={openModal}> update profile. </button> <br/> <br/>

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
        </>
    )
}

