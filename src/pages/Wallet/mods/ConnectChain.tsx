import React from "react";
import styles from "../../Wallet/index.less"
import { injected } from '../js/connector.js'
import { useInactiveListener } from '../js/hook.js'
import { useWeb3React, } from '@web3-react/core'


interface IProps {
    triedEager: any
}

export default ({ triedEager }: IProps) => {

    const context = useWeb3React()
    const { connector, chainId, account, activate, deactivate, error } = context

    const [activatingConnector, setActivatingConnector] = React.useState()

    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])


    const activating = injected === activatingConnector//activating: if connected,return boolean 
    const connected = injected === connector
    const disabled = !triedEager || !!activatingConnector || !!error//diabled: if accurent account's chainID didn't inclue in injected ,disabled button  

    useInactiveListener(!triedEager || !!activatingConnector)

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
        </div>
    )
}