import React from 'react'

// styles
import '../styles/pages.scss';

// utils
import Cursor from '../utils/Cursor';

const IndexPage = () => {

    return (
        <div>
            <h1>Hi, I'm Joe</h1>

            <div className={'column-2 skewright'}>
                <h3>I'm a <b>Web Developer</b> and <b>Photographer</b> based in Cincinnati, OH</h3>
            </div>

            <div className={'column-2 skewleft rtl'}>
                <div className={'bio'}>

                    <section>
                        <p> <b> What do I do? </b> </p>
                        <p>
                            Currently I'm working towards a bachelor's degree in Information Technology at the University of Cincinnati with a plan to graduate in 2022.
                            I am also a Software Engineer at <a href="#" {...Cursor.applyBehavior('visit homepage')} >Kinetic Vision</a> where I work on various web-related projects.
                        </p>
                        <p>
                            In the after-hours, I like to shoot photography and work on personal web projects (like this one).
                            I also do a bit of sewing and cooking.
                            If I'm not doing any of those things, I'm hanging out with family and friends, browsing the web, or watching YouTube.
                        </p>
                    </section>

                    <section>
                        <p> <b> What Do I like? </b> </p>
                        <p>
                            Web development, Film Photography, Asian/Oriental food, Brutalist achitecture, coffee, The John Wick series, <a href="#" {...Cursor.applyBehavior('go to YouTube')}>Adam Savage's Tested</a>,
                            graph paper, sleeping with a fan, tortillas, the idea of owning a motorcycle, campling, things made of bronze, monochrome color palletes, Spanish History and Culture,
                            traveling, sour dough bread, both dogs and cats, and concrete.
                        </p>
                    </section>


                    <section>
                        <p> <b> What Do I dislike? </b> </p>
                        <p>
                            The political divide in America, squishy grapes, traffic, staying inside on a sunny day, the radio, pencils without erasers, 
                            when someone mixes their ketchup and mustard together, florescent lighting, the blinds being down in the daytime, people interruping other people,
                            vibrantly colored shirts (just on me), and when I'm out of milk and I just poured a bowl a cereal.
                        </p>
                    </section>
                </div>
            </div>


        </div>
    )

}

export default IndexPage