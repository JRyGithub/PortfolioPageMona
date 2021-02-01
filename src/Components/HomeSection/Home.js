
import * as React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onRouteChange } = this.props;
        return (
            <section>
                <div id="home" class="vh-100 dt w-100 tc black cover">
                    <div class="dtc v-mid" id="titleContainer">
                        <h1 class="f1 f-headline-l fw1 i black-60">Mona Harnett</h1>
                        <div class="tc pb1 navBar">
                            <a class="link dim gray f6 f5-ns dib mr3" href="#home" title="Home">Home</a>
                            <a class="link dim gray f6 f5-ns dib mr3" href="#projects" title="Projects">Projects</a>
                            <a class="link dim gray f6 f5-ns dib mr3" href="#about" title="About">About</a>
                            <a class="link dim gray f6 f5-ns dib" href="#contact" title="Contact">Contact</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Home;