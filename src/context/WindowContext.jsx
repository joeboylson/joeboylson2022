import React, { useState } from 'react';
import { useEffect } from 'react';

const WindowContext = React.createContext();

const WindowProvider = ({children}) => {

    const [imageRatio, setImageRatio] = useState(0.6)

    useEffect(() => {

        window.addEventListener('resize', function() {
            if (window.innerWidth < 600 && imageRatio !== 0.3) {
                setImageRatio(0.3)
            } 

            if (window.innerWidth > 600 && imageRatio !== 0.6) {
                setImageRatio(0.6)
            } 

        }, false)

    }, [])


    return (
        <WindowContext.Provider value={{
            imageRatio,
            setImageRatio
        }}>
            {children}
        </WindowContext.Provider>

    )

};

export default WindowContext
export { WindowProvider }