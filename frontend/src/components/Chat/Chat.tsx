import React, { ReactComponentElement, ReactNode } from 'react';
import './Chat.css';
import { Input } from '../Input/Input';
import { Spacer } from '../Spacer/Spacer';
import { Message } from '../Message/Message';

type ChatProps = {
    children: ReactComponentElement<any> | ReactComponentElement<any>[];
}

export const Chat = () => {
    const [isInitial, setIsInitial] = React.useState<boolean>(true);
    const [messages, setMessages] = React.useState<ReactNode[]>([]);
    // const [userInput, setUserInput] = React.useState<string>('');

    const changeScrollPosition = ():void => {
        document.getElementsByClassName('Chat__MessageBox')[0].scrollTop = document.getElementsByClassName('Chat__MessageBox')[0].scrollHeight;
    }

    const postMessage = (
        msg:string,
        self:boolean = false,
        animate:boolean = true) => {
        if (isInitial) {
            setIsInitial(false);
        } else if (!!!isInitial) {
            setMessages([...messages, <Spacer />]);
        }
        setMessages([...messages, <Message message={msg} isUserMessage={self} animate={animate} />]);
        changeScrollPosition();
    }
    

    return (
        <div className='Chat'>
            <div className='Chat__MessageBox'>
                {messages.map((message, index) => {
                    return message;
                })}
            </div>
            <Input 
                onChangeHandler={(e:any) => {}}
                enterKeyHandler={(e:any) => {
                    if (e.key === 'Enter') {
                        postMessage(e.target.value, Math.random() >= 0.5);
                        e.target.value = '';
                    }
                }}
                placeholder='Type Question Here'
            />
        </div>
    );
}