import logo from './logo.svg';
import './App.css';
import Modal from './components/modal';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  return (
    
    <div className="App">
      <div>
        <h2> Create Modal</h2>
      </div>
      <div>
        <p>Modals are separate windows within an application, most often as a dialog box. 
          They are a common user interface pattern for providing information or requiring confirmation.</p>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal title="My Modal"  onClose={() => setShow(false)} show={show}/>
      <p> how React can be used to implement modals by passing props and functionality from one component to another.</p>
      </div>
     
    </div>
  );
}

export default App;
