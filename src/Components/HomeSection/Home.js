
import React, { useCallback, useEffect, useState } from "react";
import FadeIn from 'react-fade-in';
import './Home.scss'


function Home() {
    const [slid, setSlid] = useState('');

    useEffect(() => {
        const titleWords = document.getElementById('titleWords');

        titleWords.addEventListener("click", useSlidBg);
        return () => {
            titleWords.removeEventListener("click", useSlidBg);
        }
    }, [slid]);

    function useSlidBg() {
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
                        <FadeIn transitionDuration='3000'> 
                            <h1 className="f1 f-headline-l fw1 i black-60 " id="titleHeader"><span className="titleWords pointer" id="titleWords">Mona Harnett</span></h1>
                        </FadeIn>
                    </div>
            </div>
        </section>
    );
}

export default Home;