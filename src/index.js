import { Rinkeby, DAppProvider, useEtherBalance, useEthers, Config } from '@usedapp/core'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { formatEther } from '@ethersproject/units'

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: 'https://mainnet.infura.io/v3/d4e71409fa9947048636514cf86af9d2',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)