import React from 'react';
import './GeneratedNoteComponent.css';
import { GeneratedNoteProps } from '../types';
import { useTranslation } from 'react-i18next';


const GeneratedNoteComponent = (props: GeneratedNoteProps) => {
  const alterations = props.note.scales.filter(s => s.key === props.scaleType.key)?.[0]?.value;
  const { t } = useTranslation();

  return (
    <div className="generated-note-wrapper">

      <div className="generated-note-wrapper__circle">
        {props.note && props.note.value}
      </div>
      <div className="generated-note-wrapper__scale-type">
        {props.showScaleType && props.scaleType && (
          <p>{t(`${props.scaleType.name}`)}</p>
        )}
      </div>
      <div className="generated-note-wrapper__alterations">
        {props.showScale && props.scaleType && (
          <p>{ alterations }</p>
        )}
      </div>
    </div>
  );
}

export default GeneratedNoteComponent;