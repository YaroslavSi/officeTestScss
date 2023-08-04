import './css/style.min.css';
import Navigator from './components/Navigator/Navigator';
import GeneralPage from './components/GeneralPage/GeneralPage';
import About from './components/About/About';
import Mission from './components/Mission/Mission';
import Projects from './components/Projects/Projects';
import Form from './components/Form/Form';
import Basement from './components/Basement/Basement';
import Creators from './components/Creators/Creators';
import { useState, useEffect } from 'react';
import Popup from './components/Popup/Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navigator />
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      <GeneralPage isOpen={isOpen} setIsOpen={setIsOpen} />
      <About />
      <Mission />
      <Projects />
      <Form />
      <Basement />
      <Creators />
    </>
  );
}

export default App;
