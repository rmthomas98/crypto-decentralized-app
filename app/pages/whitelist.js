// import { useEffect, useState } from "react";
// import styles from "../styles/Whitelist.module.css";
// import axios from "axios";
// import Spinner from "../components/Spinner/Spinner";
// import Head from "next/head";

// const WhiteList = () => {
//   const [address, setAddress] = useState(null);
//   const [etherError, setEtherError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [status, setStatus] = useState(null);
//   const [count, setCount] = useState(null);

//   useEffect(() => {
//     const getCount = async () => {
//       const response = await axios.get("/api/get-count");
//       if (response.status === 200) {
//         setCount(response.data);
//       } else {
//         setCount(0);
//       }
//     };
//     getCount();
//   }, []);

//   const handleConnectWallet = async () => {
//     const { ethereum } = window;

//     if (ethereum) {
//       const accounts = await ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       setAddress(accounts[0]);
//     } else {
//       setEtherError(true);
//     }
//   };

//   const handleDisconnectWallet = () => {
//     setAddress(null);
//     setStatus(null);
//     setEtherError(false);
//   };

//   const checkAddress = async () => {
//     setIsLoading(true);
//     const response = await axios.post("/api/get-address", { address });
//     if (response.status === 200) {
//       if (response.data === "address whitelisted") {
//         setIsLoading(false);
//         setStatus("Whitelisted");
//         return;
//       }
//       if (response.data === "address not found") {
//         setIsLoading(false);
//         setStatus("Not Whitelisted");
//         return;
//       }
//     } else {
//       setIsLoading(false);
//       setStatus("error");
//     }
//   };

//   return (
//     <div className={styles.wrapper}>
//       <Head>
//         <title>Unicorn Whitelist</title>
//         <meta
//           name="description"
//           content="View the Unicorn Nodes NFT whitelist."
//         />
//         <meta
//           name="keywords"
//           content="nft, crypto, defi, unicorn nodes, giveaway, ethereum, nodes, passive income"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/apple-touch-icon.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/favicon-32x32.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//           href="/favicon-16x16.png"
//         />
//       </Head>
//       <div className={styles.container}>
//         <p className={styles.title}>Whitelist</p>
//         <p className={styles.description}>
//           There are 500 total whitelist spots available.
//         </p>
//         <div className={styles.countContainer}>
//           <p className={styles.countTitle}>Current Count</p>
//           <p className={styles.count}>{count} / 200</p>
//         </div>
//         <div className={styles.description}>
//           {address ? (
//             <>
//               <p
//                 className={styles.connectedAccount}
//                 style={{
//                   marginBottom: 10,
//                   textTransform: "uppercase",
//                   fontSize: "80%",
//                   fontWeight: 300,
//                 }}
//               >
//                 Connected Address
//               </p>
//               <p className={styles.address}>{address}</p>
//             </>
//           ) : (
//             ""
//           )}
//           {etherError && (
//             <p className={styles.connectedAccount}>Install Metamask</p>
//           )}
//           {address && !status && (
//             <div className={styles.statusContainer}>
//               <div className={styles.dot}></div>
//               <p style={{ marginRight: 10 }}>Status: </p>
//               <button
//                 className={styles.checkStatusBtn}
//                 onClick={checkAddress}
//                 disabled={isLoading}
//               >
//                 {isLoading ? <Spinner /> : "Check Status"}
//               </button>
//             </div>
//           )}
//           {address && status && (
//             <div className={styles.statusContainer}>
//               <div
//                 className={`${styles.dot} ${
//                   status === "Whitelisted" && styles.greenBackground
//                 } ${status === "Not Whitelisted" && styles.redBackground}`}
//               ></div>
//               <p style={{ marginRight: 10 }}>Status: </p>
//               {status}
//             </div>
//           )}
//         </div>
//         <div
//           className={styles.buttonContainer}
//           onClick={address ? handleDisconnectWallet : handleConnectWallet}
//         >
//           <button className={styles.connectButton}>
//             {address ? "Disconnect Wallet" : "Connect Wallet"}
//           </button>
//         </div>
//         {!address && (
//           <p className={styles.smallDescription}>
//             Connect your wallet to see if you have been whitelisted.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WhiteList;
