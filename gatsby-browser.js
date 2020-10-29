import React from "react";

// context
import { WindowProvider } from './src/context/WindowContext'

const wrapRootElement = ({element}) => (
    <WindowProvider>
        {element}
    </WindowProvider>
);

export { wrapRootElement };