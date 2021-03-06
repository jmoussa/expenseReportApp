import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class StoreCatsOutput extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: '',
      isLoading: true
    }
  }
  
  componentWillMount(){
    var sentData = {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    }
    fetch('http://127.0.0.1:3001/api/getTPC', sentData)
      .then(response => {
        return response.json() 
      }).then(responseData => {
        this.setState({chartData: responseData, isLoading: false});
      });
  }

  render() {
    return (
      <div>
        <h4>Transactions By Category</h4>
        <br></br>
        { this.state.isLoading ? ( <p>Loading</p> ) : (<Doughnut data={this.state.chartData} />) }
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default StoreCatsOutput;
