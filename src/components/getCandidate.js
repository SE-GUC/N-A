import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const User = props => (
    <tr>
        <td>{props.todo.FirstName}</td>
        <td>{props.todo.LastName}</td>
        <td>{props.todo.Birthdate}</td>
        <td>{props.todo.email}</td>
        <td>{props.todo.password}</td>
        <td>{props.todo.Avg_Rating}</td>
        <td>{props.todo.Ratings}</td>
        <td>
           <td><Link to={"/Candidates/edit/"+props.todo._id}>Edit</Link></td> 
           <td><Link to={"/Candidates/delete/"+props.todo._id}>Delete</Link></td> 
           <td><Link to={"/Candidates/Certificate/"+props.todo._id}>certificates</Link></td> 
           <td><Link to={"/Candidates/Intrests/"+props.todo._id}>Intrests</Link></td> 
           <td><Link to={"/Candidates/Past_Projects/"+props.todo._id}>Past_Projects</Link></td> 
           <td><Link to={"/Candidates/Skills/"+props.todo._id}>Skills</Link></td> 
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }
    todoList() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates`)
            .then(response => {
                this.setState({todos: [response.data.data.pop()]});
                console.log(response)
            })
        
            .catch(function (error) {
                console.log(error);
            })
        return this.state.todos.map(function(currentTodo, i) {
            return <User todo={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Welcome</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>BirthDate</th>
                            <th>email</th>
                            <th>password</th>
                            <th>Avg_Rating</th>
                            <th>Ratings</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}