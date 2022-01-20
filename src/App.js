import './App.css';
import { useEtherBalance, useEthers, useSendTransaction, useContractFunction } from '@usedapp/core'
import { utils } from '@usedapp/core/node_modules/ethers';
import React, { useState } from "react";
import { Contract} from '@ethersproject/contracts'
import Select from 'react-select'
import abi from './components/test_api';

function App() {
  const { activateBrowserWallet, account } = useEthers() //connect to wallet

  const [group, setGroup] = useState(0);


  const wethInterface = new utils.Interface(abi) // contract abi to use it
  const wethContractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'
  const contract = new Contract(wethContractAddress, wethInterface)
  const [address, setAddress] = useState('');
  const giveTokens = useContractFunction(contract, 'giveVoteTokens')
  const vote = useContractFunction(contract, 'vote')

  const options = [
    { value: 0, label: 'A' },
    { value: 1, label: 'B' },
    { value: 2, label: 'C' },
    { value: 3, label: 'D' },
    { value: 4, label: 'E' },
    { value: 5, label: 'F' },
    { value: 6, label: 'G' },
    { value: 7, label: 'H' },
  ]


  function giveVoteTokens(){
    console.log(address);
    giveTokens.send(address)
  }

  function handleClick(){
    console.log(group)
    vote.send(group)
  }

  
  return (
    <div>
    <div>
    {!account && <button onClick={() => activateBrowserWallet()}>Connect</button>}
    </div>
    {account && <p>Account: {account}</p>}

    {account && 
      <div>
        <div>   
          <label>
            Ajouter 2 Votes à l'adresse 
          <input type="text" name="address" onChange={e => setAddress(e.target.value)}/>
          </label>
          <button onClick={giveVoteTokens}>
          Envoyer
        </button>
        </div>
        <div> 
          <label>
          Voter pour le groupe  
          <div style={{width: '300px'}}>
            <Select options={options} onChange={e => setGroup(e.value) }/>
            </div>
          <button onClick={handleClick}>
            Envoyer
          </button>
          </label>
        </div>
        
      </div>
    }

    </div>
    
    );
  }
  
  export default App;
  
