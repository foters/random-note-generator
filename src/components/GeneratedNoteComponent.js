import './GeneratedNoteComponent.css';

const GeneratedNoteComponent = props => {
  return (
    <div className="generated-note-wrapper">
      <div className="generated-note-wrapper__circle">
        {props.note && props.note.value}
      </div>
      <div className="generated-note-wrapper__alterations">
        {props.showScale && props.note && props.note.alteratedValues}
      </div>
    </div>
  );
}

export default GeneratedNoteComponent;