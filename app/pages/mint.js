import {useEffect, useState} from 'react';
import styles from '../styles/Mint.module.css'
import contract from '../src/UnicornNodes.json';
import {ethers} from 'ethers';
import axios from 'axios';

const abi = contract.abi;
const contractAddress = '0xA1281Eb078cEF699DAbAC23a02D6fD40a0b36689'

const Mint = () => {

  const [address, setAddress] = useState(null);

  const handleConnectWallet = async () => {
    const {ethereum} = window;

    if (!ethereum) return console.log('wallet not found');

    const accounts = await ethereum.request({method: 'eth_accounts'})

    if (accounts.length !== 0) {
      setAddress(accounts[0])
    } else {
      'no account found'
    }
  }

  const handleMint = async () => {

    const response = await axios.post('/api/sign-address', {address});
    if (response.status === 200) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, abi, signer);

      await nftContract.preSaleMint(1, response.data.hash, response.data.signature, {value: ethers.utils.parseEther('0.05')})
    }

  }

  return <div className={styles.wrapper}>
    <div className={styles.container}>
      <p className={styles.title}>Mint a Unicorn</p>
      <button onClick={handleConnectWallet}>connect wallet</button>
      <button onClick={handleMint}>Mint now</button>
    </div>
  </div>
}

export default Mint;