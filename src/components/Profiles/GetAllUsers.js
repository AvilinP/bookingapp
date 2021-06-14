import React from "react";

export default function GetAllUsers({getAllUserskey, getAllUsersName, getAllUsersEmail, getAllUsersRole }) {
    return (
        <>
                Id: {getAllUserskey} <br/>
                Username: {getAllUsersName} <br/>
                Email: {getAllUsersEmail}   <br/> 
                Role: {getAllUsersRole}    <br/> <br/>
                <button className="btn mx-0"> Delete profile </button>
                <button className="btn"> Update profile </button> <br/> <br/>  
        </>
    )
}

