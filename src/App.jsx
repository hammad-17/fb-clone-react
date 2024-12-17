import logo from './logo.svg';
import './App.css';
import LeftBar from './component/leftBar.jsx';
import MainBar from './component/mainBar.jsx';
import RightBar from './component/rightBar.jsx';

function App() {
  return (
    
    <div className="App">
      <LeftBar />
      <MainBar />
      <RightBar />
    </div>
  );
}

export default App;
