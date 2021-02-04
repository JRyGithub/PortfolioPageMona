
import React, { useState } from "react";
import './Home.scss'


function Home() {

    const [slid, setSlid] = useState('');
    const useSlidBg = () => {

        const homeBg = document.getElementById('home');
        const titleText = document.getElementById('titleHeader');
        if (!slid) {
            homeBg.style.transition = "transform 2s";
            homeBg.style.transform = "translateX(-50%)";

            titleText.style.transition = "transform 2s";
            titleText.style.transform = "translateX(20%)";
            setSlid(true);

        } else {
            homeBg.style.transform = "translateX(0)";
            titleText.style.transform = "translateX(0)";

            setSlid(false);
        }
    }
    return (
        <section className="titleSection">
            <div id="home" class="vh-100 dt w-100 tc black cover home">
                <div className="dtc v-mid" id="titleContainer">
                    <h1 className="f1 f-headline-l fw1 i black-60 " id="titleHeader"><span className="titleWords pointer" onClick={useSlidBg}>Mona Harnett</span></h1>
                </div>
            </div>
        </section>
    );
}

export default Home;