import React from "react";
import styles from "./AppContainer.module.css";
import Poll from "../../components/Poll";

const AppContainer = () => {
    const poll = {
        question: 'How do you feel today :',
        options: ['Brilliant! I have so much energy', 'Always can be worse', 'Please, end my misery']
    }
  return (
    <div className={styles.container}>
      <header>Simple Poll widget</header>
      <main>
         <Poll {...poll}/>
      </main>
      <footer>Rhoneil Gabriel</footer>
    </div>
  );
};

export default AppContainer;
