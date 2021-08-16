import React, {useState} from "react";
import Modal from "react-modal";


export default function ModalConfirm() {

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
        timeToAppointment: "",
        mobile: ""
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalFormValues, setModalFormValues] = useState(modalInitialValues)


    function openModal() {
        setIsOpen(true)
    }

    function onHandleChange(e) {
        setModalFormValues({ ...modalFormValues, [e.target.name]: e.target.value })
    }

    function onHandleSubmit(e) {
        e.preventDefault();
    }

    function closeModal() {
        setIsOpen(false)
    }


        return (
            <>
                <button className="btn w-48 md:w-96" onClick={openModal} >modal.</button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <button onClick={closeModal}>(X)</button>
                    <div>added to cart.</div>
                    <form onSubmit={onHandleSubmit}>
                        <input type="text" name="name" value={modalFormValues.name} onChange={onHandleChange} />
                        <input type="text" name="timeToAppointment" value={modalFormValues.timeToAppointment} onChange={onHandleChange} />
                        <input type="number" name="mobile" value={modalFormValues.mobile} onChange={onHandleChange} />
                        <button type="submit">Send</button>
                    </form>
                </Modal>
            </>
        )
}