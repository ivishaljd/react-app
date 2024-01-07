import React ,{ useState } from 'react'

export default function Textform(props) {
    
   const handleupclick = ()=>{
    //console.log("uppercase was clicked"+text);
    let newText= text.toUpperCase();
    setText(newText )
    props.showAlert("Converted to Uppercase","sucess");
}

const handleloclick = ()=>{
  let newText= text.toLowerCase();
  setText(newText )
  props.showAlert("Converted to Lowercase","sucess");
}
const handleclearclick = ()=>{
  let newText= ("");
  setText(newText ) 
  props.showAlert("Text is clear","sucess");
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const handleCapitalize = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  setText(newText);
  props.showAlert("Text is capitalize","sucess");
}
const readTxt = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = function(event){
      setText(event.target.result);
  };
  reader.readAsText(file);
}
const handlecopy = ()=>{
  var text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy to clipboard","sucess");
}
   const handleonchange = (event)=>{
   // console.log("on change");
    setText(event.target.value);
}
const [text, setText] = useState('');
  return (
  <> 
  <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
     <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-success mx-2" onClick={handleupclick}>
 convert to uppercase  </button>
 <button className="btn btn-success mx-2" onClick={handleloclick}>
 convert to lowercase  </button>
  <button className="btn btn-success mx-2" onClick={handleclearclick}>
 clear  </button>
 <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
 <button className="btn btn-primary mx-2" onClick={handleCapitalize}>
 Capitalize  </button>
 <input type="file" className="btn btn-secondary my-3" accept="text/plain" onChange = {readTxt}/>
 <button className="btn btn-primary mx-2" onClick={handlecopy}>
 Copy  </button>
 </div>
 <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
  <h1>your text summary</h1> 
  <p>{text.split(" ").length>1 ? text.split(" ").length - 1: 0 } words and {text.length} charecters</p>
<p>{0.008 * text.split(" ").length} minutes read </p>
<h2>Preview</h2>
<p>{text}</p>


 </div>
 </> 
  )
}
