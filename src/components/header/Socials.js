import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {ImBehance2} from "react-icons/im";


function Socials() {
    return (
        <div className={"header__socials"}>
            <a href={"https://www.linkedin.com/in/vatsalverma999/"} target={"_blank"} rel={"noreferrer"}><BsLinkedin size={"1.5rem"}/></a>
            <a href={"https://github.com/vatsal259"} target={"_blank"} rel={"noreferrer"}><FaGithub size={"1.5rem"}/></a>
            <a href={"https://www.behance.net/vatsalverma"} target={"_blank"} rel={"noreferrer"}><ImBehance2 size={"1.5rem"}/></a>
        </div>
    );
}

export default Socials