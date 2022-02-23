import React, { useState } from "react";
import styles from "./Poll.module.css";

const Poll = ({ question, options }) => {
  const answers = [
    { option: options[0], votes: 0 },
    { option: options[1], votes: 0 },
    { option: options[2], votes: 0 },
  ];
  const localResult = JSON.parse(localStorage.getItem("result"))
  const [result, setResult] = useState(localResult || answers);

  const handlePoll = (selectedValue) => {
    let pollResult = result.map((answer) =>
      answer.option === selectedValue
        ? {
            ...answer,
            votes: answer.votes + 1,
          }
        : answer
    );
    setResult(pollResult)
    localStorage.setItem("result", JSON.stringify(pollResult));
  };

  return (
    <div className={styles.container}>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => {
          return (
            <li key={index} onClick={() => handlePoll(option)}>
              <input name="poll_value" type="radio" value={option} />
              {option}
            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default Poll;
