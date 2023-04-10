import React, { useState } from 'react';\nimport Chatbot from '../components/Chatbot';\n\nfunction Chat() {\n  const [apiKey, setApiKey] = useState('');\n\n  return (\n    <div className='main-container'>\n      <h1>Chat</h1>\n      <Chatbot apiKey={apiKey} />\n    </div>\n  );\n}\n\nexport default Chat;