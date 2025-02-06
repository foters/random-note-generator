import { useState } from "react";
import ButtonComponent from "./Form/ButtonComponent";
import './RandomNoteComponent.css';

const RandomNoteComponent = (props) => {
  const [diesisFlag, setDiesisFlag] = useState(false);
  const [bemolleFlag, setBemolleFlag] = useState(false);
  const generateNote = () => {
    let num = 7;
    if(diesisFlag || bemolleFlag) {
      num = 14;
    }
    if(diesisFlag && bemolleFlag) {
      num = 21;
    }
    const scaleIndex = parseInt(Math.random() * props.scales.length);
    props.onGeneratedNote(parseInt(Math.random() * num), scaleIndex);
    props.onToggleDiesis(diesisFlag);
  };

  const toggleDiesis = e => {
    const checked = e.target.checked;
    setDiesisFlag(checked);
    props.onToggleDiesis(checked);
  }
  
  const toggleBemolle = e => {
    const checked = e.target.checked;
    setBemolleFlag(checked);
    props.onToggleBemolle(checked);
  }

  const toggleAlteraction = e => {
    const checked = e.target.checked;
    props.onToggleAlteraction(checked);
  }
  const toggleScale = e => {
    const checked = e.target.checked;
    props.onToggleScaleType(checked);
  }

  return (
    <div className="random-note-wrapper">
      
      <div className="random-note-wrapper__checkboxes">
        <div className="random-note-wrapper__checkboxes-element">
          <input type='checkbox' id="toggleDiesis" onChange={toggleDiesis}/>
          <label htmlFor='toggleDiesis'>#</label>
        </div>
        <div className="random-note-wrapper__checkboxes-element">
          <input type='checkbox' id="toggleBemolle" onChange={toggleBemolle}/>
          <label htmlFor='toggleBemolle'>♭</label>
        </div>
        <div className="random-note-wrapper__checkboxes-element">
          <input type='checkbox' id="toggleAlteraction" onChange={toggleAlteraction}/>
          <label htmlFor='toggleAlteraction'>Alterations</label>
        </div>
        <div className="random-note-wrapper__checkboxes-element">
          <input type='checkbox' id="toggleScale" onChange={toggleScale}/>
          <label htmlFor='toggleScale'>Scale type</label>
        </div>
      </div>

      <ButtonComponent onClick={generateNote} disabled={false} />
    </div>
  );
}

export default RandomNoteComponent;