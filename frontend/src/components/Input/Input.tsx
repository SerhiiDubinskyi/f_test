import React from 'react';
import './Input.css';

type InputProps = {
    enterKeyHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const Input = ({enterKeyHandler, onChangeHandler, placeholder}: InputProps) => {
    return (
        <input
            className='InputField'
            onKeyUp={enterKeyHandler}
            onChange={onChangeHandler}
            placeholder={placeholder ? placeholder : 'Type here'}
            >
        </input>
    );
}