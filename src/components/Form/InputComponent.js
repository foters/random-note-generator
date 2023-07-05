const InputComponent = props => {
  const onInputChange = (e) => props.onInputChange(e.target.checked);
  
  return <input type={props.type} onChange={onInputChange} id={props.id}/>
}

export default InputComponent