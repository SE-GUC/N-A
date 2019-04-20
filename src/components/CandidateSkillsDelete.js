import React, {Component} from 'react';
import axios from 'axios';

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
        axios({
            method:'delete',
            url:'https://lirtenhub-na.herokuapp.com/api/Candidates/Skills/'+ this.props.match.params.id,
            headers:{'Content-Type':'application/json'},
                      data: {
                        Skills: this.state.Skills       
                      }
                    }).then(res => console.log(res.data))
                }
    render() {
            return (
                <div style={{marginTop: 20}}>
                    <h3>Delete</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Skills: </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={this.onChangeSkills}
                                    />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Delete" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            )
    }
}