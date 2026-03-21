import {BsLinkedin} from 'react-icons/bs';
import {FaGithub, FaYoutube} from 'react-icons/fa';
import {ImBehance2} from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";



function Socials() {
    const socials = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/vatsalverma999/',
            icon: <BsLinkedin size={'1rem'}/>
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/vatsalastav',
            icon: <BsInstagram size={'1rem'}/>
        },
        {
            name: 'Behance',
            href: 'https://www.behance.net/vatsalverma',
            icon: <ImBehance2 size={'1rem'}/>
        },
        {
            name: 'GitHub',
            href: 'https://github.com/vatsal259',
            icon: <FaGithub size={'1rem'}/>
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/@walkinthecraziestway',
            icon: <FaYoutube size={'1rem'}/>
        },
        {
            name: 'X',
            href: 'https://x.com/ellipsecircle',
            icon: <RiTwitterXFill size={'1rem'}/>
        }
    ]

    return (
        <div className={"header__socials"}>
            <div className={"header__socials-grid"}>
                {socials.map(({name, href, icon}, index) => (
                    <a
                        key={name}
                        href={href}
                        target={"_blank"}
                        rel={"noreferrer"}
                        aria-label={`Open ${name} profile`}
                        className={"header__social-card"}
                        title={name}
                        style={{'--i': index + 1}}
                    >
                        <span className={"header__social-icon"}>{icon}</span>
                        <span className={"header__social-tooltip"}>{name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Socials