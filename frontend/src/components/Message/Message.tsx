import React from 'react';
import './Message.css';

type MessageProps = {
    message: string;
    isUserMessage?: boolean;
    animate?: boolean;
}

export const Message = ({message, isUserMessage, animate}: MessageProps) => {
    const getClassName = ():string => {
        let className = 'Message';
        isUserMessage && (className += ' self');
        animate && (className += ' animate');
        return className;
    }

    return (
        <div className={getClassName()}>{message}</div>
    );
}