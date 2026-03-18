import './Project.css'
import IMG1 from '../../assets/Treatise.jpg'
import IMG2 from '../../assets/CNN.jpg'
import IMG3 from '../../assets/NLP.jpg'
import IMG4 from '../../assets/Fittonesu.jpg'
import IMG5 from '../../assets/Fembizz.jpg'

const Project = () => {
    return (
        <section id={"Project"}>
            <h2>Projects</h2>

            <div className={"container Project__container"}>
                <article className={"Project__item"}>
                    <div className={"Project__item-image"}>
                        <img src={IMG2} alt={''}/>
                    </div>
                    <h3 className={"card__title"}>Animal Detection AI model using CNN</h3>
                    <p className={"Project__item-desc"}>Built a flask website for animal detection using Convolutional Neural Network. Realtime message alert on the mobile phone.</p>
                    <div className={"project__tags"}>
                        <span>CNN</span>
                        <span>Flask</span>
                        <span>Python</span>
                    </div>
                    <div className={"Project__item-cta"}>
                        <a href={"https://github.com/vatsal259/WildHacks"} className={'btn'} target={'_blank'} rel="noreferrer">Github</a>
                        <a href={"https://youtu.be/3u3mKcQML2Y"} className={'btn btn-primary'} target={"_blank"} rel="noreferrer">YouTube</a>
                    </div>
                </article>
                <article className={"Project__item"}>
                    <div className={"Project__item-image"}>
                        <img src={IMG3} alt={''}/>
                    </div>
                    <h3 className={"card__title"}>Text Summarize</h3>
                    <p className={"Project__item-desc"}>Built a flask website for text summarization using Natural Language Programming. Algorithm used: LexRank Tech stack: Python, NLTK library, Flask, HTML and CSS</p>
                    <div className={"project__tags"}>
                        <span>NLP</span>
                        <span>LexRank</span>
                        <span>NLTK</span>
                        <span>Flask</span>
                    </div>
                    <div className={"Project__item-cta"}>
                        <a href={"https://github.com/vatsal259/Text-summarizer"} className={'btn'} target={'_blank'} rel="noreferrer">Github</a>
                        <a href={"https://youtu.be/cmAQBTECa40"} className={'btn btn-primary'} target={"_blank"} rel="noreferrer">YouTube</a>
                    </div>
                </article>
                <article className={"Project__item"}>
                    <div className={"Project__item-image"}>
                        <img src={IMG1} alt={''}/>
                    </div>
                    <h3 className={"card__title"}>Treatise</h3>
                    <p className={"Project__item-desc"}>Designed a Figma UI prototype for an app that gives a platform for bibliophiles to find jobs. It was exclusively for android mobile phones. Designed a Figma UI prototype for an app that gives a platform for bibliophiles to find jobs. It was exclusively for android mobile phones.</p>
                    <div className={"project__tags"}>
                        <span>Figma</span>
                        <span>Mobile UI</span>
                    </div>
                    <div className={"Project__item-cta"}>
                        <a href={"https://www.behance.net/gallery/134863603/Treatise"} className={'btn'} target={"_blank"} rel="noreferrer">Behance</a>
                    </div>
                </article>
                <article className={"Project__item"}>
                    <div className={"Project__item-image"}>
                        <img src={IMG4} alt={''}/>
                    </div>
                    <h3 className={"card__title"}>Fittonesu</h3>
                    <p className={"Project__item-desc"}>Designed figma UI prototype for website and app and developed the website that helps in fitness tracking in Devspace Hackathon.</p>
                    <div className={"project__tags"}>
                        <span>Figma</span>
                        <span>Web App</span>
                        <span>Hackathon</span>
                    </div>
                    <div className={"Project__item-cta"}>
                        <a href={"https://www.behance.net/gallery/128055989/Fittonesu"} className={'btn'} target={"_blank"} rel="noreferrer">Behance</a>
                    </div>
                </article>
                <article className={"Project__item"}>
                    <div className={"Project__item-image"}>
                        <img src={IMG5} alt={''}/>
                    </div>
                    <h3 className={"card__title"}>Fembizz</h3>
                    <p className={"Project__item-desc"}>Designed a Figma UI prototype for an app that gives a platform to women and helps in women empowerment in Access Denied Hackathon and won their special track prize.</p>
                    <div className={"project__tags"}>
                        <span>WomenTech</span>
                        <span>Figma</span>
                        <span>Hackathon</span>
                    </div>
                    <div className={"Project__item-cta"}>
                        <a href={"https://www.behance.net/gallery/137139355/Fembizz"} className={'btn'} target={"_blank"} rel="noreferrer">Behance</a>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default Project