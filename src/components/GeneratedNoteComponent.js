import './GeneratedNoteComponent.css';

const GeneratedNoteComponent = props => {
  return (
    <div className="generated-note-wrapper">
      {props.note && props.note.value}
    </div>
  );
}

export default GeneratedNoteComponent;