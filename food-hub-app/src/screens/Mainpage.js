import React from 'react'
import MainpageHeaderComponent from '../components/MainpageHeaderComponent'
import MainpageBodyComponent from '../components/MainpageBodyComponent'
const Mainpage=()=>{

    return(
        <div className="mainpage-container">
        <MainpageHeaderComponent/>
        <MainpageBodyComponent/>
        </div>
    )
}

export default Mainpage;