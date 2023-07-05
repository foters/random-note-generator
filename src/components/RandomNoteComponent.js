import { useState } from "react";
import ButtonComponent from "./Form/ButtonComponent";
import './RandomNoteComponent.css';

const RandomNoteComponent = (props) => {
  const [diesisFlag, setDiesisFlag] = useState(false);
  const [bemolleFlag, setBemolleFlag] = useState(false);
  const generateNote = () => {
    let num = 7;
    if((diesisFlag && !bemolleFlag) || (!diesisFlag && bemolleFlag)) {
      num = 14;
    }
    props.onGeneratedNote(parseInt(Math.random() * num));
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
      </div>

      <ButtonComponent onClick={generateNote} disabled={false} />
    </div>
  );
}

export default RandomNoteComponent;