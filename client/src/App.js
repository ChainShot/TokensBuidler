import React, { Component } from 'react';
import logo from './logo.svg';
import { ethers } from 'ethers';
import './App.css';

const ABI = [
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

// component lifecycle
class App extends Component {
  state = {
    name: null,
    totalSupply: null
  }
  async componentDidMount() {
    // build the Akoin contract, and find out its total supply
    const AKOIN_ADDR = "0x7b9092bef02b426657f75224f26ee20ab9cf5923";
    const url = "http://localhost:8545";
    const provider = new ethers.providers.JsonRpcProvider(url);
    const contract = new ethers.Contract(AKOIN_ADDR, ABI, provider);

    const totalSupply = await contract.totalSupply();
    const name = await contract.name();
    this.setState({
      name,
      totalSupply: ethers.utils.formatEther(totalSupply)
    });
  }
  render() {
    const { totalSupply, name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Total supply of { name }: { totalSupply }
        </header>
      </div>
    );
  }
}

export default App;
