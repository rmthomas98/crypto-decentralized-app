import { useEffect, useState } from "react";
import styles from "../styles/Mint.module.css";
import contract from "../src/UnicornNodes.json";
import { ethers } from "ethers";
import axios from "axios";

const abi = contract.abi;
const contractAddress = "0x1B700aaD934A927662C7e407e990C37Aaeae56EF";

const Mint = () => {
  const [address, setAddress] = useState(null);
  const [price, setPrice] = useState(0.05);
  const [count, setCount] = useState(1);
  const [supply, setSupply] = useState(null);

  const handleConnectWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) return console.log("wallet not found");

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      setAddress(accounts[0]);
    } else {
      ("no account found");
    }
  };

  const handleMint = async () => {
    const response = await axios.post("/api/sign-address", { address });
    if (response.status === 200) {
      if (response.data === "address not found")
        return alert("address not whitelisted");
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, abi, signer);

      await nftContract.preSaleMint(
        1,
        response.data.hash,
        response.data.signature,
        { value: ethers.utils.parseEther("0.05") }
      );
    }
  };

  const MintButton = () => {
    return (
      <div className={styles.btnContainer}>
        <button onClick={handleMint} className={styles.mintBtn}>
          Mint
        </button>
      </div>
    );
  };

  const ConnectButton = () => {
    return (
      <div className={styles.btnContainer}>
        <button onClick={handleConnectWallet} className={styles.connectBtn}>
          Connect Wallet
        </button>
      </div>
    );
  };

  const increment = () => {
    if (count === 10) return;
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Mint a Unicorn</p>
        <div className={styles.supplyContainer}>
          <p className={styles.subTitle}>Unicorns Minted</p>
          <p className={styles.supply}>100 / 5000</p>
        </div>
        <div className={styles.supplyContainer}>
          <p className={styles.subTitle}>Mint Unicorns</p>
          <div className={styles.countContainer}>
            <div className={styles.changeCountBtn} onClick={decrement}>
              -
            </div>
            <p className={styles.count}>{count}</p>
            <div className={styles.changeCountBtn} onClick={increment}>
              +
            </div>
          </div>
        </div>
        {address ? (
          <div>
            <p className={styles.subTitle}>Wallet Connected</p>
            <p className={styles.address}>{address}</p>
          </div>
        ) : (
          <p className={styles.subTitle}>No wallet connected</p>
        )}
        <div></div>
        {address ? <MintButton /> : <ConnectButton />}
      </div>
    </div>
  );
};

export default Mint;
