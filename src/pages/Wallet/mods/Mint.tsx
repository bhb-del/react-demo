import React from "react";
import { ethers } from 'ethers';
import abi from '../js/abi.js'
import { useWeb3React } from "@web3-react/core";


export default () => {
    const context = useWeb3React()
    const { account } = context
    const contractAddress = "0xF91995dDb1FA78C0727C994f28e5befD70528C34";
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const mintNftHandler = async () => {
        try {
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            //creact contract object
            const nftContract = new ethers.Contract(contractAddress, abi, signer)
            //Initialize payment
            console.log(nftContract)
            await nftContract.mint(account, "1000000000000000000");
            alert("Minting... please wait");
            // Get the balance of an address
        } catch (err) {
            console.log('mintNftHandler ' + err)
        }
    }


    return (
        <div>
            <button onClick={mintNftHandler}>Mint</button>
        </div>
    )
}