"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import questionsData from "./data";
import UserHeader from "../../userComponents/UserHeader";
import UserFooter from "../../userComponents/UserFooter";
import Countdown from "react-countdown";
import Image from "next/image";

const ParticipatePage = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(questionsData[0].Duration * 1000);
  const [imageLoading, setImageLoading] = useState(false);

  const handleAnswer = (answer, option, isCheckbox) => {
    if (isCheckbox) {
      setUserAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestionIndex]: {
          ...prevAnswers[currentQuestionIndex],
          [option]: !prevAnswers[currentQuestionIndex]?.[option],
        },
      }));
    } else {
      setUserAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestionIndex]: answer,
      }));
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(questionsData[currentQuestionIndex + 1].Duration * 1000);
    } else {
      const results = calculateResults();
      sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));
      sessionStorage.setItem("questions", JSON.stringify(questionsData));
      sessionStorage.setItem("results", JSON.stringify(results));
      router.push("/user/play-now/participate/quiz-result");
    }
  };

  const calculateResults = () => {
    return questionsData.map((question, index) => {
      let isCorrect = false;
      const userAnswer = userAnswers[index];

      if (question.Type === "CheckBox") {
        const selectedOptions = Object.keys(userAnswer || {});
        isCorrect =
          selectedOptions.length === question.CorrectAnswer.length &&
          selectedOptions.every((option) =>
            question.CorrectAnswer.includes(option)
          );
      } else {
        isCorrect = userAnswer === question.CorrectAnswer;
      }

      return {
        question: question.Question,
        correctAnswer: question.CorrectAnswer,
        userAnswer: userAnswers[index],
        isCorrect: isCorrect,
      };
    });
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(timerId);
          goToNextQuestion();
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [currentQuestionIndex]);

  const currentQuestion = questionsData[currentQuestionIndex];
  const timeLeftPercent = (timeLeft / (currentQuestion.Duration * 1000)) * 100;

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen flex flex-col">
      <UserHeader />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col">
            <div className="mb-2 text-center">
              <h3 className="text-2xl font-bold">
                <Countdown date={Date.now() + timeLeft} renderer={({ seconds }) => seconds} /> seconds left
              </h3>
            </div>
            <div className="bg-gray-200 rounded-full w-full h-2.5 mt-2">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${timeLeftPercent}%` }}
              ></div>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            {currentQuestion.Question}
          </h2>
          {currentQuestion.Type === "MCQ" &&
            currentQuestion.Options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={option}
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  onChange={() => handleAnswer(option)}
                  className="accent-blue-500"
                />
                <label htmlFor={option} className="ml-2 text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          {currentQuestion.Type === "Text" && (
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              onChange={(e) => handleAnswer(e.target.value)}
            />
          )}
          {currentQuestion.Type === "CheckBox" &&
            currentQuestion.Options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  checked={userAnswers[currentQuestionIndex]?.[option] || false}
                  onChange={() => handleAnswer(null, option, true)}
                  className="accent-blue-500"
                />
                <label htmlFor={option} className="ml-2 text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          {currentQuestion.Type === "Image" && (
            <div>
              <Image
                width={500}
                height={300}
                src={currentQuestion.URL}
                alt="Question Image"
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
                style={{ display: imageLoading ? "none" : "block" }}
              />

              {imageLoading && <p>Loading image...</p>}
              {currentQuestion.Options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`image-option-${index}`}
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    onChange={() => handleAnswer(option)}
                    className="accent-blue-500"
                  />
                  <label
                    htmlFor={`image-option-${index}`}
                    className="ml-2 text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={goToNextQuestion}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center"
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <UserFooter />
    </div>
  );
};

export default ParticipatePage;
