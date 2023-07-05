import './App.css';
import HeaderComponent from './components/HeaderComponent';
import RandomNoteComponent from './components/RandomNoteComponent';
import ButtonComponent from './components/ButtonComponent';
import { useState } from 'react';

const App = () => {
  
  const [note, setNote] = useState(0);
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  
  const generatedNoteHandler = (e) => setNote(e);

  const onAlterationClickHandler = (e) => setIsDisabledButton(e);

  return (
    <div className="App">
      <HeaderComponent/>
      <main>
        <RandomNoteComponent note={note} onAlterationClick={onAlterationClickHandler}/>
        <ButtonComponent onGeneratedNote={generatedNoteHandler} isButtonDisabled={isDisabledButton}/>
      </main>
    </div>
  );
}

export default App;
