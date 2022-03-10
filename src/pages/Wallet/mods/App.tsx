import React from 'react'
import { useEagerConnect } from '../js/hook.js'
import ConnectChain from "./ConnectChain";
import Mint from './Mint';

export default () => {
    const triedEager = useEagerConnect()
    return (
        <div >
            <header>
                <h1>Connect Wallet demo</h1>
                <ConnectChain triedEager={triedEager} />
                <Mint />
            </header>
        </div>
    );
}