import styles from "./Faq.module.css";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Faq = () => {
  const [num, setNum] = useState(null);

  const handleNumChange = (value) => {
    if (value === num) return setNum(null);
    setNum(value);
  };

  return (
    <div className={styles.wrapper} id="faq">
      <div className={styles.container}>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <p className={styles.title}>FAQ</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div
            className={styles.accordianContainer}
            onClick={() => handleNumChange(1)}
            style={
              num === 1
                ? { maxHeight: 500, transition: "1s ease" }
                : { maxHeight: 75, transition: "300ms ease" }
            }
          >
            <div className={styles.questionContainer}>
              <p className={styles.question}>Wen mint?</p>
              <HiChevronDown
                size={30}
                color="#ff468a"
                className={styles.chevron}
                style={
                  num === 1
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
              />
            </div>
            <div className={styles.answer}>
              <p className={styles.description}>
                Mint will be coming in the next couple weeks. Exact date will be
                determined soon.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div
            className={styles.accordianContainer}
            onClick={() => handleNumChange(2)}
            style={
              num === 2
                ? { maxHeight: 500, transition: "1s ease" }
                : { maxHeight: 75, transition: "300ms ease" }
            }
          >
            <div className={styles.questionContainer}>
              <p className={styles.question}>What is the supply?</p>
              <HiChevronDown
                size={30}
                color="#ff468a"
                className={styles.chevron}
                style={
                  num === 2
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
              />
            </div>
            <div className={styles.answer}>
              <p className={styles.description}>
                There is a total of 5,000 unique Unicorns available to mint.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div
            className={styles.accordianContainer}
            onClick={() => handleNumChange(3)}
            style={
              num === 3
                ? { maxHeight: 500, transition: "1s ease" }
                : { maxHeight: 75, transition: "300ms ease" }
            }
          >
            <div className={styles.questionContainer}>
              <p className={styles.question}>What is mint price?</p>
              <HiChevronDown
                size={30}
                color="#ff468a"
                className={styles.chevron}
                style={
                  num === 3
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
              />
            </div>
            <div className={styles.answer}>
              <p className={styles.description}>
                The mint price will be 0.05 ETH.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div
            className={styles.accordianContainer}
            onClick={() => handleNumChange(4)}
            style={
              num === 4
                ? { maxHeight: 500, transition: "1s ease" }
                : { maxHeight: 75, transition: "300ms ease" }
            }
          >
            <div className={styles.questionContainer}>
              <p className={styles.question}>What network?</p>
              <HiChevronDown
                size={30}
                color="#ff468a"
                className={styles.chevron}
                style={
                  num === 4
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
              />
            </div>
            <div className={styles.answer}>
              <p className={styles.description}>
                The Unicorns live on the ETH Network.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div
            className={styles.accordianContainer}
            onClick={() => handleNumChange(5)}
            style={
              num === 5
                ? { maxHeight: 500, transition: "1s ease" }
                : { maxHeight: 75, transition: "300ms ease" }
            }
          >
            <div className={styles.questionContainer}>
              <p className={styles.question}>
                Is there a whitelist or presale?
              </p>
              <HiChevronDown
                size={30}
                color="#ff468a"
                className={styles.chevron}
                style={
                  num === 5
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
              />
            </div>
            <div className={styles.answer}>
              <p className={styles.description}>
                There will be a whitelist which will give you access to the
                presale, there will be a limited amount whitelist spots.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div
            className={styles.accordianContainer}
            onClick={() => handleNumChange(6)}
            style={
              num === 6
                ? { maxHeight: 500, transition: "1s ease" }
                : { maxHeight: 75, transition: "300ms ease" }
            }
          >
            <div className={styles.questionContainer}>
              <p className={styles.question}>When will we do giveaways?</p>
              <HiChevronDown
                size={30}
                color="#ff468a"
                className={styles.chevron}
                style={
                  num === 6
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
              />
            </div>
            <div className={styles.answer}>
              <p className={styles.description}>
                We will start giveaways shortly after the mint. We will do
                giveaways every week. If you own a unicorn, you will be
                automatically entered.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Faq;
