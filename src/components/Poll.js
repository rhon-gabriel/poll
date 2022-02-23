import React, { useState } from "react";
import styles from "./Poll.module.css";
import { Progress } from "antd";

const Poll = ({ question, options }) => {
  const answers = [
    { option: options[0], votes: 0 },
    { option: options[1], votes: 0 },
    { option: options[2], votes: 0 },
  ];
  const localResult = JSON.parse(localStorage.getItem("result"));
  const [result, setResult] = useState(localResult || answers);
  const [isSubmitted, setisSubmitted] = useState(false);

  const handlePoll = (selectedValue) => {
    let pollResult = result.map((answer) =>
      answer.option === selectedValue
        ? {
            ...answer,
            votes: answer.votes + 1,
          }
        : answer
    );
    setResult(pollResult);
    localStorage.setItem("result", JSON.stringify(pollResult));
    setisSubmitted(true);
  };

  const calculatePercentage = (value) => {
    let percentage;
    let numberVotes = result.reduce((a, b) => a + b.votes || 0, 0);
    percentage = (value / numberVotes) * 100;
    return Math.round(percentage);
  };

  return (
    <div className={styles.container}>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => {
          return (
            <>
              <li key={index} onClick={() => handlePoll(option)}>
                <input name="poll_value" type="radio" value={option} />
                {option}
                {isSubmitted && (
                  <Progress
                    percent={calculatePercentage(result[index].votes)}
                  />
                )}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Poll;
