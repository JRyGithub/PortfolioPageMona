import * as React from "react";
import Home from "../Components/HomeSection/Home";

const intialState ={
    route: 'home'
}

class  App extends React.Component {
    constructor(){
        super();
        this.state = intialState;
    }
    onRouteChange = (route) => {
        this.setState({ route: route });
      }

    render(){
        const {route} = this.state;
        return (
            <main className="App">
                <Home />
            </main>
        )
    }
}

export default App;