import {BsLinkedin} from 'react-icons/bs';
import {FaGithub, FaYoutube} from 'react-icons/fa';
import {ImBehance2} from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";



function Socials() {
    return (
        <div className={"header__socials"}>
            <a href={"https://www.linkedin.com/in/vatsalverma999/"} target={"_blank"} rel={"noreferrer"}><BsLinkedin size={"1.8rem"}/></a>
            <a href={"https://instagram.com/vatsalastav"} target={"_blank"} rel="noreferrer"><BsInstagram size={"1.8rem"}/></a>
            <a href={"https://www.behance.net/vatsalverma"} target={"_blank"} rel={"noreferrer"}><ImBehance2 size={"1.8rem"}/></a>
            <a href={"https://github.com/vatsal259"} target={"_blank"} rel={"noreferrer"}><FaGithub size={"1.8rem"}/></a>
            <a href={"https://www.youtube.com/@walkinthecraziestway"} target={"_blank"} rel="noreferrer"><FaYoutube size={"1.8rem"}/></a>
            <a href={"https://x.com/ellipsecircle"} target={"_blank"} rel="noreferrer"><RiTwitterXFill size={"1.8rem"}/></a>
        </div>
    );
}

export default Socials