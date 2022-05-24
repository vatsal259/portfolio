import './Services.css'
// import {BsCheck2} from "react-icons/bs";

const Services = () => {
    return (
        <section id={"services"}>
            <h5>What are my</h5>
            <h2>Interests</h2>
            <div className={"container services__container"}>
            <article className={"service"}>
                    <div className={"service__head"}>
                        <h2>AI/ML Development</h2>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            {/* <BsCheck2 className={"service__list-icon"} /> */}
                            <h4>I'm a highly motivated and passionate to use my talents in machine learning/AI and statistical analysis to solve real-world problems and make the customer achieve more.</h4>
                        </li>
                        <li>
                            {/* <BsCheck2 className={"service__list-icon"} /> */}
                            <h4>Previously worked on many AI projects.</h4>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h2>Frontend Web Development</h2>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            {/* <BsCheck2 className={"service__list-icon"} /> */}
                            <h4>Front-End Developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. Enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary. With a passion for both personal growth and for software development. Ready to apply my passion for coding to a talented engineering team to develop quality solutions.</h4>
                        </li>
                        
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h2>UI/UX Design</h2>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            {/* <BsCheck2 className={"service__list-icon"} /> */}
                            <h4>Designed many figma UI prototypes for websites and mobile applications for both Android and iOS devices.</h4>
                        </li>
                        <li>
                            {/* <BsCheck2 className={"service__list-icon"} /> */}
                            <h4>Designed webpages and applications that met user goals.</h4>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services