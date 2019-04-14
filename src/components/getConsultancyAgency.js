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
        <td>{props.todo.Basic_Info}</td>
        <td>{props.todo.BoardMembers}</td>
        <td>{props.todo.Past_Events}</td>
        <td>
           <td><Link to={"/ConsultancyAgencies/edit/"+props.todo._id}>Edit</Link></td> 
           <td><Link to={"/ConsultancyAgencies/delete/"+props.todo._id}>Delete</Link></td> 
           <td><Link to={"/ConsultancyAgencies/BoardMembers/"+props.todo._id}>BoardMembers</Link></td> 
           <td><Link to={"/ConsultancyAgencies/Past_Events/"+props.todo._id}>Past_Events</Link></td> 
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/consultancyAgencies`)
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
                            <th>Basic_Info</th>
                            <th>BoardMembers</th>
                            <th>Past_Events</th>
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