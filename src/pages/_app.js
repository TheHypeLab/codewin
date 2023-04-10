import '../styles/globals.css'
import { Auth } from '@supabase/ui'
import supabase from '../supabaseConfig'

function MyApp({ Component, pageProps }) {
  return (
    <div className='container'>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </div>
  )
}

export default MyApp;