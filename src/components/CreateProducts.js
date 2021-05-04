import React from "react";
import axios from "axios";

export default class CreateProducts extends React.Component {

    state = {
        file: null
    }

    handleChange = (event) => {
        console.log("CreateProducts.handleChange event.target.files", event.target.files)

        this.setState({file:event.target.files[0]})

    }


    handleSubmit = async (event) => {
        event.preventDefault()
        console.log("CreateProducts.handleSubmit this.state.file", this.state.file)

        const data = new FormData()
        data.append('files', this.state.file)

        const  upload_res = await axios({
            method: "POST",
            url: "http://localhost:1337/upload",
            data
        })

        console.log("CreateProducts.handleSubmit upload_res", upload_res)

    }


    render() {

        return (
            <div className="min-h-screen">
                <form className="mt-12 flex flex-col items-center" onSubmit={this.handleSubmit} >

                    <input onChange={this.handleChange} type="file" className="input-border"/>
                    <button className="btn mt-4">create product(s).</button>

                </form>
            </div>
        )

    }


}


