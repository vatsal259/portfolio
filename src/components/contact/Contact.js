import React, {useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md";

const Contact = () => {

    const form = useRef();

    return (
        <section id={"contact"}>
            <h2>Contact</h2>
            <div className={"container contact__container"}>
                    <article className={"contact__details"}>
                        <MdOutlineEmail style={{"fontSize":"2rem"}}/>
                        <h3>Email</h3>
                        <a href={"mailto:vatsalverma999@gmail.com"} target={'_blank'}  style={{"fontSize":"1.2rem", "color":"#E1EACD"}} rel="noreferrer" >vatsalverma999@gmail.com</a><br/>
                        <a href={"mailto:vatsalverma999@gmail.com"} target={'_blank'} rel="noreferrer" >Send a Message</a>
                    </article>
            </div>
        </section>
    )
}

export default Contact