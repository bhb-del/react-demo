import React from "react";
import styles from './index.less';
import { Link } from "react-router-dom"
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from "@web3-react/injected-connector";

export default () => {

  function getLibrary(provider) {
    const library = new Web3Provider(provider)
    library.pollingInterval = 5000
    return library
  }
  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
  })

  const { chainId, account, activate } = useWeb3React();
  const connect = () => {
    activate(injected);
  }

  return (

    <div className={styles.main}>
      <Web3ReactProvider getLibrary={getLibrary} >
        <div className={styles.text}>
          <Link to="/Board">let's go to play！</Link>
          <p>ChainId: {chainId} </p>
          <p>Account: {account} </p>
          <button type="button" onClick={connect}>Connect</button>
        </div>
      </Web3ReactProvider>
    </div>

  );
}