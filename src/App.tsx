import ChatScreen from './components/chat/ChatScreen';
import PhoneFrame from './components/layout/PhoneFrame';
import IntroScreen from './components/screens/IntroScreen';
import SummaryScreen from './components/screens/SummaryScreen';
import { useAppState } from './context/AppContext';

function App() {
  const { state } = useAppState();
  return (
    <PhoneFrame>
      {state.currentScreen === 'INTRO' && <IntroScreen />}
      {state.currentScreen === 'SIMULATOR' && <ChatScreen />}
      {state.currentScreen === 'SUMMARY' && <SummaryScreen />}
    </PhoneFrame>
  );
}

export default App;
