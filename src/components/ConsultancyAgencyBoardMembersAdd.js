import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);

        this.onChangeBoardMembers = this.onChangeBoardMembers.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            BoardMembers: ''
        }
    }
    onChangeBoardMembers(e) {
        this.setState({
            BoardMembers: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            BoardMembers: this.state.BoardMembers
        };
        console.log(this.props.match.params.id)
        axios.post('https://lirtenhub-na.herokuapp.com/api/consultancyAgencies/BoardMembers/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>BoardMembers: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={this.onChangeBoardMembers}
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