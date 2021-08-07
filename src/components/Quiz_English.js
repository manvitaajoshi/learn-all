import React, { Component, useState } from 'react'
import { QuizData } from './Quiz_Data_English';
import "../css/Quiz.css"


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
    componentDidMount(){
        this.loadQuiz();
    }
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }
    componentDidUpdate(prevProps, prevState){
        const { currentIndex } = this.state;
        if(this.state.currentIndex != prevState.currentIndex)
        {
            this.setState(() => {
                return {
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer
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
        if (this.state.currentIndex === QuizData.length-1) {
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
                    <h1>Your final score is {this.state.score} points</h1>
                    {/* <p>The correct Answers for the quiz are</p> */}
                    <ul>
                        {QuizData.map((item, index) => (
                            <li className='ui floating message options'
                                key={index}>
                                    <p>The question was</p> <br/>
                                    {item.question}
                                    <p>The correct ans is</p>
                                    {item.answer}
                            </li>
                        ))}
                        
                    </ul>
                </div>
            )
        }

        return (
            <div>
                {this.state.score}
                {this.state.currentIndex}
                {QuizData.length}
                <h2>{question}</h2>
                <span>{`Question ${currentIndex+1} of ${QuizData.length}`}</span>
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
                {currentIndex < QuizData.length - 1 &&
                    <button
                        className="ui inverted button"
                        disabled={this.state.disabled}
                        onClick={this.nextQuestionHander}
                    >Next Question</button>
                }
                {currentIndex === QuizData.length - 1 &&
                    <button
                        className="ui inverted button"
                        disabled={this.state.disabled}
                        onClick={this.finishHandler}
                    >Finish</button>
                }
            </div>
        )
    }
}

export default Quiz