import React, { useState } from "react";
import Home from "../Components/HomeSection/Home";
import './App.scss'
import InformationSection from "./InformationSection/InformationSection";
import PdfPage from "./PdfPage/PdfPage";


function App() {
    const [route, setRoute] = useState('home');
    
   
    return (
        <main className="App">
            <div>
            
                    <Home className="Home" />
                    {
                route === 'home' ?
                <>
                    <InformationSection className="InformationSection" setRoute={setRoute} />
                </>
                :
                <>
                    <PdfPage setRoute={setRoute} route={ route} />
                </>

            }
            </div>
        </main>
    )

}

export default App;