import React from 'react'

function Pagelayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>navbar</h1>
            <div>{children}</div>
        </>
    )
}

export default Pagelayout