
import React from "react";
import Utama from "./utama";
import { Link } from "react-router-dom";


class App extends React.Component{
  render(){
    return(
      <div><hr/>
      <nav className='navbar'>
      </nav>
      <Link to="/gallery" className="nav-link">Gallery</Link>
      <Link to="/beranda" >Home</Link>
      <Link to="/tentangsaya">About</Link>
      <Link to="/karya" >Karya</Link>
      <Link to="/kontak">Kontak</Link><hr/>
      <p><Utama/></p>
      </div>
    );
  }
}
export default App;
