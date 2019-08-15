import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"Trivia App for AppScrip",
            datas:[]
        }
    }

    componentDidMount(){
        this.refs.UserName.focus();
    }

    fSubmit=(e)=>{
        e.preventDefault();

        //creating the variable to store the data
        let datas = this.state.datas;
        let UserName = this.refs.UserName.value;
    localStorage.setItem('Name', UserName)
       

        //this is for store data in browser
        let data = {
            UserName
        }
        //this is to insert data
        datas.push(data);

        //this is for updating the data
        this.setState({
            datas:datas
        });

        this.refs.myForm.reset();
        this.refs.UserName.focus();

    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <form ref="myForm" className="myForm">
                    <label><h2>What is your name? </h2><br/> 
                    <input type="text" ref="UserName" placeholder="Enter your name"></input>
                    </label><br/><br/>
                    
                    <button onClick={(e)=>this.fSubmit(e)}>Next</button>
                
                </form>
                
                {/* I have created the form that save the user input in Local storage but I am unable to fetch that on history */}
            {localStorage.getItem("Username")}
            </div>
        )
    }
}
