import './Portfolio.css'
import IMG1 from '../../assets/Treatise.jpg'
import IMG2 from '../../assets/CNN.jpg'
import IMG3 from '../../assets/NLP.jpg'
import IMG4 from '../../assets/Fittonesu.jpg'
import IMG5 from '../../assets/Fembizz.jpg'

const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className={"container portfolio__container"}>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG1} alt={''}/>
                    </div>
                    <h3>Treatise</h3>
                    <p>Designed a Figma UI prototype for an app that gives a platform for bibliophiles to find jobs. It was exclusively for android mobile phones. Designed a Figma UI prototype for an app that gives a platform for bibliophiles to find jobs. It was exclusively for android mobile phones.</p>
                    <div className={"portfolio__item-cta"}>
                        {/* <a href={"https://github.com"} className={'btn'} target={'_blank'} rel="noreferrer">Github</a> */}
                        <a href={"https://www.behance.net/gallery/134863603/Treatise"} className={'btn'} target={"_blank"} rel="noreferrer">Behance</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG2} alt={''}/>
                    </div>
                    <h3>Animal Detection AI model using CNN</h3>
                    <p>Built a flask website for animal detection using Convolutional Neural Network. Realtime message alert on the mobile phone.</p>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com/vatsal259/WildHacks"} className={'btn'} target={'_blank'} rel="noreferrer">Github</a>
                        <a href={"https://youtu.be/3u3mKcQML2Y"} className={'btn btn-primary'} target={"_blank"} rel="noreferrer">YouTube</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG3} alt={''}/>
                    </div>
                    <h3>Text Summarize</h3>
                    <p>Built a flask website for text summarization using Natural Language Programming. Algorithm used: LexRank Tech stack: Python, NLTK library, Flask, HTML and CSS</p>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://github.com/vatsal259/Text-summarizer"} className={'btn'} target={'_blank'} rel="noreferrer">Github</a>
                        <a href={"https://youtu.be/cmAQBTECa40"} className={'btn btn-primary'} target={"_blank"} rel="noreferrer">YouTube</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG4} alt={''}/>
                    </div>
                    <h3>Fittonesu</h3>
                    <p>Designed figma UI prototype for website and app and developed the website that helps in fitness tracking in Devspace Hackathon.</p>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://www.behance.net/gallery/128055989/Fittonesu"} className={'btn'} target={"_blank"} rel="noreferrer">Behance</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG5} alt={''}/>
                    </div>
                    <h3>Fembizz</h3>
                    <p>Designed a Figma UI prototype for an app that gives a platform to women and helps in women empowerment in Access Denied Hackathon and won their special track prize.</p>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://www.behance.net/gallery/137139355/Fembizz"} className={'btn'} target={"_blank"} rel="noreferrer">Behance</a>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default Portfolio