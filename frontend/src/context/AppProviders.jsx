import AuthProvider from "./AuthProvider";
import ChatProvider from "./ChatProvider";
import ReactQueryProvider from './ReactQueryProvider'
import { CookiesProvider } from 'react-cookie';

export default function AppProviders({ children }) {
  return (
    <ReactQueryProvider>
      <CookiesProvider>
        <AuthProvider>
          <ChatProvider>
            {children}
          </ChatProvider>
        </AuthProvider>
      </CookiesProvider>
    </ReactQueryProvider>
  )
}