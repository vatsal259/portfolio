/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css'
import {FaBehance, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href={"#"} className={"footer__logo"}>Thanks! <br></br>You have reached the end of the website.</a>
            <ul className={"permalinks"}>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experience"}>Experiences</a></li>
                <li><a href={"#services"}>Interests</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#testimonials"}>YouTube</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>

            <div className={"footer__socials"}>
                <a href={"https://www.linkedin.com/in/vatsalverma999/"} target={"_blank"} rel="noreferrer"><FaLinkedin /></a>
                <a href={"https://github.com/vatsal259"} target={"_blank"} rel="noreferrer"><FaGithub /></a>
                <a href={"https://www.behance.net/vatsalverma"} target={"_blank"} rel="noreferrer"><FaBehance /></a>
                <a href={"https://instagram.com/vatsalastav"} target={"_blank"} rel="noreferrer"><FiInstagram /></a>
                <a href={"https://twitter.com/ellipsecircle"} target={"_blank"} rel="noreferrer"><FaTwitter /></a>
            </div>

            <div className={"footer__copyright"}>
                <small>Made with ❤️ by Vatsal</small>
            </div>
        </footer>
    )
}

export default Footer