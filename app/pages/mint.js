import { useEffect, useState } from "react";
import styles from "../styles/Mint.module.css";
import contract from "../src/UnicornNodeClub.json";
import { ethers } from "ethers";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SiEthereum } from "react-icons/si";

const abi = contract.abi;
const contractAddress = "0xe01eca5374327Ea3a316b7036f2caa964Fb9991E";

const Mint = () => {
  const [address, setAddress] = useState(null);
  const [count, setCount] = useState(1);
  const [supply, setSupply] = useState(null);

  const notWhitelisted = () => toast.error("Address not whitelisted!");
  const installMetamask = () => toast.error("Install Metamask");

  const handleConnectWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) return installMetamask;
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts);
    if (accounts.length !== 0) {
      setAddress(accounts[0]);
    }
  };

  const handleMint = async () => {
    const response = await axios.post("/api/sign-address", { address });
    if (response.status === 200) {
      if (response.data === "address not found") {
        return notWhitelisted();
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, abi, signer);

      // create transaction
      const transaction = await nftContract.preSaleMint(
        count,
        response.data.hash,
        response.data.signature,
        { value: ethers.utils.parseEther(`${count * 0.05}`) }
      );

      // wait for transaction to be mined
      const wait = transaction.wait();

      // show message status
      toast.promise(wait, {
        pending: count > 1 ? "Minting Your Unicorns" : "Minting Your Unicorn",
        error: "Something went wrong!",
        success: "Minted!",
      });
    }
  };

  const increment = () => {
    if (count === 10) return;
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) return;
    setCount(count - 1);
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Mint a Unicorn</p>
        <div className={styles.supplyContainer}>
          <p className={styles.subTitle}>Unicorns Minted</p>
          <p className={styles.supply}>{supply} / 5000</p>
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
          <>
            <p className={styles.subTitle}>No wallet connected</p>
            <p className={styles.address}>Connect your wallet to mint!</p>
          </>
        )}
        <div className={styles.priceContainer}>
          <p className={styles.price}>Total Price:</p>
          <p className={styles.ethereumPrice}>
            <SiEthereum size={24} />
            <span className={styles.currPrice}>
              {(0.05 * count).toFixed(2)}
            </span>
            <span className={styles.eth}>ETH</span>
          </p>
        </div>
        {address ? <MintButton /> : <ConnectButton />}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Mint;
