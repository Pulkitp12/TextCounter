import React from 'react'

function Diction(props) {
    const show = async()=>{
    let word = document.getElementById('search').value;
    let data = await fetch('https://api.api-ninjas.com/v1/dictionary?word=' + word ,{
            method: 'GET',
            headers: { 'X-Api-Key': 'iVVTokfz9jakfGnL/e9BXw==UJ9ZsdRGIkKgwuse'},
            contentType: 'application/json'
    });  
    let parseData= await data.json();
    document.getElementById('define').style.backgroundColor="gainsboro";
    document.getElementById('define').textContent=parseData.definition;
}
  return (
    <div className='container py-2 px-2 my-4 row'>
      <div className='col-1'></div>
      <div className='col-5'>
      <div className='text-center my-2' style={props.mode==='light'?{color:'black'}:{color:'white'}}><b>Don't know any specific word? No problem search it below</b></div>
        <input type="text" className='form-control' id="search" placeholder="Type a word to search" style={props.mode==='light'?{color:'black',backgroundColor:'white',border:"2px solid black"}:{color:'black',backgroundColor:'gray',border:"2px solid black",cursor:"default"}}></input>
        <button onClick={show} className="form-control btn btn-lg btn-primary my-3">Search</button>
        </div>
        <div className='col-5'>
            <textarea cols={100} rows={6} id='define'style={props.mode==='light'?{color:'black',backgroundColor:'white',border:"2px solid black"}:{color:'black',backgroundColor:'gray',border:"2px solid black",cursor:"default"}}></textarea></div>
    </div>
  )
}

export default Diction