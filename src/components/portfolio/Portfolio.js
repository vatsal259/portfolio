import './Portfolio.css'
import IMG1 from '../../assets/Bike.jpg'
import IMG2 from '../../assets/Sarus.jpg'
import IMG3 from '../../assets/Bean.jpg'
import IMG4 from '../../assets/Gym.jpg'
import IMG5 from '../../assets/Fembizz.jpg'

const Portfolio = () => {
    return (
        <section id={"portfolio"}>
            <h2>Beyond the Code</h2>

            <div className={"container portfolio__container"}>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG1} alt={''}/>
                    </div>
                    <div>
                        <h3>The Ride That Keeps Me Balanced</h3>
                        <p style={{fontWeight: "lighter"}}>
                            Riding through the Western Ghats on my bike is where I feel most like myself. The winding roads, the cool air, the endless green — it’s the kind of peace I can’t find anywhere else.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            What I love most is the music of the engine echoing through the hills — loud, raw, and oddly calming. It drowns out everything else: the stress, the noise, the overthinking.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            Biking helps me reset. It clears my head, lifts the weight off my shoulders, and reminds me to just breathe, be present, and keep moving forward.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            Some people find peace in silence. I find it in the sound of a well-tuned engine and a road that never asks where I’m going. <i>[In frame somewhere in western ghat]</i>
                        </p>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG2} alt={''}/>
                    </div>
                    <div>
                        <h3>How I See the Wild </h3>
                        <p style={{fontWeight: "lighter"}}>
                            Photography, for me, is about noticing the things most people miss — especially when it comes to animals and birds. I’ve always been drawn to wildlife. There’s something incredible about capturing a fleeting moment: a bird in mid-flight, a deer looking straight at you, a monkey doing something oddly human.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            I don’t chase the perfect shot — I wait for it. Whether it’s deep in the forest or on the side of the road during a ride, I love the quiet challenge of wildlife photography. It teaches patience, observation, and respect for the natural world.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            Every photo tells a story I couldn’t put into words — and that’s exactly why I do it. <i>[In frame Sarus Crane captured at Samaspur Bird Sanctuary, Uttar Pradesh]</i>
                        </p>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG3} alt={''}/>
                    </div>
                    <div>
                        <h3>Brew Experiments</h3>
                        <p style={{fontWeight: "lighter"}}>
                            Coffee is my playground. I don’t just drink it — I mess with it. I’ve got my French press, a steady stash of cold brew, and an ever-growing list of weird combinations that probably shouldn’t work… but sometimes absolutely do.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            I’ve mixed cold brew with sparkling water, lime juice, berries, even <strong>Hajmola</strong> once — yeah, it raised some eyebrows. But that’s the fun of it. I like flavors that surprise me, confuse people, or make them say, “wait… that’s actually good?”
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            I’m not here for the perfect espresso shot. I’m here for the chaos — the citrus fizz, the fruit-laced caffeine hits, the totally unhinged pairings that somehow still taste like a good idea.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            Call it a hobby, a habit, or just caffeinated curiosity — but for me, coffee is a place to get weird, stay curious, and drink like nobody’s judging.
                        </p>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG4} alt={''}/>
                    </div>
                    <div>
                        <h3>Strong Body, Stronger Mind</h3>
                        <p style={{fontWeight: "lighter"}}>
                            At the start of 2024, I made a decision that changed my life — to take my health seriously. I committed to the gym, followed a strict diet, and stayed consistent even when it was hard.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            Since then, I’ve lost over 22 kgs, but what I’ve gained is so much more than what I lost. This journey hasn’t just transformed my body — it’s helped me rebuild my mindset.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            I’ve become more focused, more disciplined, and a lot kinder to myself. The routine, the challenge, the progress — it all gave me a sense of control and clarity I didn’t know I needed.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                           It taught me how to show up, push through, and trust the process — and that’s made me a better person in every part of my life, especially mentally.
                        </p>
                        <p style={{fontWeight: "lighter"}}>
                            This isn’t a phase. It’s part of who I am now.
                        </p>
                    </div>
                </article>

                {/* <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG2} alt={''}/>
                    </div>
                    <h3>Animal Detection AI model using CNN</h3>
                    <p style={{fontWeight: "lighter"}}>Built a flask website for animal detection using Convolutional Neural Network. Realtime message alert on the mobile phone.</p>
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
                    <p style={{fontWeight: "lighter"}}>Built a flask website for text summarization using Natural Language Programming. Algorithm used: LexRank Tech stack: Python, NLTK library, Flask, HTML and CSS</p>
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
                    <p style={{fontWeight: "lighter"}}>Designed figma UI prototype for website and app and developed the website that helps in fitness tracking in Devspace Hackathon.</p>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://www.behance.net/gallery/128055989/Fittonesu"} className={'btn'} target={"_blank"} rel="noreferrer">Behance</a>
                    </div>
                </article>
                <article className={"portfolio__item"}>
                    <div className={"portfolio__item-image"}>
                        <img src={IMG5} alt={''}/>
                    </div>
                    <h3>Fembizz</h3>
                    <p style={{fontWeight: "lighter"}}>Designed a Figma UI prototype for an app that gives a platform to women and helps in women empowerment in Access Denied Hackathon and won their special track prize.</p>
                    <div className={"portfolio__item-cta"}>
                        <a href={"https://www.behance.net/gallery/137139355/Fembizz"} className={'btn'} target={"_blank"} rel="noreferrer">Behance</a>
                    </div>
                </article> */}
            </div>

        </section>
    )
}

export default Portfolio