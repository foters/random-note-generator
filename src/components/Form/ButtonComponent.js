import './ButtonComponent.css';

const ButtonComponent = (props) => <button onClick={props.onClick} disabled={props.isButtonDisabled}>Get the note!</button>

export default ButtonComponent;