
import React, { useEffect, useState } from "react";
import FadeIn from 'react-fade-in';
import './Home.scss'
import { BrowserView, MobileView, isMobile} from 'react-device-detect';
import { useSwipeable } from "react-swipeable";

function Home( {setRoute}) {
    const [slid, setSlid] = useState('');

    useEffect(() => {
        if(!isMobile){
        const titleWords = document.getElementById('titleWords');

        titleWords.addEventListener("click", useSlidBg);
        return () => {
            titleWords.removeEventListener("click", useSlidBg);
        }
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
        }
    }, [slid]);

    
    const handlers = useSwipeable({
        onSwipedLeft: () => setRoute('informationSection'),
        onSwipedRight: () => setRoute('home'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });

    return (
        <section className="titleSection" {...handlers}>
            <div id="home" className="vh-100 dt w-100 tc black cover home">
                    <div className="dtc v-mid" id="titleContainer">
                        <FadeIn transitionDuration='3000'>
                            <BrowserView>
                                <h1 className="f1 f-headline-l fw1 i black-60 " id="titleHeader"><span className="titleWords pointer" id="titleWords">Mona Harnett</span></h1>
                            </BrowserView>
                            <MobileView>
                                <h1 className="f1 f-headline-l fw1 i black-60 " id="titleHeader"><span className="titleWordsMobile pointer" id="titleWordsMobile" onClick={() =>setRoute('informationSection')} role="button"  aria-hidden="true">Mona Harnett</span></h1>
                            </MobileView> 
                        </FadeIn>
                    </div>
            </div>
        </section>
    );
}

export default Home;