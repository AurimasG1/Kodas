import { createContext, useCallback, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = useCallback(({ text, type }) => {
        const id = uuidv4();
        setMessages(m => [...m, { text, type, id }]);
        setTimeout(_ => {
            setMessages(m => m.filter(m => m.id !== id));
        }, 5000);
    }, [])

    return (
        <MessagesContext.Provider value={{
            addMessage
        }}>
            <>
                <div className="messages">
                    {
                        messages.map((message, i) => (
                            <div style={{ cursor: 'pointer' }} key={i}
                                className={`alert alert-${message.type}`}
                                role="alert"
                                onClick={_ => setMessages(m => m.filter(m => m.id !== message.id))}>
                                {message.text}
                            </div>
                        ))
                    }
                </div>
                {children}
            </>
        </MessagesContext.Provider >
    )
}


// <div key={i} className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
//                                 {message.text}
//                                 <button type="button" className="btn-close" data-bs-dismiss='alert' aria-label="Close" onClick={_ => setMessages(prev => prev.filter(m => m !== messages))}></button>
//                             </div>