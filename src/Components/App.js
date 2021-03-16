import React, { useState } from "react";
import Home from "../Components/HomeSection/Home";
import './App.scss'
import InformationSection from "./InformationSection/InformationSection";
import PdfPage from "./PdfPage/PdfPage";
import {isMobile} from "react-device-detect";
import InformationSectionMobile from "./InformationSection/InformationSectionMobile";
import PictureRubric from "./PictureRubric/PictureRubric";

function App() {
    const [route, setRoute] = useState('home');
    
    if(!isMobile){
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
    }else{
        return (
        <main className="App">
            <div>
            { (route === 'home') ?
                    <Home className="Home" setRoute={setRoute} />
                    :
                    (route === 'informationSection') ?
                    <InformationSectionMobile className="InformationSectionMobile" setRoute={setRoute} />
                    :
                    (route === 'pictureRubric') ?  
                    <PictureRubric  className="pictureRubricMobile" setRoute={setRoute} />
                    :
                    <PdfPage setRoute={setRoute} route={ route} />
            }     
            </div>
                
        </main>
        )
    }

}

export default App;