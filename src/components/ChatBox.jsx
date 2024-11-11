import { useState } from 'react';
import Button from '../mini/Button';



const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            // Add logic to send the input to the chatbot backend here
        }
    };

    return (
        <div className="outer-div flex justify-center items-center h-screen bg-green3">
            <div className='bg-green1 rounded-xl'>
                <div className="chat-container flex flex-col justify-between rounded-xl bg-transparent h-96 w-2/3">
                    <div className="messages overflow-y-auto flex-grow">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center w-full mt-2 mb-0">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-grow border border-gray-300 rounded-xl p-2"
                        />
                        <Button
                            text={"send"}
                            onClick={handleSend}
                            className={"px-4 py-2 rounded-xl text-white font-bold bg-blue hover:scale-105"}
                        ></Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ChatBox;
