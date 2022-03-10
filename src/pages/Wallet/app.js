import React from 'react'
import { useEagerConnect } from './hook.js'
import { ConnectChain } from "./ConnectChain.js"
export function App() {
    const triedEager = useEagerConnect()
    return (
        <div className="App">
            <header className="App-header">
                <h1>Connect Wallet demo</h1>
                <ConnectChain triedEager={triedEager} />

            </header>
        </div>
    );
}