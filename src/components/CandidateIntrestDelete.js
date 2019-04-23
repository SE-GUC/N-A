import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class update extends Component {

    constructor(props) {
        super(props);
        this.onChangeIntrests = this.onChangeIntrests.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Intrests: ''
        }
    }
    onChangeIntrests(e) {
        this.setState({
            Intrests: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        axios({
            method:'delete',
            url:'https://lirtenhub-na.herokuapp.com/api/Candidates/interests/'+ this.props.match.params.id,
            headers:{'Content-Type':'application/json'},
                      data: {
                        Interest: this.state.Intrests       
                      }
                    }).then(res => console.log(res.data))
                }
    render() {
            return (
                <div style={{marginTop: 20}}>
                    <h3>Add</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Intrests: </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={this.onChangeIntrests}
                                    />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Delete" className="btn btn-primary" />
                        </div>
                        <Link to={"/Candidates/get/Intrests"+this.props.match.params.id}>back</Link><br></br>
                    </form>
                </div>
            )
    }
}