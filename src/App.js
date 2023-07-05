import './App.css';
import GeneratedNoteComponent from './components/GeneratedNoteComponent';
import HeaderComponent from './components/HeaderComponent';
import RandomNoteComponent from './components/RandomNoteComponent';
import { useState } from 'react';

const App = () => {

  const fullNotes = [
    {
      id: 0,
      value: 'DO♭',
      alteratedValues: 'SI♭ MI♭ LA♭ RE♭ SOL♭ DO♭ FA♭'
    },
    {
      id: 1,
      value: 'DO',
      alteratedValues: '/'
    },
    {
      id: 2,
      value: 'DO#',
      alteratedValues: 'FA# DO# SOL# RE# LA# MI# SI#'
    },
    {
      id: 3,
      value: 'RE♭',
      alteratedValues: 'SI♭ MI♭ LA♭ RE♭ SOL♭'
    },
    {
      id: 4,
      value: 'RE',
      alteratedValues: 'FA# DO#'
    },
    {
      id: 5,
      value: 'RE#',
      alteratedValues: 'FA## DO## SOL# RE# LA# MI# SI#'
    },
    {
      id: 6,
      value: 'MI♭',
      alteratedValues: 'SI♭ MI♭ LA♭'
    },
    {
      id: 7,
      value: 'MI',
      alteratedValues: 'FA# DO# SOL# RE#'
    },
    {
      id: 8,
      value: 'MI#',
      alteratedValues: 'FA## DO## SOL## R#E# LA# MI# SI#'
    },
    {
      id: 9,
      value: 'FA♭',
      alteratedValues: 'SI♭♭ MI♭ LA♭ RE♭ SOL♭ DO♭ FA♭'
    },
    {
      id: 10,
      value: 'FA',
      alteratedValues: 'SI♭'
    },
    {
      id: 11,
      value: 'FA#',
      alteratedValues: 'FA# DO# SOL# RE# LA# MI#'
    },
    {
      id: 12,
      value: 'SOL♭',
      alteratedValues: 'SI♭ MI♭ LA♭ RE♭ SOL♭ DO♭'
    },
    {
      id: 13,
      value: 'SOL',
      alteratedValues: 'FA#'
    },
    {
      id: 14,
      value: 'SOL#',
      alteratedValues: 'FA## DO# SOL# RE# LA# MI# SI#'
    },
    {
      id: 15,
      value: 'LA♭',
      alteratedValues: 'SI♭ MI♭ LA♭ RE♭'
    },
    {
      id: 16,
      value: 'LA',
      alteratedValues: 'FA# DO# SOL#'
    },
    {
      id: 17,
      value: 'LA#',
      alteratedValues: 'FA## DO## SOL## RE# LA# MI# SI#'
    },
    {
      id: 18,
      value: 'SI♭',
      alteratedValues: 'SI♭ MI♭'
    },
    {
      id: 19,
      value: 'SI',
      alteratedValues: 'FA# DO# SOL# RE# LA#'
    },
    {
      id: 20,
      value: 'SI#',
      alteratedValues: 'FA## DO## SOL## RE## LA## MI# SI#'
    },
  ];

  const naturalNotes = [
    {
      id: 0,
      value: 'DO',
      alteratedValues: '/',
    },
    {
      id: 1,
      value: 'RE',
      alteratedValues: 'FA# DO#'
    },
    {
      id: 2,
      value: 'MI',
      alteratedValues: 'FA# DO# SOL# RE#'
    },
    {
      id: 3,
      value: 'FA',
      alteratedValues: 'SI♭'
    },
    {
      id: 4,
      value: 'SOL',
      alteratedValues: 'FA#'
    },
    {
      id: 5,
      value: 'LA',
      alteratedValues: 'FA# DO# SOL#'
    },
    {
      id: 6,
      value: 'SI',
      alteratedValues: 'FA# DO# SOL# RE# LA#'
    },
  ];

  const noBemolleNotes = [
    {
      id: 0,
      value: 'DO',
      alteratedValues: '/'
    },
    {
      id: 1,
      value: 'DO#',
      alteratedValues: 'FA# DO# SOL# RE# LA# MI# SI#'
    },
    {
      id: 2,
      value: 'RE',
      alteratedValues: 'FA# DO#'
    },
    {
      id: 3,
      value: 'RE#',
      alteratedValues: 'FA## DO## SOL# RE# LA# MI# SI#'
    },
    {
      id: 4,
      value: 'MI',
      alteratedValues: 'FA# DO# SOL# RE#'
    },
    {
      id: 5,
      value: 'MI#',
      alteratedValues: 'FA## DO## SOL## R#E# LA# MI# SI#'
    },
    {
      id: 6,
      value: 'FA',
      alteratedValues: 'SI♭'
    },
    {
      id: 7,
      value: 'FA#',
      alteratedValues: 'FA# DO# SOL# RE# LA# MI#'
    },
    {
      id: 8,
      value: 'SOL',
      alteratedValues: 'FA#'
    },
    {
      id: 9,
      value: 'SOL#',
      alteratedValues: 'FA## DO# SOL# RE# LA# MI#'
    },
    {
      id: 10,
      value: 'LA',
      alteratedValues: 'FA# DO# SOL#'
    },
    {
      id: 11,
      value: 'LA#',
      alteratedValues: 'FA## DO## SOL## RE# LA# MI#'
    },
    {
      id: 12,
      value: 'SI',
      alteratedValues: 'FA# DO# SOL# RE# LA#'
    },
    {
      id: 13,
      value: 'SI#',
      alteratedValues: 'FA## DO## SOL## RE## LA## MI# SI#'
    },
  ];

  const noDiesisNotes = [
    {
      id: 0,
      value: 'DO♭',
      alteratedValues: 'SI♭ MI♭ LA♭ RE♭ SOL♭ DO♭ FA♭'
    },
    {
      id: 1,
      value: 'DO',
      alteratedValues: '/'
    },
    {
      id: 2,
      value: 'RE♭',
      alteratedValues: 'SI♭ MI♭ LA♭ RE♭ SOL♭'
    },
    {
      id: 3,
      value: 'RE',
      alteratedValues: 'FA# DO#'
    },
    {
      id: 4,
      value: 'MI♭',
      alteratedValues: 'SI♭ MI♭ LA♭'
    },
    {
      id: 5,
      value: 'MI',
      alteratedValues: 'FA# DO# SOL# RE#'
    },
    {
      id: 6,
      value: 'FA♭',
      alteratedValues: 'SI♭♭ MI♭ LA♭ RE♭ SOL♭ DO♭ FA♭'
    },
    {
      id: 7,
      value: 'FA',
      alteratedValues: 'SI♭'
    },
    {
      id: 8,
      value: 'SOL♭',
      alteratedValues: 'SI♭ MI♭ LA♭ RE♭ SOL♭ DO♭'
    },
    {
      id: 9,
      value: 'SOL',
      alteratedValues: 'FA#'
    },
    {
      id: 10,
      value: 'LA♭',
      alteratedValues: 'SI♭ MI♭ LA♭ RE♭'
    },
    {
      id: 11,
      value: 'LA',
      alteratedValues: 'FA# DO# SOL#'
    },
    {
      id: 12,
      value: 'SI♭',
      alteratedValues: 'SI♭ MI♭'
    },
    {
      id: 13,
      value: 'SI',
      alteratedValues: 'FA# DO# SOL# RE# LA#'
    },
  ];

  const landingNote = naturalNotes[parseInt(Math.random() * 7)]

  const [note, setNote] = useState(landingNote);
  const [bemolleEnabled, setBemolleEnabled] = useState(false);
  const [diesisEnabled, setDiesisEnabled] = useState(false);
  const [scaleEnabled, setScaleEnabled] = useState(false);

  const toggleBemolleHandler = e => setBemolleEnabled(e);
  const toggleDiesisHandler = e => setDiesisEnabled(e);
  const toggleAlteractionHandler = e => setScaleEnabled(e);

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

    console.log('newNotes ', newNotes);
    console.log('e ', e);
    console.log('newNotes[e] ', newNotes[e]);

    setNote(newNotes[e]);
  };

  return (
    <div className="App">
      <div className="global-wrapper">
        <HeaderComponent/>
        <main>
          <RandomNoteComponent 
            notes={naturalNotes} 
            onGeneratedNote={generatedNoteHandler}
            onToggleAlteraction={toggleAlteractionHandler}
            onToggleDiesis={toggleDiesisHandler}
            onToggleBemolle={toggleBemolleHandler}/>
          <GeneratedNoteComponent note={note} showScale={scaleEnabled}/>
        </main>
      </div>
    </div>
  );
}

export default App;
