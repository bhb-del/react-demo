import React from 'react'
import { ethers } from 'ethers'
import abi from '../js/abi.js'


export default () => {
    const contractAddress = "0xF91995dDb1FA78C0727C994f28e5befD70528C34";
    const account = '0x78eDD742a637d2135611240d551A7D81cf5101E1'
    const reward = async () => {
        try {

            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const rewardContract = new ethers.Contract(contractAddress, abi, signer)
            await rewardContract.send(account, "22");
            alert("trading... please wait");
        } catch (error) {
            console.log("reward's error: " + error)
        }
    }
    return (
        <button onClick={reward}>Reward Game</button>
    )
}