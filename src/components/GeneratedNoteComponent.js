import './GeneratedNoteComponent.css';

const GeneratedNoteComponent = props => {
  const alterations = props.note.scales.filter(s => s.key === props.scaleType.key)?.[0]?.value;
  
  return (
    <div className="generated-note-wrapper">

      <div className="generated-note-wrapper__circle">
        {props.note && props.note.value}
      </div>
      <div className="generated-note-wrapper__alterations">
        {props.showScale && props.scaleType && (
          <p>{ alterations }</p>
        )}
      </div>
      <div className="generated-note-wrapper__scale-type">
        {props.showScaleType && props.scaleType && (
          <p>Scala {props.scaleType.name}</p>
        )}
      </div>
    </div>
  );
}

export default GeneratedNoteComponent;