import './GeneratedNoteComponent.css';

const GeneratedNoteComponent = props => {
  return (
    <div className="generated-note-wrapper">
      <div className="generated-note-wrapper__circle">
        {props.note && props.note.value}
      </div>
      <div className="generated-note-wrapper__alterations">
        {props.showScale && props.note && (
          <p>{ props.note.alteratedValues }</p>
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