import './Header.css'
import ME from '../../assets/AIGen.png'
import { resumeUrl } from '../../blog/blogConfig'

const Header = () => {
    return (
        <header className={"container header-root"}>
            <div className={"header__container"}>
                <div className={"left header__copy"}>
                    <p className={"header__intro text-light"}>Hello, I&apos;m</p>
                    <h1 className={"header__name"}>Vatsal Verma</h1>
                    <p className={"header__tagline text-light"}>
                    Software Engineer | Biker | Amateur Photographer
                    </p>
                    <a
                        href={resumeUrl}
                        className="header__resume-card"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Tap to open resume
                    </a>
                </div>
                <div className={"header__image-wrap"}>
                    <img className={"me"} src={ME} alt={"Vatsal Verma portrait"}/>
                </div>
            </div>
        </header>
    )
}

export default Header
