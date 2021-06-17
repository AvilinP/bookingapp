import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

function GoogleAuth() {
    // const [auth, setAuth] = useState()
    // const location = useLocation()
    // const [jwt, setJwt] = useState("")


    // useEffect(() => {
    //     if (!location) {
    //         return
    //     }
    //     const { search } = location
    //     axios({
    //         method: "GET",
    //         url: `http://localhost:1337/auth/google/callback?${search}`,
    //     })
    //         .then(res => {
    //         localStorage.setItem("jwt", res.data.jwt)
    //         localStorage.setItem("userId", res.data.user.id)
    //         localStorage.setItem("provider", res.data.user.provider)
    //         localStorage.setItem("username", res.data.user.username)
    //         localStorage.setItem("role", res.data.user.role.name)
    //         console.log(res)
    //         }), [location]

    //     })

    return (

        <div>
            {/* {auth && (
                <>
                    {/* <div>Jwt: {auth.jwt}</div>
                    <div>User Id: {auth.user.id}</div>
                    <div>Provider: {auth.user.provider}</div> 
                </>
            )} */}
        </div>
    )
}

export default GoogleAuth;