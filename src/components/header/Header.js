import './Header.css'
import CTA from "./CTA";
import ME from "../../assets/me.png"
import Socials from "./Socials";

const Header = () => {
    return (
        <header>
            <div className={"container header__container"}>
                <h3>Hello I'm</h3>
                <h1>Vatsal Verma</h1>
                <h5 className={"text-light"}>AI Developer and UI/UX Designer</h5>
                <CTA />

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