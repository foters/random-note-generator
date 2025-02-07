import { useState } from "react";
import './RandomNoteComponent.css';
import ButtonComponent from "./Form/ButtonComponent";
import React from "react";
import { useTranslation } from "react-i18next";

const RandomNoteComponent = (props: any) => {
  const {t} = useTranslation();

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
    const scaleIndex = Math.floor(Math.random() * props.scales.length);
    props.onGeneratedNote(Math.floor(Math.random() * num), scaleIndex);
    props.onToggleDiesis(diesisFlag);
  };

  const toggleDiesis = (e: any) => {
    const checked = e.target.checked;
    setDiesisFlag(checked);
    props.onToggleDiesis(checked);
  }
  
  const toggleBemolle = (e: any) => {
    const checked = e.target.checked;
    setBemolleFlag(checked);
    props.onToggleBemolle(checked);
  }

  const toggleAlteraction = (e: any) => {
    const checked = e.target.checked;
    props.onToggleAlteraction(checked);
  }
  const toggleScale = (e: any) => {
    const checked = e.target.checked;
    props.onToggleScaleType(checked);
  }

  return (
    <div className="random-note-wrapper">
      <div className="random-note-wrapper__checkboxes">
        <div className="random-note-wrapper__checkboxes-element">
          <label htmlFor='toggleDiesis'>{t('diesis')}</label>
          <div className="button-cover">
            <div className="button r switch-button">
              <input type="checkbox" className="checkbox" id="toggleDiesis" onChange={toggleDiesis} />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
        <div className="random-note-wrapper__checkboxes-element">
          <label htmlFor='toggleBemolle'>{t('bemolle')}</label>
          <div className="button-cover">
            <div className="button r switch-button">
              <input type="checkbox" className="checkbox" id="toggleBemolle" onChange={toggleBemolle} />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
        <div className="random-note-wrapper__checkboxes-element">
          <div className="tooltip-label">
            <label htmlFor='toggleAlteraction'>{t('alterations')}</label>
            <span className="info-tooltip"></span>
            <span className="tooltip-box">{t('tooltipAlterations')}</span>
          </div>
          <div className="button-cover">
            <div className="button r switch-button">
              <input type="checkbox" className="checkbox" id="toggleAlteraction" onChange={toggleAlteraction} />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
        <div className="random-note-wrapper__checkboxes-element">
          <label htmlFor='toggleScale'>{t('scaleType')}</label>
          <div className="button-cover">
            <div className="button r switch-button">
              <input type="checkbox" className="checkbox" id="toggleScale" onChange={toggleScale} />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </div>

      <ButtonComponent onClick={generateNote} disabled={false} />
    </div>
  );
}

export default RandomNoteComponent;