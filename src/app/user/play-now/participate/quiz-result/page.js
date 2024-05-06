"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserHeader from "@/app/user/userComponents/UserHeader";
import UserFooter from "@/app/user/userComponents/UserFooter";


const ResultPage = () => {
    const router = useRouter();
    const [results, setResults] = useState([]);
    const [score, setScore] = useState(0);
  
    useEffect(() => {
      const storedResults = sessionStorage.getItem("results");
      if (storedResults) {
        const parsedResults = JSON.parse(storedResults);
        setResults(parsedResults);
        // Calculate score based on correct answers
        const calculatedScore = parsedResults.reduce((acc, curr) => acc + (curr.isCorrect ? 1 : 0), 0);
        setScore(calculatedScore);
      } else {
        router.push("/");
      }
    }, []);
  
    const renderUserAnswer = (answer) => {
      if (Array.isArray(answer)) {
        return answer.join(", ");
      } else if (typeof answer === 'object' && answer !== null) {
        return Object.entries(answer)
          .map(([key, value]) => `${key}: ${value.toString()}`)
          .join(", ");
      } else {
        return answer;
      }
    };
  
    return (
      <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600 min-h-screen flex flex-col">
        <UserHeader />
        <div className="flex-grow container mx-auto p-5">
          <div className="bg-white rounded-lg shadow-xl p-6 m-4">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Quiz Results</h2>
            <div className="text-center my-4">
              <h3 className="text-lg font-semibold">Your Score: {score} / {results.length}</h3>
              <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(score / results.length) * 100}%` }}></div>
              </div>
            </div>
            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="flex flex-col border-b border-gray-300 pb-4">
                  <p className="text-gray-700">Question: {result.question}</p>
                  <p className="text-gray-700">Correct Answer: {result.correctAnswer}</p>
                  <p className={`text-${result.isCorrect ? 'green' : 'red'}-700 font-semibold`}>
                    Your Answer: {renderUserAnswer(result.userAnswer)}
                  </p>
                  <p className={`text-${result.isCorrect ? 'green' : 'red'}-700 font-semibold`}>
                    {result.isCorrect ? 'Correct' : 'Incorrect'}
                  </p>
                </div>
              ))}
            </div>
            <button onClick={() => router.push('/')} className="mt-8 w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300 ease-in-out">
              Home
            </button>
          </div>
        </div>
        <UserFooter />
      </div>
    );
  };
  
  export default ResultPage;