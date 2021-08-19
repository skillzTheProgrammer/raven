import React from 'react'
import Authorize from './AuthContext'

export default function Store({children}) {
    return (
        <Authorize>
            {children}
        </Authorize>
    )
}
