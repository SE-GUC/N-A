import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }
    todoList() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates/`+this.props.match.params.id)
            .then(response => {
                this.setState({todos: [response.data.data]});
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
        <td><Link to={"/Candidates/edit/"+this.props.match.params.id}>Edit</Link></td> 
           <td><Link to={"/Candidates/delete/"+this.props.match.params.id}>Delete</Link></td> 
           <td><Link to={"/Candidates/Certificate/"+this.props.match.params.id}>certificates</Link></td> 
           <td><Link to={"/Candidates/Intrests/"+this.props.match.params.id}>Intrests</Link></td> 
           <td><Link to={"/Candidates/Past_Projects/"+this.props.match.params.id}>Past_Projects</Link></td> 
           <td><Link to={"/Candidates/Skills/"+this.props.match.params.id}>Skills</Link></td> 
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}