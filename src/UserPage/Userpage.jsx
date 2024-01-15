import { useState } from "react";
import "./Userpage.css"

function Instagram () {
    const [login,setlogin]=useState(true);

    const loginSwitch = () => {
            setlogin(!login)
    }
        
    return (
        <> 
           <div className='Container2'>
                <div id='page'>
                    <h1 id='header'>Instagram</h1>
                    <form>
                        <input hidden={login} id='inputs' placeholder='Mobile Number, or Email'></input>
                        <input hidden={login} id='inputs' placeholder="Full Name"></input>
                        <input id='inputs' placeholder='Phone number, uesrname, or email'></input>
                        <input id='inputs' placeholder="Passsword"></input>
                    </form>
                    <button onClick={loginSwitch} id="Btn_1">{login?"Sign in":"Sign up"}</button>
                     <div id='footer'>
                         {login?"Don't have account?":"have an account?"}<span>{login?"Sign up":"Log in"}</span>
                     </div>
                </div>
           </div>
        </>
    )
}


export default Instagram ;