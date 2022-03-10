import React from "react";
import styles from './index.less';
import { Link } from "react-router-dom"
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from "@web3-react/injected-connector";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}


export default () => {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider >
  );
}

const App = () => {
  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
  })
  const { chainId, account, activate } = useWeb3React();
  const connect = () => {
    activate(injected);
  }
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <Link to="/Board">let's go to play！</Link>
      </div>
      <p>ChainId: {chainId}</p>
      <p>Account: {account}</p>
      <button type="button" onClick={connect}>Connect</button>
    </div >
  )
}