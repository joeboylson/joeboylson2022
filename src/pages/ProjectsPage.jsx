import React, { useState } from 'react';
// import Image from 'gatsby-image';

// styles
import '../styles/pages.scss';

// components
import ImageWrapper from '../components/ImageWrapper';
import DescriptionItem from '../components/DescriptionItem';
import Carousel from '../components/Carousel';

// utils
import Cursor from '../utils/Cursor';
import useProjectEntries from '../utils/useProjectEntries';
import { jogNumber } from '../utils/common';

const ProjectsPage = () => {

    const data = useProjectEntries();

    return (
        <div>

            <div className={'project-list-header'}>
                <span className={'index'} />
                <p className={'name'} >Name</p>
                <p className={'medium'} ></p>
                <span className={'expand-button'}></span>
            </div>

            <div className={'project-list'}>
                { data.map((item, index) => <ProjectItem key={index} index={index} {...item}/> )}
            </div>
        
        </div>
    )

}

const ProjectItem = ({index, name, medium, description, image, links}) => {

    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(!expanded);
    
    return (
        <div key={index} className={`project-item ${expanded ? 'expanded' : ''}`}>

            <div 
                className={'project-item-header'} 
                onClick={toggleExpand} 
                {...Cursor.applyBehavior(expanded ? 'collapse' : 'expand')}
            >
                <p className={'index'} >{ jogNumber(index, 2) }.</p>
                <p className={'name'} >{name}.</p>
                <p className={'medium'} ></p>
                <span className={'expand-button'}><p> {expanded ?  '▲' : '▼'} </p></span>
            </div>

            { expanded &&
                <div className={`project-item-body`}>

                        <Carousel components={[
                            <ImageWrapper id={image.childImageSharp.id} percent={0.5}/>,
                            <ImageWrapper id={image.childImageSharp.id} percent={0.5}/>,
                            <ImageWrapper id={image.childImageSharp.id} percent={0.5}/>,
                            <ImageWrapper id={image.childImageSharp.id} percent={0.5}/>,
                            <ImageWrapper id={image.childImageSharp.id} percent={0.5}/>,
                            <ImageWrapper id={image.childImageSharp.id} percent={0.5}/>,
                            <ImageWrapper id={image.childImageSharp.id} percent={0.5}/>,
                            <ImageWrapper id={image.childImageSharp.id} percent={0.5}/>,
                        ]}/>

                        <div className={'project-information'}>
                            <p><b>Project Information</b></p>
                            <DescriptionItem title={'Medium'} body={medium} />
                            <DescriptionItem title={'Description'} body={description} />
                        </div>

                </div>
            }
            
        </div>
    )

}

export default ProjectsPage;