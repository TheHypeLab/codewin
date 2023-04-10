import { useState } from 'react';\nimport { useOpenAICompletion } from '../hooks/useOpenAICompletion';\n\nfunction Chatbot() {\n  const [input, setInput] = useState('');\n  const [messages, setMessages] = useState([]);\n  const { isOpen, setLoading, data } = useOpenAICompletion(input);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (input.trim() === '') return;\n    setMessages([...messages, { user: 'You', text: input }]);\n    setInput('');\n  };\n\n  useEffect(() => {\n    if (!setLoading) {\n      setMessages([...messages, { user: 'AI', text: data.choices[0].text }]);\n    }\n  }, [data]);\n\n  return (\n    <div className='chatbot-wrapper'>\n      <div className='chat-messages'>\n        {messages.map((message, index) => (\n          <div key={index} className={`message ${message.user === 'You' ? 'user-message' : 'ai-message'}`}>\n            <span>{message.user}: </span>{message.text}\n          </div>\n        ))}\n      </div>\n      <form onSubmit={handleSubmit} className='chat-input-form'>\n        <input\n          type='text'\n          placeholder='Type your message...'\n          value={input}\n          onChange={(e) => setInput(e.target.value)}\n        />\n        <button type='submit'>Send</button>\n      </form>\n    </div>\n  );\n}\n\nexport default Chatbot;