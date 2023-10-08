import React, { ReactNode } from 'react';
import './Chat.css';
import { Input } from '../Input/Input';
import { Spacer } from '../Spacer/Spacer';
import { Message } from '../Message/Message';
import questionApi from '../../api/questionApi';

export const Chat = () => {
    const [isInitial, setIsInitial] = React.useState<boolean>(true);
    const [messages, setMessages] = React.useState<ReactNode[]>([]);

    const changeScrollPosition = ():void => {
        // drop scroll position to bottom
        document.getElementsByClassName('Chat__MessageBox')[0].scrollTop = 3000000
    }

    const postMessage = async (
        msg:string,
        self:boolean = false,
        animate:boolean = true) => {
        if (isInitial) {
            setIsInitial(false);
        } else if (!!!isInitial) {
            setMessages([...messages, <Spacer />]);
        }
        let appendedMessages = [...messages, <Message message={msg} isUserMessage={self} animate={animate} />];
        setMessages(appendedMessages);
        changeScrollPosition();
        getAnswer(appendedMessages, msg);

    }

    const getAnswer = async (allMessages: any, question: string) => {
        let data = await questionApi.getAnswer({question: question})
        setMessages([...allMessages, <Message message={data.answer} isUserMessage={false} animate={true} />]);
        setTimeout(() => {changeScrollPosition()}, 200);

    }
    

    return (
        <div className='Chat'>
            <div className='Chat__MessageBox'>
                {messages.map((message, index) => {
                    return message;
                })}
            </div>
            <Input 
                enterKeyHandler={(e: any) => {
                    if (e.key === 'Enter') {
                        postMessage(e.target.value, true);
                        e.target.value = '';
                        changeScrollPosition();

                    }
                }}
                placeholder='Type Question Here'
            />
        </div>
    );
}