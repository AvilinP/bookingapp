import React, {useState} from "react"


function UserProfile() {

    const isAdmin = localStorage.getItem("role")



    return (
        <div>
            {isAdmin === "Admin" ? <p> is admin </p> : <p> is NOT admin </p> }
        </div>
    )
}

export default UserProfile
