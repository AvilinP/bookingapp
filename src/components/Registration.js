import React, { useState, useEffect } from "react";
import axios from "axios";



function Registration() {

    const initialValues = {
        username: "",
        email: "",
        password: ""
    }

    const [registerValues, setRegisterValues] = useState(initialValues)


    function handleOnChange(e) {
        setRegisterValues({ ...registerValues, [e.target.name]: e.target.value })
        console.log(registerValues.username, registerValues.email, registerValues.password)
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        const response = axios.post('http://localhost:1337/auth/local/register', {
            username: registerValues.username,
            email: registerValues.email,
            password: registerValues.password,
        })
        console.log(response)

     
    }

    function msg() {
           
        if (registerValues.username === true) {
            alert('Try again!')
        } else {
            alert('Successfully registered!')
        }

    }



    // useEffect(() => {

    //     const registerUser = async()=> {
    //         const response = await axios.post('http://localhost:1337/auth/local/register', {
    //         username: registerValues.username, //data från state
    //         email: registerValues.email,
    //         password: registerValues.password,
    //         })
    //         console.log(response)
    //     }

    //     registerUser(); 

    //     const loginUser = async()=> {
    //         const loginResponse =  await axios.post('http://localhost:1337/auth/local', {
    //             identifier: 'user3@gmail.com',
    //             password: 'Password1234',
    //           })

    //     }

    //     loginUser();


    // }, [])




    return (
        <div>
            <div className="min-h-screen flex justify-center py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-2xl">
                            Register / Login
              </h2>

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

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                  </label>
                            </div>

                            <div className="text-sm">
                                <p>
                                    Forgot your password?
                  </p>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn w-full" onClick={msg}>
                                Register
                </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
