import { useState } from "react";
import styles from "../styles/Whitelist.module.css";

const WhiteList = () => {
  const [account, setAccount] = useState(null);

  const handleConnectWallet = async () => {
    const { ethereum } = window;

    if (ethereum) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    }
  };

  const handleDisconnectWallet = () => {
    setAccount(null);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Whitelist</p>
        <p className={styles.description}>
          The are 500 total whitelist spots available.
        </p>
        <div className={styles.countContainer}>
          <p className={styles.countTitle}>Current Count</p>
          <p className={styles.count}>3/500</p>
        </div>
        <div className={styles.description}>
          {account ? (
            <>
              <p
                className={styles.connectedAccount}
                style={{
                  marginBottom: 10,
                  textTransform: "uppercase",
                  fontSize: "80%",
                  fontWeight: 300,
                }}
              >
                Connected Address
              </p>
              <p>{account}</p>
            </>
          ) : (
            "Your wallet is not connected."
          )}
        </div>
        <div
          className={styles.buttonContainer}
          onClick={account ? handleDisconnectWallet : handleConnectWallet}
        >
          <button className={styles.connectButton}>
            {account ? "Disconnect Wallet" : "Connect Wallet"}
          </button>
        </div>
        <p className={styles.smallDescription}>
          Connect your wallet to see if you have been whitelisted.
        </p>
      </div>
    </div>
  );
};

export default WhiteList;
