import React from 'react'
import './signupComponent.css'

const SignupComponent = () => {
    var modal1 = document.getElementById("myModal1");
   
    function openModal1() {
        modal1.style.display = "block";
    }
    window.onClick = function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none"
        }
    }
    function closeModal1() {
        modal1.style.display = "none";
    }
    return (
        <div className='signup-component-container'>
            <button id="myBtn1" onClick={openModal1}>SignUp</button>

            <div id="myModal1" className="modal1">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={closeModal1}>&times;</span>
                        <div className="modaltitle">
                            <h1>Sign-Up</h1>
                        </div>
                    </div>
                    <div className="modal-body">
                        <label>Email:</label><input type="text" placeholder="Enter your email" />
                        <label>Set-Password:</label><input type="text" placeholder="Set your password" />
                        <label>ConfirmPassword:</label><input type="text" placeholder="confirm your password" />
                    </div>
                    <div className="modal-footer">
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignupComponent;