import React from 'react';
import { Button, TextareaAutosize, Typography } from '@material-ui/core';


const MessageBoard = (props) => {

    const messages = props.messages;
    const user = props.user


    return (
        <div className='messageBoardBody'>
            <div className='messageList'> 
                {
                    messages.map((message, index) => {
                        return (
                            <div className='message'>
                                <div>
                                    <Typography variant='subtitle2'>{message.sender}</Typography>
                                    <Typography variant='subtitle2'>{message.time}</Typography>
                                </div>
                                <Typography variant='body2'>{message.body}</Typography>
                            </div>
                        );
                    })
                }
            </div>
            <div className='newMessage'>
                <form>
                    <Button>Send</Button>
                    <TextareaAutosize />
                </form>
            </div>
        </div>
    );
}

export default MessageBoard;

