import React from "react";
import './header.css';
import {FaReact} from 'react-icons/fa'

export default function Header(){
    return(
        <div className="title">
            <h1>
                React
                <FaReact size={40}/>
                Clima
            </h1>
        </div>
    )
}