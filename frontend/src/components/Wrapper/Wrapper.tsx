import React from 'react';
import './Wrapper.css';

export const Wrapper = ({children, ...rest}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className='Wrapper' {...rest}>
            {children}
        </div>
    );
}