import './Header.css'
import CTA from "./CTA";
import Socials from "./Socials";
import Lottie from 'lottie-web';
// import og from "../../src/assets/ld.json"
import { useEffect, useRef } from 'react';


const Header = () => {
    const container =useRef(null)
    useEffect(() =>{
        Lottie.loadAnimation({
            container: container.current,
            loop: true,
            autoplay: true,
            animationData: require('../../assets/ld.json')
        })
    })
    return (
        <header>
            <div className={"container header__container"}>
                    <br></br>
                    <h3 style={{fontSize: "1.8rem", fontWeight: "normal"}}>Hello I'm</h3>
                    <h1 style={{fontSize: "3rem"}}>Vatsal Verma</h1>
                    <h5 style={{fontSize: "1.5rem", fontWeight: "normal"}} className={"text-light"}>AI Developer and UI/UX Designer</h5>
                    <CTA/>
                <Socials />

                <div className={"me"} ref={container}>
                </div>

                <a href={"#about"} className={"scroll__down"}>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header