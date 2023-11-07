import './App.css';
import Rate from './Rate';
import ThankYou from './ThankYou';


function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="z-0">
        <ThankYou />
      </div>
      <div className="z-40 absolute top-0">
        <Rate />
      </div>
    </div>
  );
}

export default App;
