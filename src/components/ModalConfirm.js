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


    const initialValues = {
        name: "",
        timeToAppointment: "",
        mobile: ""
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    const [formValues, setFormValues] = useState(initialValues)


    function openModal() {
        setIsOpen(true)
    }

    function onHandleChange(e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    function onHandleSubmit(e) {
        e.preventDefault();
    }

    function closeModal() {
        setIsOpen(false)
    }


        return (
            <>
                <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={openModal} >boka</button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                    <button onClick={closeModal}>(X)</button>
                    <div>I am a modal</div>
                    <form onSubmit={onHandleSubmit}>
                        <input type="text" name="name" value={formValues.name} onChange={onHandleChange} />
                        <input type="text" name="timeToAppointment" value={formValues.timeToAppointment} onChange={onHandleChange} />
                        <input type="number" name="mobile" value={formValues.mobile} onChange={onHandleChange} />
                        <button type="submit">Send</button>
                    </form>
                </Modal>
            </>
        )
}