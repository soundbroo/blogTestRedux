import React from 'react'
import './Post.css'
import loader from '../img/loader.gif'
export const Loader = () => {
    return (
        <div className='Article post-layout'>
            <div className='loader'>
                <img src={loader} alt=''/>
            </div>
        </div>
    )
}