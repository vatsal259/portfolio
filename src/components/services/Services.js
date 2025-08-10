import './Services.css'

const Services = () => {
    return (
        <section id={"services"}>
            <h2>My Developer Toolkit</h2>
            <div className={"container services__container"}>
            <article className={"service"}>
                    <div className={"service__head"}>
                        <h2>Programming & Logic</h2>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <h4 style={{fontWeight: "lighter"}}>Fluent in Java, Python, and MATLAB — combining strong fundamentals with hands-on coding for building scalable, efficient solutions.</h4>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h2>Practices & Mindset</h2>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <h4 style={{fontWeight: "lighter"}}>Agile at heart, driven by clean architecture, system design, and collaborative teamwork — always learning, always shipping.</h4>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h2>Backend & Architecture</h2>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <h4 style={{fontWeight: "lighter"}}>Experienced in building microservices with Spring Boot and Kafka, backed by RESTful APIs and NoSQL databases like Couchbase.</h4>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h2>AI/ML & Data Intelligence</h2>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <h4 style={{fontWeight: "lighter"}}>Passionate about ML, CNNs, GenAI, and NLP — turning data into smart, usable systems through research and experimentation.</h4>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h2>DevOps & Tools</h2>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <h4 style={{fontWeight: "lighter"}}>CI/CD pipelines, OpenShift deployments, and version control using Git, Jenkins, and Bitbucket — with a dash of JIRA/Confluence.</h4>
                        </li>
                    </ul>
                </article>

                <article className={"service"}>
                    <div className={"service__head"}>
                        <h2>UI/UX</h2>
                    </div>
                    <ul className={"service__list"}>
                        <li>
                            <h4 style={{fontWeight: "lighter"}}>Passionate about designing clean, user-focused UI/UX — from intuitive wireframes to polished, functional experiences across platforms.</h4>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services