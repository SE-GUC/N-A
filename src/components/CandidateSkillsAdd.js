import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class update extends Component {

    constructor(props) {
        super(props);

        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Skills: ''
        }
    }
    onChangeSkills(e) {
        this.setState({
            Skills: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Skills: this.state.Skills
        };
        console.log(this.props.match.params.id)
        axios.post('https://lirtenhub-na.herokuapp.com/api/Candidates/Skills/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Skills: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={this.onChangeSkills}
                                />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                    <Link to={"/Candidates/get/Skills/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}