import Head from 'next/head'
import { useState } from 'react'
import 'bulma/css/bulma.css'
import styles from '../styles/Vend.module.css'
import Web3 from 'web3'
//import { useState } from 'react/cjs/react.production.min'

const VendingMachine = () => 
{
    const [error, setError] = useState('')
    let web3
    //window.ethereum
    const connectWalletHandler = async() => 
    {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined")
        {
            //If METAMASK installed

            try
            {
                window.ethereum.request({ method: "eth_requestAccounts"})
                web3 = new Web3(window.ethereum)
            }
            catch(err)
            {
                setError(err.message)
            }
        }
        else
        {
            // metamask not installed
            console.log("Please install MetaMask!")
        }
    }
    return (
        <div className={styles.main}>
            <Head>
                <title>Vending Machine App</title>
                <meta name="description" content="A blockchain vending machine app" />
            </Head>

            <nav className="navbar mt-4 mb-4">
                <div className="container">
                    <div className="navbar-brand">
                        <h1>Vending Machine</h1>
                    </div>
                    <div className="navbar-end">
                        <button onClick={connectWalletHandler} className="button is-primary">Connect Wallet</button>
                    </div>
                </div>
            </nav>
            <section>
                <div className="container">
                    <p>Placeholder Text</p>
                </div>
            </section>
            <section>
                <div className="container has-text-danger">
                    <p>{error}</p>
                </div>
            </section>
        </div>
    )
}

export default VendingMachine