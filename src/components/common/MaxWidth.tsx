import React from 'react'

interface MaxWidthProps {
    children: React.ReactNode;
}

const MaxWidth = ({ children }: Readonly<MaxWidthProps>) => {
    return (
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    )
}

export default MaxWidth
