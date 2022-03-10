import React from 'react'
import { injected } from './connector.js'
import { useInactiveListener } from './hook.js'
import { useWeb3React, } from '@web3-react/core'
import styles from "./index.less"
import { ethers } from 'ethers';
import abi from './abi'
// import Web3 from 'web3'

export function ConnectChain(props) {
    // const Web3 = require('web3');
    const context = useWeb3React()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context

    const [activatingConnector, setActivatingConnector] = React.useState()

    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])


    const activating = injected === activatingConnector//activating: if connected,return boolean 
    const connected = injected === connector
    const disabled = !props.triedEager || !!activatingConnector || !!error//diabled: if accurent account's chainID didn't inclue in injected ,disabled button  

    useInactiveListener(!props.triedEager || !!activatingConnector)

    let isDisconnect = !error && chainId
    const buttonText = isDisconnect ? 'Disconnect' : (activating ? 'Connectting' : 'Connect')

    function connect() {
        if (!isDisconnect) {
            setActivatingConnector(injected)
            activate(injected)
        } else {
            deactivate()
        }
    }

    const contractAddress = "0xE3664FA497A660066b7E904CAd4c2Ef4FA1c5e6F";

    const mintNftHandler = async () => {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const web3 = new Web3(web3.currentProvider);
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new web3.eth.Contract(contractAddress, abi, signer);

                //Initialize payment
                await nftContract.mint(account, 1e80);
                alert("Minting... please wait");
                // await nftTxn.wait();
            }
            else {
                console.log("Ethereum object does not exist");
            }
        } catch (err) {
            console.log('mintNftHandler Error: ' + err)
        }
    }

    return (
        <div className={styles.ConnectButton}>
            <button style={{
                borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
                cursor: disabled ? 'unset' : 'pointer'
            }}
                className="ConnectButton"
                disabled={disabled}
                onClick={connect}>{buttonText}</button>
            <p>ChainId：{chainId ?? 'Not Connected'}</p>
            <p>Account: <b> {account}</b></p>
            {/* <button onClick={mintNftHandler}>Mint NFT</button> */}
            <p>Balance： </p>
        </div>
    )
}