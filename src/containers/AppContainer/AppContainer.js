import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AppContainer.module.css";

const AppContainer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <header>Simple Poll widget</header>
      <main>
        <button onClick={() => navigate("/poll/1")}>Poll 1</button>
        <button onClick={() => navigate("/poll/2")}>Poll 2</button>
      </main>
      <footer>Rhoneil Gabriel</footer>
    </div>
  );
};

export default AppContainer;
