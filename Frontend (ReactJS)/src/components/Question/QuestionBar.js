import React from "react";
import { NavLink } from "react-router-dom";
import './QuestionBar.css';

const QuestionBar = ({ currentQuestion, questions, examId }) => {
    return (
        <div className="question-bar">
            {questions.map((question, index) => (
                <NavLink
                    key={question.id}
                    to={`/courses/${examId}/questions/${question.id}`}
                    activeClassName="active-link"
                    className={question.id === currentQuestion ? "question-link-active" : "question-link"}
                >
                    Q{index + 1}
                </NavLink>
            ))}
        </div>
    );
};

export default QuestionBar;
