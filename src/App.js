import React, {
  Component
} from 'react';
import io from 'socket.io-client'
import './App.css';

class App extends Component {
  componentDidMount() {
    const socket = io('http://localhost:5000')
    socket.on('connect', function() {
      console.log('the socket connected')
    });
  }
  render() {
    return ( <
      div className = "App" >
      hallo ghassan <
      /div>
    );
  }
}

export default App;