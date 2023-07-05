const ButtonComponent = (props) => {
  console.log('disabled: ', props.isButtonDisabled);
  const generateNoteHandler = () => {
    console.log('generateNoteHandler ', 'notazza');
    const note = parseInt(Math.random() * 13);
    props.onGeneratedNote(note);
  }

  return (
    <button onClick={generateNoteHandler} disabled={props.isButtonDisabled}>click me</button>
  )
}

export default ButtonComponent;