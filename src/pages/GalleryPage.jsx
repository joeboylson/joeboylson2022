import React, { useState } from 'react';

// styles
import '../styles/pages.scss'

// components
import ImageWrapper from '../components/ImageWrapper';

// utils
import Cursor from '../utils/Cursor';
import useGalleryEntries from '../utils/useGalleryEntries';
import { jogNumber } from '../utils/common';

const GalleryPage = () => {

    const [selectedIndex, setSelectedIndex] = useState(null);
    const data = useGalleryEntries()

    return (
        <div id={'gallery-inner'}>

            <div className={''}>

                { data.map((item, index) => (
                    <GalleryItem 
                        key={index} 
                        index={index}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex} 
                        {...item}
                    />
                )) }

            </div>

        </div>
    )

}

const GalleryItem = ({index, description, url, selectedIndex, setSelectedIndex}) => {

    const expanded = index === selectedIndex;

    const handleOnSelect = (e) => {
        setSelectedIndex(expanded ? null : index); 
        let element = e.target

        if (!expanded) {
            setTimeout( function() {
                element.scrollIntoView({behavior: "smooth"});
            }, 50)
        }
    }

    return (
        <div 
            key={index} 
            className={`gallery-item ${expanded ? 'expanded' : ''}`}
            onClick={handleOnSelect} 
            {...Cursor.applyBehavior(expanded ? 'collapse' : 'expand')}
        >
            <p>{ jogNumber(index, 2) }. {description} </p>
            { expanded && <ImageWrapper id={url.childImageSharp.id} /> }
        </div>
    )

}

export default GalleryPage;