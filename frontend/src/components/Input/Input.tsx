import React from 'react';
import './Input.css';

type InputProps = {
    enterKeyHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const Input = ({enterKeyHandler, placeholder}: InputProps) => {
    return (
        <input
            className='InputField'
            onKeyUp={enterKeyHandler}
            placeholder={placeholder ? placeholder : 'Type here'}
            >
        </input>
    );
}