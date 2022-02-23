import React from "react";
import styles from "./App.module.css";
import Poll from "./components/Poll";

const App = ({ question, options }) => {
  return (
    <div className={styles.container}>
      <main>
        <Poll question={question} options={options} />
      </main>
    </div>
  );
};

export default App;
