import React ,{useContext} from 'react'
import {userinfo} from '../App'

function Stage2() {
    const nm=useContext(userinfo);

    return (
       
        <div>
            <h2>This is stage2..</h2>
            <h2>My Name is {nm.name}</h2>

            <hr></hr>

            <userinfo.Consumer>
            {
                (users)=>{
                    return (
                        <>
                        <h2> {users.dept} </h2>
                        <h2> {users.university} </h2>
                        </>
                        
                    )
                    
                }
            }
            </userinfo.Consumer>
        </div>
    )
}

export default Stage2
