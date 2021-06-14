import React, {useState} from "react";
import axios from "axios";


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


    return (
        <>
                Id: {getAllUserskey} <br/>
                Username: {getAllUsersName} <br/>
                Email: {getAllUsersEmail}   <br/> 
                Role: {getAllUsersRole}    <br/> <br/>
                <button className="btn mx-0" onClick={DeleteUserId}> delete profile. </button>
                <button className="btn"> update profile. </button> <br/> <br/>  
        </>
    )
}

