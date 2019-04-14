import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);

        this.onChangeInterest = this.onChangeInterest.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Interest: ''
        }
    }
    onChangeInterest(e) {
        this.setState({
            Interest: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Interest: this.state.Interest
        };
        console.log(this.props.match.params.id)
        axios.post('https://lirtenhub-na.herokuapp.com/api/Candidates/interests/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Interest: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={this.onChangeInterest}
                                />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}