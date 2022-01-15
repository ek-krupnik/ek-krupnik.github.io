import React from 'react';
import mainLogo from '../images/logo-removebg.png';
import './Style.css'

function MainPage() {
    return (
        <div>
            <div class="title"> 
                <img src={mainLogo}
                    width="300">
                </img>

                <h1>Find the perfect place to meet up with your friends</h1>
            </div>

            <div class="main_background">
                <div class="main_menu">
                    <h1></h1>
                    <button type="button">
                        Add person...
                    </button>
                    
                    <button type="button">
                        *First person*
                    </button>

                    <button type="button">
                        *Second person*
                    </button>

                    <button type="submit" class="button_go">
                        Go
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;