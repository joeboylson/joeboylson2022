import React from 'react';
import { useState } from 'react';

// styles
import '../styles/components.scss';

const Carousel = ({components}) => {

    const [itemIndex, setItemIndex] = useState(0);

    const increment = () => {
        if (itemIndex + 1 < components.length) setItemIndex(itemIndex + 1)
    }

    const decrement = () => {
        if (!itemIndex <= 0) setItemIndex(itemIndex - 1)
    }

    return (
        <div className={'carousel'}>

            <div className={'carousel-body'}>
                { components[itemIndex] || <p>No Item</p> }
            </div>
            
            <div className={'controls'}>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <p> {itemIndex} \ {components.length - 1} </p>
            </div>
        </div>
    )
}

export default Carousel;