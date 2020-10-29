import React from 'react';

// styles
import '../styles/components.scss'

const DescriptionItem = ({title, body}) => {

    return (

        <div className={'description-item'}>
            <div className={'description-item-inner'}>

                <p className={'description-item-title'}>{title}</p>
                <p className={'description-item-body'}>{body}</p>

            </div>
        </div>

    )

}

export default DescriptionItem;
