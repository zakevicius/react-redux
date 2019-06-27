import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {

// State initialization in constructor
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMesage: '' };        
    // }

// State initialization without constructor
    state = { lat: null, errorMesage: '' };

// Autmoatic function when component is rendered
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            error => this.setState({ errorMesage: error.message })
        );
    }

    renderContent() {
        if (this.state.errorMesage && !this.state.lat) {
            return <div>Error: {this.state.errorMesage}</div>;
        }
        if (!this.state.errorMesage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Loader message="Please accept location request" />;
    }

    render() {
        return (
            <div style={{border: '5px solid red'}}>
                {this.renderContent()}
            </div>
        )
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)