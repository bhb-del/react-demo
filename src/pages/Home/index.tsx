import React from "react";
import styles from './index.less';
import { Link } from "react-router-dom"
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from "@web3-react/injected-connector";
// import Web3 from "web3";
import abi from "../Wallet/js/abi.js"
// import { library } from "webpack";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}


export default () => {
  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //   };
  // }, []);
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

  const contractAddress = "0xF91995dDb1FA78C0727C994f28e5befD70528C34";
  // async function Mint(account, val) {
  //   let web3 = new Web3(Web3.givenProvider);
  //   let contract = new web3.eth.Contract(abi, contractAddress)
  //   contract.methods.mint(account, val);
  // }


  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <Link to="/Board">let's go to play！</Link>
      </div>
      <p>ChainId: {chainId}</p>
      <p>Account: {account}</p>
      <button type="button" onClick={connect}>Connect</button>
      {/* <button type="button" onClick={() => { Mint(account, "1000000000000000000") }}>Mint</button> */}
    </div >
  )
}

function useEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error("Function not implemented.");
}
