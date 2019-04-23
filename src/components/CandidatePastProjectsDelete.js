import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class update extends Component {

    constructor(props) {
        super(props);
        this.onChangePast_Projects = this.onChangePast_Projects.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Past_Projects: ''
        }
    }
    onChangePast_Projects(e) {
        this.setState({
            Past_Projects: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        axios({
            method:'delete',
            url:'https://lirtenhub-na.herokuapp.com/api/Candidates/projects/'+ this.props.match.params.id,
            headers:{'Content-Type':'application/json'},
                      data: {
                        Past_Projects: this.state.Past_Projects       
                      }
                    }).then(res => console.log(res.data))
                }
    render() {
            return (
                <div style={{marginTop: 20}}>
                    <h3>Add</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Past_Projects: </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={this.onChangePast_Projects}
                                    />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Delete" className="btn btn-primary" />
                        </div>
                        <Link to={"/Candidates/get/Past_Projects"+this.props.match.params.id}>back</Link><br></br>
                    </form>
                </div>
            )
    }
}