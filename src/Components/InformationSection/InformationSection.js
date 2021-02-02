
import * as React from "react";
import './InformationSection.scss'

class InformationSection extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="informationSection">
                <div class="vh-100 dt w-100 tr black">
                    <div className="dtc v-mid w-right">
                        <dl class="lh-title pa4 mt0">
                            <dt class="f6 b">Favorite Song</dt>
                            <dd class="ml0">Devil Got My Woman - Skip James</dd>
                            <dt class="f6 b mt2">Favorite Movie</dt>
                            <dd class="ml0">Primer</dd>
                            <dt class="f6 b mt2">Favorite Artist</dt>
                            <dd class="ml0">Kanye West</dd>
                            <dt class="f6 b mt2">Favorite Food</dt>
                            <dd class="ml0">Cheese Pizza</dd>
                            <dt class="f6 b mt2">Least Favorite Flavor</dt>
                            <dd class="ml0">Cherry</dd>
                            <dt class="f6 b mt2">Favorite Hobby</dt>
                            <dd class="ml0">Eating Cheese Pizza</dd>
                        </dl>
                    </div>
                </div>
            </section>
        );
    }
}
export default InformationSection;