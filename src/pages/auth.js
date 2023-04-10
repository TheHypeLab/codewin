import { useState } from 'react';\nimport { supabase } from '../supabaseClient';\n\nexport default function Auth() {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState('');\n\n  async function handleLogin() {\n    setLoading(true);\n    const { error } = await supabase.auth.signIn({ email, password });\n    if (error) {\n      setError(error.message);\n    }\n    setLoading(false);\n  }\n\n  return (\n    <div>\n      <h1>Login</h1>\n      <input\n        type='email'\n        placeholder='Email'\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n      <input\n        type='password'\n        placeholder='Password'\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n      />\n      <button onClick={handleLogin}>Login</button>\n      {error && <p>{error}</p>}\n    </div>\n  );\n}