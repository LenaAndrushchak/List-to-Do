import { Component } from "react";
import icon from './icon.png';


export class ListToDo extends Component {
    state={
        userInput: "",
        listToDo: []
    }

onChangeEvent(e){
    this.setState({userInput:e})
}

addItem(goal) {
    if(goal === ''){
        alert('Please enter your target..')
    }
else{
    let listArray=this.state.listToDo;
    listArray.push(goal);
    this.setState({listToDo:listArray,userInput: ''})
}
}
crossWord(word){
 const li = word.target;
 li.classList.toggle('crossed');

}
 deleteItem(){
    let listArray=this.state.listToDo;
    listArray=[];
    this.setState({listToDo:listArray});
 }

 onFormSubmit(e){
    e.preventDefault();
}

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What do you want to do?"
                 onChange={(e) =>{
                    this.onChangeEvent(e.target.value)
                 }}
                 value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">ADD</button>
            </div>
            <div>
                <ul>
                   {this.state.listToDo.map((task, index) => (
                        <li onClick={this.crossWord} key={index}>
                            <img src={icon} width="20px" alt="icon"/>
                        {task}</li>
                   ))}
                  
                </ul>
            </div>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}