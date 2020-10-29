import React, { useRef, useEffect } from 'react';

// styles
import '../styles/components.scss';

const ScrollMarquee = ({text}) => {

    const setupMarquee = (textElement) => {

        const handleVerticalMove = (e) => {
            const main = document.getElementsByTagName('main')[0]
            textElement.style.transform = `translateX( calc(-50% - ${main.scrollTop}px ))`
        }

        window.addEventListener('wheel', handleVerticalMove, true)

    }

    const marqueeText = Array(100).fill(text.toUpperCase()).join(' * ')
    const textElement = useRef(null)
    useEffect(() => textElement.current && setupMarquee(textElement.current));

    return (
        <div className={'scroll-marquee'}>
            <p ref={textElement}>{marqueeText}</p>
        </div>
    )

}

export default ScrollMarquee;