import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');

    const handleUpClick =()=>{
       console.log("text",text);
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to UpperCase!","success")
    }

    const handleDownClick = () => {
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to LowerCase!","success")

    }
    const handlClearOnClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear !","success")
    }
    const OnhandleChange = (e) =>{
      setText(e.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success")

    }
    const handleRemoveSpace = () =>{
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed Extra Spaces!","success")

    }
  return (
      <> 
    <div className="container" style={{color: props.mode === 'dark'?'white':'#2F4F4F'}}>    
        <h2>{props.areaText}</h2>  
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={OnhandleChange} style={{backgroundColor: props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy the text</button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveSpace}>Extra Space Remove</button>
        <button className="btn btn-primary mx-1" onClick={handlClearOnClick}>Clear</button>

    </div> 
    <div className='container mb-3' style = {{color: props.mode === 'dark'?'white':'#2F4F4F'}}>
        <h3>text summary</h3>
        <p>{text.split(" ").length > 1 ? text.split(" ").length - 1 : "0" }: words && {text.length}: Characters</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text: "Enter something in the textboxabove to preview it here..." }</p>
    </div>
    </>      
  )
}
