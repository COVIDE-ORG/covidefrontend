import './App.css';
import Body from './component/Body/Body';
import Navbar from './component/Navbar/Navbar';
import Volunteer from './component/Volunteer/Volunteer';

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Body /> */}
      <Volunteer/>
    </div>
  );
}

export default App;
