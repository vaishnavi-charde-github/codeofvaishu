import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text in Upper Case", 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text in Lower Case", 'success');
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text clear", 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
            <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} time to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>

  )
}
