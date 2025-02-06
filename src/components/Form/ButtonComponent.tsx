import React from 'react';
import './ButtonComponent.css';

const ButtonComponent = (props: any) => <button onClick={props.onClick} disabled={props.isButtonDisabled}>Get the note!</button>

export default ButtonComponent;