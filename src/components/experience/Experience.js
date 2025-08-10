import React from 'react'
import './Experience.css'

const Experience = () => {
    return (
        <section id={"experience"}>
            <h2>Work Experience</h2>
            <div className={"container experience__container"}>
                    <article className={"experience__details"}>
                        <h2 className={"text-light"}>Amdocs</h2>
                        <h3 className={"text-light"}>Software Developer</h3>
                        <h4 className={"text-light"}>August 2023 – Present</h4>
                        <div className={"text-light"}>
                            <p>
                                Worked on a microservices-based billing platform aligned with TM Forum standards, using Java Spring, Kafka, and REST APIs. Improved CI/CD pipelines on OpenShift, reducing deployment time by 20%. Resolved 30+ security vulnerabilities and contributed to successful production deployments with ongoing support.
                            </p>
                        </div>
                    </article>
                    <article className={"experience__details"}>
                        <h2 className={"text-light"}>Indian Institute of Technology (IIT-BHU), Varanasi</h2>
                        <h3 className={"text-light"}>AI/ML Research Intern</h3>
                        <h4 className={"text-light"}>August 2021 – February 2022</h4>
                        <div className={"text-light"}>
                            <p>
                                Developed a facial recognition system using Convolutional Neural Networks (CNNs) capable of identifying up to 50,000 individuals with high accuracy. Extended the model to recognize cows by analyzing unique muzzle patterns, demonstrating adaptability and innovation. Led research efforts, managed timelines, and collaborated with the team to ensure smooth execution and successful project delivery.    
                            </p>
                        </div>
                    </article>
            </div>
        </section>
    )
}

export default Experience