import React, { useState } from "react";

interface IMessages {
  id:      string;
  role:    string;
  content: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState< Array<IMessages> >([
    {
      id: String(Date.now()),
      role: "sistem",
      content: "Hi, How is it going?"
    },
    {
      id: String(Date.now()),
      role: "sistem",
      content: "How can I help you today?"
    },
  ]);

  
  const generateMessages =  async () => {
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "What is the recipe to make a coffe?" }]
      }),
    })
    .then(res => res.json())
    .then(data => {
      setMessages([ ...messages, { id: String(Date.now()), ...data.choices[0].message } ])
    })
  };

  return (
    <>
      <h1>Chat</h1>
      <button onClick={generateMessages} className="bg-red-500 p-10 rounded-middle">Hola</button>
      <div>{messages.length && messages.map((message, index) => (
        <div key={index * 1000}>{message.content}</div>
      ))}
      </div>
    </>
  )
};

export default ChatBot;