import './App.css';
import { Chat } from './components/Chat/Chat';
import { Wrapper } from './components/Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper >
        <Chat />
      </Wrapper>
    </div>
  );
}

export default App;
