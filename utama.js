import React from "react";
import { Routes,Route } from "react-router-dom";
import beranda from './Pages/beranda';
import tentangsaya from './Pages/tentangsaya';
import karya from './Pages/karya';
import kontak from './Pages/kontak';
import Gallery from "./Pages/Gallery";

class  Utama extends React.Component{
    render(){
    return(
    <Routes>
        <Route exact path="/beranda" Component={beranda}/>
        <Route exact path="/tentangsaya" Component={tentangsaya}/>
        <Route exact path="/karya" Component={karya}/>
        <Route exact path="/kontak" Component={kontak}/>
        <Route path="/gallery" Component={Gallery}/>
    </Routes>
    ) 
}
}

export default Utama;
