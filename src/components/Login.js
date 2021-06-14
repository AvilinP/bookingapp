import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


function Login() {

  const initialValues = {
    email: "",
    password: ""
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [error, setError] = useState("")
  // const [auth, setAuth] = useState("")
  const [username, setUsername] = useState("")
  const [jwt, setJwt] = useState("")
  const history = useHistory();


  function handleOnChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  useEffect(() => {

    const JWT = localStorage.getItem("jwt")
    setJwt(JWT);

  }, [])

  function handleOnSubmit(e) {
    e.preventDefault();

    // axios request to login
    axios.post("http://localhost:1337/auth/local", {
      identifier: formValues.email,
      password: formValues.password,
    })
      .then(response => {
        console.log("User profile", response.data.user)
        console.log("User token", response.data.jwt)
        setUsername(response.data.user.username)

        localStorage.setItem("jwt", response.data.jwt)
        localStorage.setItem("userId", response.data.user.id)
        localStorage.setItem("username", response.data.user.username)
        localStorage.setItem("role", response.data.user.role.name)
        // setAuth(true)
        window.location.reload()
       // history.push("/arrivals")
        
      })


      .catch((err) => {
        console.log(err);
        setError(err.response.data.message[0].messages[0].message)
      })

  }



  return (
    <>

        <div className="min-h-screen flex justify-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>

              <div className="text-white text-2xl text-center pt-2">
                {error}
              </div>

              <p className="mt-6 text-center text-base font-extrabold text-gray-900">Or <Link to="/registration" className="underline">register here</Link></p>

            </div>
            <form className="mt-8 space-y-6"
              onSubmit={handleOnSubmit}
              method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input id="email-address"
                    value={formValues.email}
                    onChange={handleOnChange}
                    name="email"
                    type="email"
                    autoComplete="email" required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input id="password"
                    value={formValues.password}
                    onChange={handleOnChange}
                    name="password"
                    type="password"
                    autoComplete="current-password" required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </div>
              </div>

              <div className="flex items-center justify-between px-2">
                <div className="flex items-center">
                  <input id="remember_me2" name="remember_me" type="checkbox" className="h-4 w-4  focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <p className="font-medium hover:text-indigo-500">
                    Forgot your password?
                  </p>
                </div>
              </div>

              <div>
                <button type="submit" className="btn w-full" >
                  sign in.
                </button>
              </div>
            </form>
          </div>
        </div>

      

    </>
  )
}

export default Login;
