import React, { Component, useState } from 'react'
import { QuizData } from './Quiz_Data_Science';
import "../css/Quiz.css"
import Header from "./Header"


export class Quiz extends Component {

    //Check the answer
    state = {
        userAnswer: null, //current users answer
        currentIndex: 0,  //current questions index
        options: [],     //the four options
        quizEnd: false,  //determines if it's the last question
        score: 0,        //holds the score
        disabled: true,   // determines the status of the buttons
    }
    loadQuiz = () => {
        const { currentIndex } = this.state //get the current question index
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer
            }
        }
        )
    }
    nextQuestionHander = () => {
        const { userAnswer, answer, score } = this.state
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null
        })
        //Check if correct answer and increment score
        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }
    }
    componentDidMount() {
        this.loadQuiz();
    }
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }
    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (this.state.currentIndex !== prevState.currentIndex) {
            this.setState(() => {
                return {
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer,
                    disabled: true,
                }
            }
            );
        }
    }
    finishHandler = () => {
        const { userAnswer, answer, score } = this.state
        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }
        if (this.state.currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }

    }

    render() {

        const {
            question, options, currentIndex, userAnswer, quizEnd } = this.state //get the current state


        if (quizEnd) {
            return (
                <div>
                    <Header />
                    <div style={{ width: "400px", paddingTop: "100px", paddingLeft: "300px", borderRadius: "30px", marginBottom: "30px" }}>
                        <h2>Your final score is </h2>
                        <h1 style={{ color: "red" }}>{this.state.score} points</h1><br />
                        <ul>
                            {QuizData.map((item, index) => (
                                <li className='ui floating message options'
                                    key={index}>
                                    <p>The question was: </p>
                                    <h4 style={{ color: "darkblue" }}> {item.question} </h4><br />
                                    <p>The correct answer is:</p>
                                    <h4 style={{ color: "darkgreen" }}>{item.answer}</h4>
                                </li>
                            ))}

                        </ul>
                    </div>
                    <br /><br />
                </div>
            )
        }

        return (
            <>
                <Header />
                <div style={{ width: "400px", paddingTop: "100px", paddingLeft: "300px", borderRadius: "30px" }}>
                    <h2 style={{ width: "600px" }}>Q. {question}</h2><br />
                    <span>{`Question ${currentIndex + 1} of ${QuizData.length}`}</span><br /><br />
                    {options.map(option => (  //for each option, new paragraph
                        <p key={option.id}
                            className={`ui floating message options
                ${userAnswer === option ? "selected" : null}
                `}
                            onClick={() => this.checkAnswer(option)}

                        >
                            {option}
                        </p>
                    ))}
                    <br />
                    {currentIndex < QuizData.length - 1 &&
                        <button
                            style={{ padding: "10px", borderRadius: "6px" }}
                            disabled={this.state.disabled}
                            onClick={this.nextQuestionHander}
                        >Next Question</button>
                    }
                    {currentIndex === QuizData.length - 1 &&
                        <button
                            style={{ padding: "10px", borderRadius: "6px" }}
                            disabled={this.state.disabled}
                            onClick={this.finishHandler}
                        >Finish</button>
                    }
                </div>
            </>
        )
    }
}

export default Quiz