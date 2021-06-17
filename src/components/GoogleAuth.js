import React, { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import axios from "axios"

function GoogleAuth() {
    const location = useLocation()
    let history = useHistory();
    const userId = localStorage.getItem("userId")


    useEffect(() => {
        if (!location) {
            return
        }
        const { search } = location
        axios({
            method: "GET",
            url: `http://localhost:1337/auth/google/callback?${search}`,
        })
            .then(res => {
            localStorage.setItem("jwt", res.data.jwt)
            localStorage.setItem("userId", res.data.user.id)
            localStorage.setItem("provider", res.data.user.provider)
            localStorage.setItem("username", res.data.user.username)
            localStorage.setItem("role", res.data.user.role.name)
            console.log(res)

            }), [location]


        })

   

    return (

        <div>

        </div>
    )
}

export default GoogleAuth;