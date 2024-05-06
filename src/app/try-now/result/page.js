"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/homepageComponents/header";
import Footer from "@/app/homepageComponents/footer";

const ResultPage = () => {
    const router = useRouter();
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
  
    useEffect(() => {
      const userAnswers = JSON.parse(sessionStorage.getItem("userAnswers") || "{}");
      const questions = JSON.parse(sessionStorage.getItem("questions") || "[]");
      setTotalQuestions(questions.length);
      calculateScore(userAnswers, questions);
    }, []);
  
    const calculateScore = (answers, questions) => {
      let correctCount = 0;
      questions.forEach((question, index) => {
        const correctAnswer = question.CorrectAnswer;
        const userAnswer = answers[index]; // No default to array here to handle all types correctly
  
        if (Array.isArray(correctAnswer)) {
          // Correct answer is an array, handle for checkboxes
          const userAnswerArray = Array.isArray(userAnswer) ? userAnswer : [];
          if (
            userAnswerArray.every(val => correctAnswer.includes(val)) &&
            userAnswerArray.length === correctAnswer.length
          ) {
            correctCount++;
          }
        } else {
          // Handle string or other types of answers
          if (userAnswer === correctAnswer) {
            correctCount++;
          }
        }
      });
      setScore(correctCount);
    };
  
    const handleRetry = () => {
      sessionStorage.clear(); // Clear session storage
      router.push("/register"); // Adjust this path as necessary
    };
  
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="font-sans space-x-10 flex justify-center mb-2">
              <div className="w-48 h-48 flex items-center justify-center shrink-0 bg-gray-900 rounded-full shadow-lg p-6 relative before:border-4 before:border-dotted before:border-yellow-500 before:rounded-full before:absolute before:w-[90%] before:h-[90%]">
                <h4 className="text-white text-lg font-semibold text-center uppercase">
                  Congrats!
                </h4>
              </div>
            </div>
  
            <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
            <p className="text-lg">
              You answered {score} out of {totalQuestions} questions correctly!
            </p>
            <button
              onClick={handleRetry}
              className="mt-4 px-4 py-2 bg-sky-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Join The Leaders!
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default ResultPage;