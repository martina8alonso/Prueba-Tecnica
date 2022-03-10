import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const closeIcon = (
    <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    
    <div className="App">
      <div>
        <h2 className='App-title'>Modal component with React</h2>
      </div>
      <div>
        <p>Modals are separate windows within an application, most often as a dialog box. 
          They are a common user interface pattern for providing information or requiring confirmation.</p>
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal className="App-modal" title="My Modal"  onClose={() => setShow(false)} show={show} />
      <p> How React can be used to implement modals by passing props and functionality from one component to another.</p>
      </div>
     
    </div>
  );
}

export default App;
