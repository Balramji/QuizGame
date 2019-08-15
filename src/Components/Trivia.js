import React, { Component } from 'react'
import { Data } from './Data';
import './Trivia.css'

export default class Test extends Component {
    state={
        userAnswer:null,
        currentQuestion:0,
        options:[],
        quizEnd:false,
        disabled:true,
        gameEnd:false
    }

    //it read the data from Data.js
    loadQuiz =()=>{
        const {currentQuestion}=this.state;
        this.setState( ()=>{
            return{
                questions:Data[currentQuestion].question,
                options:Data[currentQuestion].option,
            }
        })
    }

    componentDidMount(){
        this.loadQuiz();
    }

    //toCheckAnswer is eventFunction and answer is work as an event to select the answer
    toCheckAnswer=(answer)=>{
        this.setState({
            userAnswer:answer,
            disabled:false
        })
    }

    handleClick = ()=>{
        this.setState({
            currentQuestion:this.state.currentQuestion+1
        })
       
    };


    //updating the component so it will move to the next uestion
    componentDidUpdate(prevProps, prevState){
        const {currentQuestion}= this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion){
            this.setState(()=>{
                return {
                    disabled:true,
                questions:Data[currentQuestion].question,
                options:Data[currentQuestion].option
                };
            })
        }
    }


    //It helps to finish the game and give final Output
    handleFinish=()=>{
        if(this.state.currentQuestion===Data.length-1){
            this.setState({
                quizEnd:true
            })
        }
    }

    //This will provide the summary of the app
    handleHistory=()=>{
        if(this.state.currentQuestion===Data.length-1){
            this.setState({
                gameEnd:true
            })
        }
    }

    render() {
        const {questions, options, currentQuestion, userAnswer, quizEnd, gameEnd} = this.state;
        
        if(quizEnd){
            return (
                <div>
                    <h2> Game Over</h2>
                    <h3>Just having an issue to reset the starting of the game</h3>
                    <h4>We cann write code here to restart the game from begining</h4>
                </div>
            )
            
        }
        if (gameEnd){
            return(
                <div>
                    <h4>Summary</h4>
                    <p>Here are the selected Answers</p>
                    <ul>
                        {Data.map((item,index)=>(
                            <li key={index}>
                            {item.answers}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
        return (
            <div>
               
               <h2>{questions}</h2>

               <span>{`Question ${currentQuestion} out of ${Data.length-1}`}</span>
               {options.map(optionTo =>(
                   <p key={optionTo.id} className={` selection ${userAnswer === optionTo ? "selected" : null}`}
                   onClick={()=> this.toCheckAnswer(optionTo)}>
                   {optionTo}
                   </p>
               ))}

               { currentQuestion < Data.length-1 &&
               <button disabled={this.state.disabled} onClick={this.handleClick}>Next</button>
            }
            { currentQuestion===Data.length-1 && 
            <button disabled={this.state.disabled} onClick={this.handleFinish}>Finish</button>}
            
            { currentQuestion===Data.length-1 && 
            <button disabled={this.state.disabled} onClick={this.handleHistory}>History</button>}
            
            </div>
        )
    }
}
