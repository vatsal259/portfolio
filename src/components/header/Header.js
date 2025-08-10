import './Header.css'
import CTA from "./CTA";
import Socials from "./Socials";
import ME from '../../assets/AIGen.png'


const Header = () => {
    return (
        <header className={"container"}>
            <div className={"header__container"}>
                <div className={"left"}>
                    <h3 style={{fontSize: "1.8rem", fontWeight: "normal", color: "#E1EACD"}}>Hello I'm</h3>
                    <h2 style={{fontSize: "3rem", fontWeight: "normal", color: "#5fa8d3"}}>Vatsal Verma</h2>
                    <h5 style={{fontSize: "1.5rem", fontWeight: "normal", color: "#E1EACD"}} className={"text-light"}>Software Engineer | Biker | Amateur Photographer</h5>
                    <CTA/>
                    <Socials/>
                </div>
                <div>
                    <img className={"me"} src={ME} alt={"About"}/>
                </div>
            </div>
        </header>
    )
}

export default Header