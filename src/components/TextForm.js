import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        setText(text.toUpperCase())
    }
    const [text,setText] = useState("Enter the text");
  return (
    <>
    <div style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>
      <div>
      <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control"  onChange={handleOnChange} id="myBox" rows="8" value={text}/>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
      <div className="container my-3  ">
        <h1>Your Text summary</h1>
        <p>{text.split(' ').length} words, {text.length} characters</p>
        <p>{0.008 * text.length} minutes read</p>
      </div>
    </div>
    </>
  )
}
