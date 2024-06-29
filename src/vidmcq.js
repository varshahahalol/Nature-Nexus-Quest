import React, { useState } from 'react';

const MCQ = ({ quizData }) => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [arrAns, setArrAnswer] = useState(Array(quizData.length).fill(null));
  const [showscore, setShowScore] = useState(false);

  const handleAns = (option) => {
    setSelectedOption(option);
    let newarr = [...arrAns];
    if (option === quizData[index].answer) {
      newarr[index] = quizData[index].answer;
      setArrAnswer(newarr);
    }
  };

  const totalscore = () => {
    return arrAns.reduce((scores, answer, index) => {
      if (answer === quizData[index].answer) {
        return scores + 1;
      }
      return scores;
    }, 0);
  };

  const nextq = () => {
    if (index < quizData.length - 1) {
      setIndex(index + 1);
      setSelectedOption("");
    }
  };

  const prevs = () => {
    if (index === 0) {
      setIndex(quizData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleOption = (option) => {
    handleAns(option);
  };

  return (
    <div className='quiz-container'>
      {showscore ? (
        <h1>Total Score: {totalscore()}/{quizData.length}</h1>
      ) : (
        <div>
          <h1>{index + 1})&emsp;{quizData[index].question}</h1>
          <ul className="options-list">
            {quizData[index].options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="radio"
                    name={index}
                    checked={selectedOption === option}
                    value={option}
                    onChange={() => handleOption(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <div className='button-container'>
            <button className='prev-btn' onClick={prevs}>Prev</button>
            {index === quizData.length - 1 ? (
              <button className='submit-btn' onClick={() => setShowScore(true)}>Submit</button>
            ) : (
              <button className='next-btn' onClick={nextq}>Next</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MCQ;
