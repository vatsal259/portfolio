/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './About.css'

const About = () => {
    return (
        <section id={"about"}>
            <h2>About me</h2>
            <div className={"container about__container"}>
                
                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={'about__card'}>
                            <h3>Education</h3>
                            <medium>B.Tech, VIT University, Vellore</medium>
                        </article>
                        <article className={'about__card'}>
                            <h3>Software Engineer</h3>
                            <medium>Amdocs</medium>
                        </article>
                        <article className={'about__card'}>
                            <h3>Location</h3>
                            <medium>India</medium>
                        </article>
                    </div>
                </div>
                <div className={'about__content'}>
                    <p className={"about_para"}>I'm a <strong>Software Developer</strong> passionate about building meaningful and impactful technology. I specialize in working with <strong>Microservices Architectures</strong>, love diving into <strong>AI/ML</strong>, and enjoy crafting clean, user-centered <strong>UI/UX</strong> experiences. My goal is always to solve real-world problems with thoughtful, well-structured code.</p>
                    <p className={"about_para"}>When I’m not coding, you’ll find me riding my <strong>Royal Enfield Hunter</strong>, chasing open roads, quiet curves, and new perspectives. There’s something about the freedom of the ride — the rhythm of the engine, the wind in my face — that clears my head like nothing else.</p>
                    <p className={"about_para"}>More often than not, I’ve got a camera slung over my shoulder, ready to capture whatever catches my eye — a bird in flight, a perfect patch of light, or a moment that feels too real to ignore.</p>
               </div>
            </div>
        </section>
    )
}

export default About