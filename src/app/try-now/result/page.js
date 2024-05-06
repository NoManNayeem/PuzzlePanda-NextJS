"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Header from '@/app/homepageComponents/header';
import Footer from '@/app/homepageComponents/footer';

const ResultPage = () => {
    const router = useRouter();
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    useEffect(() => {
        const userAnswers = JSON.parse(sessionStorage.getItem('userAnswers') || '{}');
        const questions = JSON.parse(sessionStorage.getItem('questions') || '[]');
        setTotalQuestions(questions.length);
        calculateScore(userAnswers, questions);
    }, []);

    const calculateScore = (answers, questions) => {
        let correctCount = 0;
        questions.forEach((question, index) => {
            const correctAnswer = question.CorrectAnswer;
            const userAnswer = answers[index] || [];  // Ensure userAnswer is always an array, even if undefined
            if (Array.isArray(correctAnswer)) {
                // Ensure userAnswer is an array to use `.every()`, default to empty array if undefined
                if (Array.isArray(userAnswer) && userAnswer.every(val => correctAnswer.includes(val)) && userAnswer.length === correctAnswer.length) {
                    correctCount++;
                }
            } else {
                if (userAnswer === correctAnswer) {
                    correctCount++;
                }
            }
        });
        setScore(correctCount);
    };
    

    const handleRetry = () => {
        sessionStorage.clear(); // Clear session storage
        router.push('/try-now'); // Adjust this path as necessary
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
                    <p className="text-lg">You answered {score} out of {totalQuestions} questions correctly!</p>
                    <button
                        onClick={handleRetry}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                        Try Again
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ResultPage;