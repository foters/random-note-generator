import './App.css';
import GeneratedNoteComponent from './components/GeneratedNoteComponent';
import HeaderComponent from './components/HeaderComponent';
import RandomNoteComponent from './components/RandomNoteComponent';
import { useState } from 'react';

const App = () => {

  const fullNotes = [
    {
      id: 0,
      value: 'DO♭'
    },
    {
      id: 1,
      value: 'DO'
    },
    {
      id: 2,
      value: 'DO#'
    },
    {
      id: 3,
      value: 'RE♭'
    },
    {
      id: 4,
      value: 'RE'
    },
    {
      id: 5,
      value: 'RE#'
    },
    {
      id: 6,
      value: 'MI♭'
    },
    {
      id: 7,
      value: 'MI'
    },
    {
      id: 8,
      value: 'MI#'
    },
    {
      id: 9,
      value: 'FA♭'
    },
    {
      id: 10,
      value: 'FA'
    },
    {
      id: 11,
      value: 'FA#'
    },
    {
      id: 12,
      value: 'SOL♭'
    },
    {
      id: 13,
      value: 'SOL'
    },
    {
      id: 14,
      value: 'SOL#'
    },
    {
      id: 15,
      value: 'LA♭'
    },
    {
      id: 16,
      value: 'LA'
    },
    {
      id: 17,
      value: 'LA#'
    },
    {
      id: 18,
      value: 'SI♭'
    },
    {
      id: 19,
      value: 'SI'
    },
    {
      id: 20,
      value: 'SI#'
    },
  ];

  const naturalNotes = [
    {
      id: 0,
      value: 'DO'
    },
    {
      id: 1,
      value: 'RE'
    },
    {
      id: 2,
      value: 'MI'
    },
    {
      id: 3,
      value: 'FA'
    },
    {
      id: 4,
      value: 'SOL'
    },
    {
      id: 5,
      value: 'LA'
    },
    {
      id: 6,
      value: 'SI'
    },
  ];

  const noBemolleNotes = [
    {
      id: 0,
      value: 'DO'
    },
    {
      id: 1,
      value: 'DO#'
    },
    {
      id: 2,
      value: 'RE'
    },
    {
      id: 3,
      value: 'RE#'
    },
    {
      id: 4,
      value: 'MI'
    },
    {
      id: 5,
      value: 'MI#'
    },
    {
      id: 6,
      value: 'FA'
    },
    {
      id: 7,
      value: 'FA#'
    },
    {
      id: 8,
      value: 'SOL'
    },
    {
      id: 9,
      value: 'SOL#'
    },
    {
      id: 10,
      value: 'LA'
    },
    {
      id: 11,
      value: 'LA#'
    },
    {
      id: 12,
      value: 'SI'
    },
    {
      id: 13,
      value: 'SI#'
    },
  ];

  const noDiesisNotes = [
    {
      id: 0,
      value: 'DO♭'
    },
    {
      id: 1,
      value: 'DO'
    },
    {
      id: 3,
      value: 'RE♭'
    },
    {
      id: 4,
      value: 'RE'
    },
    {
      id: 6,
      value: 'MI♭'
    },
    {
      id: 7,
      value: 'MI'
    },
    {
      id: 9,
      value: 'FA♭'
    },
    {
      id: 10,
      value: 'FA'
    },
    {
      id: 12,
      value: 'SOL♭'
    },
    {
      id: 13,
      value: 'SOL'
    },
    {
      id: 15,
      value: 'LA♭'
    },
    {
      id: 16,
      value: 'LA'
    },
    {
      id: 18,
      value: 'SI♭'
    },
    {
      id: 19,
      value: 'SI'
    },
  ];

  const landingNote = naturalNotes[parseInt(Math.random() * 7)]

  const [note, setNote] = useState(landingNote);
  const [bemolleEnabled, setBemolleEnabled] = useState(false);
  const [diesisEnabled, setDiesisEnabled] = useState(false);

  const toggleBemolleHandler = e => setBemolleEnabled(e);
  const toggleDiesisHandler = e => setDiesisEnabled(e);

  const generatedNoteHandler = e => {
    let newNotes = [...naturalNotes];
    if(diesisEnabled && !bemolleEnabled) {
      newNotes = [...noBemolleNotes];
    }
    if(!diesisEnabled && bemolleEnabled) {
      newNotes = [...noDiesisNotes];
    }
    if(diesisEnabled && bemolleEnabled) {
      newNotes = [...fullNotes];
    }
    setNote(newNotes[e]);
  };


  return (
    <div className="App">
      <div className="global-wrapper">
        <HeaderComponent/>
        <main>
          <RandomNoteComponent notes={naturalNotes} onGeneratedNote={generatedNoteHandler} onToggleDiesis={toggleDiesisHandler} onToggleBemolle={toggleBemolleHandler}/>
          <GeneratedNoteComponent note={note}/>
        </main>
      </div>
    </div>
  );
}

export default App;
