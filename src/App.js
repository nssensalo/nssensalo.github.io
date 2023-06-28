import React from "react";
import ReactDOM from "react-dom";



function App() {
  return (
    <div>
        
        <header>
           
           
           <nav className="navbar" style={{ justifyContent: "center" }}>
              <ul style={{ display: "flex" }}>
                <li style={{ marginRight: "10px" }} ><a style={{ textDecoration: "none" }}>About</a></li> 
                <li style={{ marginRight: "10px" }} ><a href="" style={{ textDecoration: "none" }}>Skills</a></li> 
                <li style={{ marginRight: "10px" }} ><a href="" style={{ textDecoration: "none" }}>Projects</a></li> 
                <li style={{ marginRight: "10px" }} ><a href="" style={{ textDecoration: "none" }}>Contacts</a></li>
              </ul>
           </nav>
           <img className="flower-img" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_1280.jpg" alt="image" />
        </header>
        
        
      <body>
        <img className="circle-img"src="images/nanpngformat-removebg-preview.png" width="250" height="250" alt="Nansamba Ssensalo photo"/>
        {/* <table cellspacing="20">
              <td><img className="circle-img" src="images/nanpngformat.png" width="250" height="250" alt="Nansamba Ssensalo photo"/></td>
              <td><h1>
                  Nansamba Ssensalo
              </h1>
              <p><em><strong>Web Developer - Software Engineer - FinTech</strong></em></p></td>
          </table> */}
          <p className="intro">
              Hi, my name is <br/><span style= {{ fontSize: 50,color: "purple"}}>Nansamba.</span><br/>I'm a data engineer in the San Francisco Bay Area. <br/>I enjoy playing viola and discovering ethnic desserts <br/>from around the world.</p>
      </body>
    </div>
  );
}

export default App;


