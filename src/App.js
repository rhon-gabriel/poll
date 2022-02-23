import React from "react";
import styles from "./App.module.css";
import Poll from "./components/Poll";

const App = ({poll}) => {
  return (
    <div className={styles.container}>
      <main>
         <Poll {...poll}/>
      </main>
    </div>
  );
};

export default App;
