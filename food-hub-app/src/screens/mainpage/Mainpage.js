import React from 'react'
import MainpageHeaderComponent from '../../components/mainpageheader/MainpageHeaderComponent'
import MainpageBodyComponent from '../../components/mainpagebody/MainpageBodyComponent'
const Mainpage=()=>{

    return(
        <div className="mainpage-container">
        <MainpageHeaderComponent/>
        <MainpageBodyComponent/>
        </div>
    )
}

export default Mainpage;