import './App.css';
import { Contact } from './Component/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';




function App() {
  return (
    <div className="App">
      <div >
      <Header/>
     <div className='container-fluid'>
     <Sidebar/>
      <Contact/>
     </div>
      </div>
    </div>
  );
}

export default App;
