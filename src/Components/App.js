import React, { useCallback, useEffect, useState } from "react";
import Home from "../Components/HomeSection/Home";
import './App.scss'
import InformationSection from "./InformationSection/InformationSection";
import PdfPage from "./PdfPage/PdfPage";


function App() {
    const [route, setRoute] = useState('home');
    
   
    return (
        <main className="App">
            <div>
            {
                route === 'home' ?
                <>
                    <Home className="Home" />
                    <InformationSection className="InformationSection" setRoute={setRoute} />
                </>
                :
                <>
                    <PdfPage setRoute={setRoute}/>
                </>

            }
            </div>
        </main>
    )

}

export default App;