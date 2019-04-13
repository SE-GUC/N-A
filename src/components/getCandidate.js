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
        <td>{props.todo.Certificates}</td>
        <td>{props.todo.Avg_Rating}</td>
        <td>{props.todo.Intrests}</td>
        <td>{props.todo.Past_Projects}</td>
        <td>{props.todo.Skills}</td>
        <td>{props.todo.Ratings}</td>
        <td>
            <Link to={"/Candidates/edit/"+props.todo._id}>Edit</Link>
            <Link to={"/Candidates/delete/"+props.todo._id}>Delete</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates`)
            .then(response => {
                this.setState({todos: [response.data.data.pop()]});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    todoList() {
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
                            <th>Certificates</th>
                            <th>Avg_Rating</th>
                            <th>Intrests</th>
                            <th>Past_Projects</th>
                            <th>Skills</th>
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