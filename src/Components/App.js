import * as React from "react";
import Home from "../Components/HomeSection/Home";
import Footer from "../Components/Footer/Footer";
import './App.scss'
import InformationSection from "./InformationSection/InformationSection";


function App() {
    return (
        <main className="App">
            <div>
                <Home className="Home" />
                <InformationSection className="InformationSection" />
            </div>
            <Footer />
        </main>
    )

}

export default App;