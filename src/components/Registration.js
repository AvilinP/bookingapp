import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";



function Registration() {

    const initialValues = {
        username: "",
        email: "",
        password: ""
    }

    const [registerValues, setRegisterValues] = useState(initialValues)

    // to show different divs depending on logged in state
    // const [username, setUsername] = useState(""); // example with set username 
    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState("")

    function handleOnChange(e) {
        setRegisterValues({ ...registerValues, [e.target.name]: e.target.value })
        console.log(registerValues.username, registerValues.email, registerValues.password)
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:1337/auth/local/register', {
            username: registerValues.username,
            email: registerValues.email,
            password: registerValues.password,
        }).then((e) => { if(e.data.user) setLoggedIn(true) })
        .catch((err)=> {
            setError(err.response.data.message[0].messages[0].message)})
    }


    return (
        <>
            {loggedIn ? (

                (<div> <Login /> </div>)

            ) : <div className="min-h-screen flex justify-center py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-2xl">
                            Register
                    </h2>

                    <div className="text-white text-2xl text-center pt-2">
                        {error}
                    </div>

                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST"
                        onSubmit={handleOnSubmit}>

                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input
                                    id="username"
                                    name="username"
                                    value={registerValues.username}
                                    onChange={handleOnChange} type="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    value={registerValues.email}
                                    onChange={handleOnChange} type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    value={registerValues.password}
                                    onChange={handleOnChange}
                                    type="password"
                                    required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn w-full">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            }
        </>
    )
}

export default Registration
