import styles from './index.less';
import React from 'react';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import App from "./mods/App"

export default () => {

    function getLibrary(provider) {
        const library = new Web3Provider(provider)
        library.pollingInterval = 5000
        return library
    }

    return (
        <div className={styles.main}>
            <Web3ReactProvider getLibrary={getLibrary}>
                <App />
            </Web3ReactProvider>
        </div>
    )
}
