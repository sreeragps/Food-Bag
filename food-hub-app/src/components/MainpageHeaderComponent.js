import React from 'react'
import './mainpageHeaderComponent.css'
import SigninComponent from './modals/SigninComponent'
import SignupComponent from './modals/SignupComponent'

const MainpageHeaderComponent=()=>{

    return(
        <div className='mainpage-header-container'>
            <div className='mainpage-header-title'>
            <h3><em>Zomato</em></h3>
            </div>
            <div className='mainpage-header-modals'>
             <SigninComponent/>
             <SignupComponent/>
            </div>
        </div>
    )
}

export default MainpageHeaderComponent;