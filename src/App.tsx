import { AppProvider } from './context/AppContext'
import { ChatScreen } from './components/ChatScreen'
import './App.css'

function App() {
  return (
    <AppProvider>
      <ChatScreen />
    </AppProvider>
  )
}

export default App

