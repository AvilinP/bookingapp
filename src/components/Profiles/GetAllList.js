import React, {useState, useEffect} from "react";
import axios from "axios";
import GetAllUsers from "./GetAllUsers";

export default function GetAllList() {

   const [allUsers, setAllUsers] = useState([])   
   const [token, setToken] = useState(localStorage.getItem("jwt"))


    useEffect(() => {

                const fetchData = async () => {

                    try {
                        const response = await axios.get(`http://localhost:1337/users`
                        ,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                        
                        )
                        setAllUsers(response.data)
                        console.log(response.data) 
                    }

                    catch (err) {
                        console.log(err)
                    }

                }
                fetchData()

        }, [])


    return (
  <>

                    {allUsers.map((getAll) => {
                        return (
                            <GetAllUsers
                                getAllUserskey={getAll.id}
                                getAllUsersName={getAll.username}
                                getAllUsersEmail={getAll.email}
                                getAllUsersRole={getAll.role.name}

                            />
                        )
                    })}
            
        </>
    )
}


