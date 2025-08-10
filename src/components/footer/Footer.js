/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css'
import {FaBehance, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href={"#"} className={"footer__logo"}>That’s it. You’ve seen everything.<br></br>Unfortunately, there’s no secret treasure here. <br></br>Go outside, maybe?</a>
            <div className={"footer__socials"}>
                <a href={"https://www.linkedin.com/in/vatsalverma999/"} target={"_blank"} rel="noreferrer"><FaLinkedin /></a>
                <a href={"https://github.com/vatsal259"} target={"_blank"} rel="noreferrer"><FaGithub /></a>
                <a href={"https://www.behance.net/vatsalverma"} target={"_blank"} rel="noreferrer"><FaBehance /></a>
                <a href={"https://instagram.com/vatsalastav"} target={"_blank"} rel="noreferrer"><FiInstagram /></a>
                <a href={"https://twitter.com/ellipsecircle"} target={"_blank"} rel="noreferrer"><FaTwitter /></a>
            </div>

            <div className={"footer__copyright"}>
                <h4>Assembled with ❤️, caffeine, and questionable CSS by Vatsal</h4>
            </div>
        </footer>
    )
}

export default Footer