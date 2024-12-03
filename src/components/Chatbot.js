import axios from 'axios';
import { useState } from 'react';

const Chatbot = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:5000/chat', { prompt });
            setResponse(res.data.reply);
        } catch (error) {
            console.error('Error:', error);
            setResponse('Something went wrong.');
        }
    };

    return (
        <div>
            <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your message..."
            />
            <button onClick={sendMessage}>Send</button>
            <div>{response}</div>
        </div>
    );
};

export default Chatbot;
