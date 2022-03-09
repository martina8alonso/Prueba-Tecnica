import React from "react";
import Modal from "./components/Modal";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
  
      <Modal openButtonText="Sign up!">
        <form>
          <div>
            <label for="email-input">Email:</label>
            <input type="email" id="email-input" name="email" />
          </div>
          <div>
            <label for="password-input">Password:</label>
            <input type="password" id="password-input" name="password" />
          </div>
          <div> 
            <button type= "button">Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
