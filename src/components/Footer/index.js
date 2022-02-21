import React from "react";
import './footer.css'
import {FaGithub, FaWhatsapp, FaLinkedin} from 'react-icons/fa'

export default function Footer(){
    return(
        <div className="footer">
            <p>
                <a href="https://wa.me/5561995776284">
                    <FaWhatsapp size={20} color="#FFF"/> Gustavo Henrique Nogueira
                </a>
            </p>
            <p>
                <a href="https://github.com/Ghenriquer10">
                    <FaGithub size={20} color="#FFF"/> 
                    GitHub
                </a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/gustavo-henrique-a584021a2/">
                    <FaLinkedin size={20} color="#FFF"/>
                    Linkedin 
                </a>
            </p>
        </div>
    )
}
