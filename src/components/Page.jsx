import React from 'react'

import '../styles/components.scss';

const Page = ({hash, render, header}) => {

    return (
        <div id={hash} >
            { header || <div/> }
            <div className={'page'}>
                {render}
            </div>
        </div>
    )

}
export default Page