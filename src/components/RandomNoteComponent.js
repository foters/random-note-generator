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
  const toggleScale = e => {
    const checked = e.target.checked;
    setBemolleFlag(checked);
    props.onToggleScale(checked);
  }


  // const test = () => {
  //   DO 1  DO# 2  REb 3  RE 4  RE# 5  MIb 6  MI 7  MI# 8  FAb 9  FA 10  FA# 11  SOLb 12  SOL 13  SOL# 14  LAb 15  LA 16  LA# 17  SIb 18  SI 19  SI# 20  DOb 21
  // }
     

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
          <input type='checkbox' id="toggleScale" onChange={toggleScale}/>
          <label htmlFor='toggleScale'>Alterations</label>
        </div>
      </div>

      <ButtonComponent onClick={generateNote} disabled={false} />
    </div>
  );
}

export default RandomNoteComponent;