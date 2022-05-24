/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id={"about"}>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={ME} alt={"About Image"}/>
                    </div>
                </div>
                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={'about__card'}>
                            <FaAward className={"about__icon"}/>
                            <h3>Education</h3>
                            <medium>B.Tech, VIT University, Vellore</medium>
                        </article>
                        <article className={'about__card'}>
                            <FiUsers className={"about__icon"}/>
                            <h3>Interests</h3>
                            <medium>AI, ML and UI/UX</medium>
                        </article>
                        <article className={'about__card'}>
                            <VscFolderLibrary className={"about__icon"}/>
                            <h3>Projects</h3>
                            <medium>10+ Projects</medium>
                        </article>
                    </div>
                    <p>I aim to attain an engaging internship position in the field of Computer Science and UI/UX. My interests include Machine Learning, Artificial Intelligence, Front-end web development, Data science and UI/UX designing.</p>
                    <a href={"#contact"} className={"btn btn-primary"}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About