import './Header.css'
import CTA from "./CTA";
import Socials from "./Socials";
import ME from '../../assets/AIGen.png'


const Header = () => {
    return (
        <header className={"container"}>
            <div className={"header__container"}>
                <div className={"left"}>
                    <h3 className={"header__intro text-light"}>Hello I'm</h3>
                    <h2 className={"header__name"}>Vatsal Verma</h2>
                    <h5 className={"header__tagline text-light"}>Software Engineer | Biker | Amateur Photographer</h5>
                    <CTA/>
                    <Socials/>
                </div>
                <div className={"header__image-wrap"}>
                    <img className={"me"} src={ME} alt={"About"}/>
                </div>
            </div>
        </header>
    )
}

export default Header