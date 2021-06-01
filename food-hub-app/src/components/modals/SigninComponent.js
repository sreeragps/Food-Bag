import React from 'react'
import './signinComponent.css'

const SigninComponent = () => {
    var modal = document.getElementById("myModal");
    function openModal() {
        modal.style.display = "block";
    }
    window.onClick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
    function closeModal() {
        modal.style.display = "none";
    }
    return (
        <div className='signin-component-container'>
            <button id="myBtn" onClick={openModal}>SignIn</button>

            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="modaltitle">
                            <h1>Sign-in to food-hub</h1>
                        </div>
                    </div>
                    <div className="modal-body">
                        <label>Email:</label><input type="text" placeholder="Enter your email" />
                        <label>Password:</label><input type="text" placeholder="Enter your password" />
                    </div>
                    <div className="modal-footer">
                        <button>Log-in</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SigninComponent;