import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {ImBehance2} from "react-icons/im";


function Socials() {
    return (
        <div className={"header__socials"}>
            <a href={"https://www.linkedin.com/in/vatsalverma999/"} target={"_blank"} rel={"noreferrer"}><BsLinkedin /></a>
            <a href={"https://github.com/vatsal259"} target={"_blank"} rel={"noreferrer"}><FaGithub /></a>
            <a href={"https://www.behance.net/vatsalverma"} target={"_blank"} rel={"noreferrer"}><ImBehance2 /></a>
        </div>
    );
}

export default Socials