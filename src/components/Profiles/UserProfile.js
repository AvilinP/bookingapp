import React, {useState, useEffect} from "react";
import axios from "axios";
import MyOrders from "../MyOrders";
import OrderList from "../OrderList";
import UserList from "./UserList";
import GetAllList from "./GetAllList";


function UserProfile({ UserDataName, UserDataEmail, UserDataCart, UserDataAddress, getAllUserskey, getAllUsersName , getAllUsersEmail }) {

    const getAdmin = localStorage.getItem("role")
    const getUsername = useState(localStorage.getItem("username"))
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] = useState(localStorage.getItem("jwt"))

    // if (UserDataCart === 0) {
    //     return (
    //         <div>
    //             <p>You've made no orders</p>
    //         </div>
    //     );
    // } 
  

    return (
        <>

        <div className="min-h-screen flex justify-center py-20 px-4 sm:px-6 lg:px-8">


           {getAdmin === "Admin" ? 
           
           
           <div> {getUsername} is an admin 

                <div>

                   Your profile information: <br/><br/>
                   Username: {UserDataName} <br/>
                   Email: {UserDataEmail}   <br/>

                </div>

                <div className="mt-12"> 
                
               <GetAllList />


                </div>

           </div> 
           
           
           : 
           
           
           <div className="min-h-screen"> {getUsername}  is NOT an admin.  <br/><br/>

                   <div>
                   
                   Your profile information: <br/>
                   Username: {UserDataName} <br/>
                   Email: {UserDataEmail}   <br/>
 
                   Orders made: {UserDataCart}  <br/>

                    <button className="btn"> Delete profile </button>
                    <button className="btn"> Update profile </button>
                   </div>
                
                    <div className="mt-10">
   
                    {UserDataCart === 0 ?  <p> You've made no previous orders </p> : <p> Your previous orders. </p> }

                       <div> 
                            <OrderList>
                                <MyOrders/>
                            </OrderList>
                        </div>
                    
                    </div>

            </div> 
           
           
           
           
           }

        </div>
       
        </>
    )
}

export default UserProfile
