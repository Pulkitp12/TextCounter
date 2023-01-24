import React, { useState } from 'react';
import '../components/css/textfrm.css';
import { saveAs } from "file-saver";

function Textform(props) {
  const[text, setText]= useState('');
    const upper = ()=>{
      if(document.getElementById('box').value!==""){
        let newTxt = text.toUpperCase();
        setText(newTxt)
        props.showAlert("success","Done Uppercase")
        }}
        const lower = ()=>{
          if(document.getElementById('box').value!==""){
          let newTxt = text.toLowerCase();
          setText(newTxt)
          props.showAlert("success","Done Lowercase")
          }}
    const Capital = () => {
      if(document.getElementById('box').value!==""){
    let a = document.getElementById('box').value;
            let newT = a.split(/\s+/);
            for(let i=0;i<newT.length;i++){
              let x = newT[i].charAt(0)
              let y = x.toUpperCase() + newT[i].substr(1) ;
               newT[i]= y;
             }
             let b=newT.join(" ");
             setText(b);
            props.showAlert("success","Done Capitalcase")
            }}
            const copy = ()=>{
              if(document.getElementById('box').value!==""){
            let text= document.getElementById("box")
            
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("success","Text copied")
            }}
          const clear = ()=>{
            if(document.getElementById('box').value!==""){
            let newTxt = '';
            setText(newTxt);
            props.showAlert("success","Text Cleared")
            }}
            const Extraspace = ()=>{
              let newTxt = text.split(/[ ]+/);
              setText(newTxt.join(" "))
              }
             const txtchange = (event)=> {
              setText(event.target.value)
            }
           
            
            const [myStyle, setMyStyle] = useState({color:'black'});
            const [btn, setbtn] = useState("To red")
       const Textfile = ()=>{
        if(document.getElementById('box').value!==""){
          const content = document.getElementById('box').value;
          const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
          saveAs(file, "download.txt");
          props.showAlert("success","File Downloaded")
       }}
        const change = ()=>{
          let a= document.getElementById('abc')
          a.classList.remove(`text-${props.mode==='light'?'dark':'light'}`);
          if(myStyle.color === 'black'|| myStyle.color==='white'){
            setMyStyle({color:'red'})
            setbtn("To purple")
          }  
          if(myStyle.color === 'red'){
            if(props.mode==='light'){
            setMyStyle({color:'purple'})
            setbtn("to black")}
            else{setMyStyle({color:'purple'})
            setbtn("to white")}
          }  
          if(myStyle.color === 'purple'){
            if(props.mode==='light'){
            setMyStyle({color:'black'})
            setbtn("To red")}
            else{
              setMyStyle({color:'white'})
            setbtn("To red")}
            }
          }        
      const Toggleview = ()=>{
        if(document.getElementById('preview').textContent==="Preview")
        {
        document.getElementById('ab').style.display="block";
         document.getElementById('preview').textContent="Remove Preview";
        }
        else{
          document.getElementById('ab').style.display="none";
         document.getElementById('preview').textContent="Preview";
        }
      }  
      

  return (
    <>
    <div className='container mb-2 py-2' style={props.mode==='light'?{color:'black',backgroundColor:'white',border:"2px solid black"}:{color:'white',backgroundColor:'black',border:"2px solid black"}}>
        <form>
        <div className="form-group">
          <textarea className="form-control my-3" id="box" style={props.mode==='light'?{color:'black',backgroundColor:'white',border:"2px solid black"}:{color:'white',backgroundColor:'gray',cursor:"default"}} rows={14} cols={40} value={text} onChange={txtchange}/>
        </div></form>
        <div className='d-flex justify-content-around'>
                            <span className="dropdown">
                      <button className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Case
                      </button>

                      <ul className="dropdown-menu text-center" style={{backgroundColor:"gainsboro"}}>
                        <li><h4 className="my-2"  onClick={upper}>UpperCase</h4></li>
                        <li><h4 className="my-2" onClick={lower}>LowerCase</h4></li>
                        <li><h4 className="my-2" onClick={Capital}>FirstCase</h4></li>
                      </ul>
                    </span>
        
        
        <button className="btn btn-danger btn-sm" onClick={clear}>Clear</button>
        
        <button className="btn btn-warning btn-sm" onClick={Extraspace}>RemoveXtraSpace</button>
        <button className="btn btn-info btn-sm" onClick={copy}>CopyText</button>
        <button className="btn btn-primary btn-sm" onClick={Textfile}>SaveTextFile</button>
        

                          <div class="btn-group">
                          <button className="btn btn-danger btn-sm" onClick={Toggleview} id="preview">Preview</button>
                    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu text-center">
                      <li><button className="btn btn-outline-info btn-sm" onClick={change}>{btn}</button></li>  
                    </ul>
                  </div>
        </div>
        <hr/>
          <div className='text-center my-3'>
         <span className='my-2 mx-4'  style={props.mode==='light'?{color:'black'}:{color:'white'}}><b>Total Words : </b> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</span>
         <span className='my-2 mx-4' style={props.mode==='light'?{color:'black'}:{color:'white'}}><b>Total Characters : </b>{text.length}</span>
         <span className='my-2 mx-4' style={props.mode==='light'?{color:'black'}:{color:'white'}}><b>Reading Time : </b>{Math.ceil(text.split(/\s+/).filter((element)=>{return element.length!==0}).length/4.59)} seconds</span>
         <span className='my-2 mx-4' style={props.mode==='light'?{color:'black'}:{color:'white'}}><b>Speaking Time : </b>{Math.ceil(text.split(/\s+/).filter((element)=>{return element.length!==0}).length/2.5)} seconds</span>
         <span className='my-2 mx-4' style={props.mode==='light'?{color:'black'}:{color:'white'}}><b>Total Sentences : </b>{text.split('.').filter((element)=>{return element.length!==0}).length} 
         </span>
         <span className='my-2 mx-4' style={props.mode==='light'?{color:'black'}:{color:'white'}}><b>Total Paragraphs : </b>{text.split(/\n/).filter((element)=>{return element.length!==0}).length} 
         </span>
         </div>
         
    </div>
    <div id='ab' className='my-4'><p id='abc' className={`text-${props.mode==='light'?'dark':'light'} my-4 py-3 px-3 border`} style={myStyle}> {text.length===0?"Enter Something for preview":text.split(/\s+/).filter((element)=>{return element.length!==0}).join(" ")}</p></div>
    </>
  )
}
export default Textform;