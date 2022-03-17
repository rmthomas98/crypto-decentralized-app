import styles from "./Faq.module.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";

const Faq = () => {
  const [num, setNum] = useState(null);

  return (
    <div className={styles.wrapper} id="faq">
      <div className={styles.container}>
        <p className={styles.header}>faq</p>
        <div
          className={styles.accordianContainer}
          onClick={() => (num === 1 ? setNum(null) : setNum(1))}
          style={{ marginTop: 50, height: num === 1 ? 120 : 71 }}
        >
          <div className={styles.questionContainer}>
            <p className={styles.question}>Wen Mint?</p>
            {num === 1 ? (
              <AiOutlineMinusCircle color="#ff0303" />
            ) : (
              <AiOutlinePlusCircle color="#8aff03" />
            )}
          </div>
          <p className={styles.answer}>April-May 2022</p>
        </div>
        <div
          className={styles.accordianContainer}
          onClick={() => (num === 2 ? setNum(null) : setNum(2))}
          style={{ height: num === 2 ? 120 : 71 }}
        >
          <div className={styles.questionContainer}>
            <p className={styles.question}>What is the supply?</p>
            {num === 2 ? (
              <AiOutlineMinusCircle color="#ff0303" />
            ) : (
              <AiOutlinePlusCircle color="#8aff03" />
            )}
          </div>
          <p className={styles.answer}>1,000</p>
        </div>
        <div
          className={styles.accordianContainer}
          onClick={() => (num === 3 ? setNum(null) : setNum(3))}
          style={{ height: num === 3 ? 120 : 71 }}
        >
          <div className={styles.questionContainer}>
            <p className={styles.question}>What is mint price?</p>
            {num === 3 ? (
              <AiOutlineMinusCircle color="#ff0303" />
            ) : (
              <AiOutlinePlusCircle color="#8aff03" />
            )}
          </div>
          <p className={styles.answer}>0.05 ETH Public. 0.04 ETH WL</p>
        </div>
        <div
          className={styles.accordianContainer}
          onClick={() => (num === 4 ? setNum(null) : setNum(4))}
          style={{ height: num === 4 ? 120 : 71 }}
        >
          <div className={styles.questionContainer}>
            <p className={styles.question}>What network?</p>
            {num === 4 ? (
              <AiOutlineMinusCircle color="#ff0303" />
            ) : (
              <AiOutlinePlusCircle color="#8aff03" />
            )}
          </div>
          <p className={styles.answer}>Ethereum Network</p>
        </div>
        <div
          className={styles.accordianContainer}
          onClick={() => (num === 5 ? setNum(null) : setNum(5))}
          style={{
            height: num === 5 ? 120 : 71,
            borderBottom: "1px solid #ffffffad",
          }}
        >
          <div className={styles.questionContainer}>
            <p className={styles.question}>Is there a whitelist?</p>
            {num === 5 ? (
              <AiOutlineMinusCircle color="#ff0303" />
            ) : (
              <AiOutlinePlusCircle color="#8aff03" />
            )}
          </div>
          <p className={styles.answer}>Yes. 200 spots total.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
