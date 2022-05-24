import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id={"experience"}>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className={"container experience__container"}>
                <div className={"experience__frontend"}>

                    <h2>Development</h2>
                    <div className={"experience__content"}>
                    <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Data Structures</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>HTML</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>CSS</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Java</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Python</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>C/C++</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>React</h4>
                                <small className={"text-light"}>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className={"experience__backend"}>
                    <h2>Design</h2>
                    <div className={"experience__content"}>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Figma</h4>
                                <small className={"text-light"}>Experienced</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Adobe Xd</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Adobe After Affects</h4>
                                <small className={"text-light"}>Basic</small>
                            </div>
                        </article>
                        <article className={"experience__details"}>
                            <BsPatchCheckFill className={"experience__details-icons"}/>
                            <div>
                                <h4>Adobe Photoshop</h4>
                                <small className={"text-light"}>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience