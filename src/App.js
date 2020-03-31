import React from 'react';

class App extends React.Component {
	
 state = {
    clickAmount: ''
  }

 render() {
    return <h2> hello {this.state.clickAmount}</h2>;
  }

     componentDidMount() {
        fetch('http://localhost:8080/clickAmount')
        .then(res => res.json())
        .then((data) => {
          this.setState({ clickAmount: data })
        })
        .catch(console.log)
      }
}
export default App;
