import React, {useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_x8bvb16', form.current, 'fr_3t_1WMKp3lq1Yv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };
    return (
        <section id={"contact"}>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

            <div className={"container contact__container"}>
                <div className={"contact__options"}>
                    <article className={"contact__option"}>
                        <MdOutlineEmail className={"contact__option-icon"}/>
                        <h4>Email</h4>
                        <h5>vatsalverma999@gmail.com</h5>
                        <a href={"mailto:vatsalverma999@gmail.com"} target={'_blank'} rel="noreferrer" >Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type={"text"} name={"name"} placeholder={"Your Full name"} required/>
                    <input type={"email"} name={"email"} placeholder={"Your Email"} required/>
                    <textarea name={"message"} placeholder={"Your Message"} rows={"7"} required></textarea>
                    <button type={"submit"} className={"btn btn-primary"}>Send Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact