import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../images/logo-removebg.png';
import './Style.css'

function LogIn() {
    const navigate = useNavigate();
    
    function redirect() {
        navigate('/meetup')   
    }

    return (
        <form class="submit_form">
            <img src={mainLogo}
                width="400">
            </img>

            {/* <h1>Sign in</h1> */}

            <label for="inputEmail"></label>
            <input
                type="email"
                id="inputEmail"
                placeholder="Email address"     
            />

            <label for="inputPassword"></label>
            <input
                type="password"
                id="inputPassword"
                placeholder="Password"
            />

            <div class="remember_button">
                <label>
                    <input type="checkbox"/> Remember me 
                </label>
            </div>

            {/* <div class="submit_button"> */}
                <button type="submit" class="submit_button" onClick={redirect}>
                    Sign in
                </button>
            {/* </div> */}

            <p>© Krupnik Ekaterina 2022</p>
    </form>
    )
}

export default LogIn;