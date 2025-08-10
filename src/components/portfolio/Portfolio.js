import './Portfolio.css'
import IMG1 from '../../assets/Bike.jpg'
import IMG2 from '../../assets/Sarus.jpg'
import IMG3 from '../../assets/Bean.jpg'
import IMG4 from '../../assets/Gym.jpg'

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
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            Riding through the Western Ghats on my bike is where I feel most like myself. The winding roads, the cool air, the endless green — it’s the kind of peace I can’t find anywhere else.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            What I love most is the music of the engine echoing through the hills — loud, raw, and oddly calming. It drowns out everything else: the stress, the noise, the overthinking.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            Biking helps me reset. It clears my head, lifts the weight off my shoulders, and reminds me to just breathe, be present, and keep moving forward.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
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
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            Photography, for me, is about noticing the things most people miss — especially when it comes to animals and birds. I’ve always been drawn to wildlife. There’s something incredible about capturing a fleeting moment: a bird in mid-flight, a deer looking straight at you, a monkey doing something oddly human.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            I don’t chase the perfect shot — I wait for it. Whether it’s deep in the forest or on the side of the road during a ride, I love the quiet challenge of wildlife photography. It teaches patience, observation, and respect for the natural world.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
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
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            Coffee is my playground. I don’t just drink it — I mess with it. I’ve got my French press, a steady stash of cold brew, and an ever-growing list of weird combinations that probably shouldn’t work… but sometimes absolutely do.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            I’ve mixed cold brew with sparkling water, lime juice, berries, even <strong>Hajmola</strong> once — yeah, it raised some eyebrows. But that’s the fun of it. I like flavors that surprise me, confuse people, or make them say, “wait… that’s actually good?”
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            I’m not here for the perfect espresso shot. I’m here for the chaos — the citrus fizz, the fruit-laced caffeine hits, the totally unhinged pairings that somehow still taste like a good idea.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
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
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            At the start of 2024, I made a decision that changed my life — to take my health seriously. I committed to the gym, followed a strict diet, and stayed consistent even when it was hard.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            Since then, I’ve lost over 22 kgs, but what I’ve gained is so much more than what I lost. This journey hasn’t just transformed my body — it’s helped me rebuild my mindset.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            I’ve become more focused, more disciplined, and a lot kinder to myself. The routine, the challenge, the progress — it all gave me a sense of control and clarity I didn’t know I needed.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                           It taught me how to show up, push through, and trust the process — and that’s made me a better person in every part of my life, especially mentally.
                        </p>
                        <p style={{fontWeight: "lighter", textAlign: "justify"}}>
                            This isn’t a phase. It’s part of who I am now.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio