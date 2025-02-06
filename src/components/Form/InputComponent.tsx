import React from 'react'
const InputComponent = (props: any) => {
  const onInputChange = (e: any) => props.onInputChange(e.target.checked);
  
  return <input type={props.type} onChange={onInputChange} id={props.id}/>
}

export default InputComponent