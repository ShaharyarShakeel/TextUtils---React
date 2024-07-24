import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared", "success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClear}>To clear text field</button>
            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
                <p> {text.trim() === '' ? 0 : text.trim().split(' ').length} words and {text.length} characters </p>
                <p>{text.split(" ").length * 0.008} Time is required to read those words</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your some text to preview"}</p>
            </div>
        </>
    )
}
