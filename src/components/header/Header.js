import './Header.css'
import CTA from "./CTA";
import ME from "../../assets/Mouse.png"
import Socials from "./Socials";

const Header = () => {
    return (
        <header>
            <div className={"container header__container"}>
                    <br></br>
                    <h3 style={{fontSize: "1.8rem", fontWeight: "normal"}}>Hello I'm</h3>
                    <h1 style={{fontSize: "3rem"}}>Vatsal Verma</h1>
                    <h5 style={{fontSize: "1.5rem", fontWeight: "normal"}} className={"text-light"}>AI Developer and UI/UX Designer</h5>
                    <CTA/>
                <Socials />

                <div className={"me"}>
                    <img className={"photo"} src={ME} alt={"me"}/>
                </div>

                <a href={"#contact"} className={"scroll__down"}>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header