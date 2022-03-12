import React from 'react'
import { useEagerConnect } from '../js/hook.js'
import ConnectChain from "./ConnectChain";
import Mint from './Mint';
import Reward from './Reward';
export default () => {
    const triedEager = useEagerConnect()
    return (
        <div >
            <h1>Connect Wallet demo</h1>
            <header >
                <ConnectChain triedEager={triedEager} />
                <Mint />
                <Reward />
            </header>
        </div>
    );
}