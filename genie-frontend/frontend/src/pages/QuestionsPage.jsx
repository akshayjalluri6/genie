// src/pages/QuestionsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuestionsPage() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [user, setUser] = useState(1); // Replace with actual user ID

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/questions/');
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    const handleChange = (questionId, option) => {
        setAnswers({
            ...answers,
            [questionId]: option,
        });
    };

    const handleSubmit = async () => {
        try {
            for (const [questionId, option] of Object.entries(answers)) {
                await axios.post('http://localhost:8000/api/answers/', {
                    user,
                    question: questionId,
                    selected_option: option,
                });
            }
            alert('Answers submitted successfully!');
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };

    return (
        <div>
            <h2>Questions</h2>
            {questions.map((question) => (
                <div key={question.id}>
                    <p>{question.text}</p>
                    {question.options.split(',').map((option) => (
                        <div key={option}>
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option}
                                onChange={() => handleChange(question.id, option)}
                            />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Answers</button>
        </div>
    );
}

export default QuestionsPage;
