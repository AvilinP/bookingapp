import React, {useState, useEffect} from "react";
import axios from "axios";
import UserProfile from "./UserProfile";

export default function UserList() {

    const [userData, setUserData] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] = useState(localStorage.getItem("jwt"))

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get(`http://localhost:1337/users?id=${userId}`
                ,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
                
                )
                setUserData(response.data)
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

                    {userData.map((user) => {
                        return (
                            <UserProfile
                                key={user.id}
                                UserDataName={user.username}
                                UserDataEmail={user.email}
                                UserDataCart={user.user_carts.length}

                            />
                        )
                    })}
            
        </>

        
    )
}

