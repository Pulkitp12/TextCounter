import React from 'react';

const Navbar=(props)=> {
  return (
    <nav className={`navbar navbar-expand-lg`} style={props.mode==='light'?{borderBottom:'1px solid black',backgroundColor:"aliceblue"}:{borderBottom:'1px solid white',color:"white",backgroundColor:"black"}}>
    <div className="container-fluid">
    <h1 className='mx-4'>TextUtil</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
      </ul>
      <div className="form-check form-switch">
       <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
       <label className="form-check-label">Enable Darkmode</label>
      </div>
    </div>
  </div>
  </nav>
  )
}
export default Navbar;