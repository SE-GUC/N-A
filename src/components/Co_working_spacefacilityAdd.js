import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);

        this.onChangeFacilites = this.onChangeFacilites.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Facility: ''
        }
    }
    onChangeFacilites(e) {
        this.setState({
            Facility: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Facility: this.state.Facility
        };
        console.log(this.props.match.params.id)
        axios.post('https://lirtenhub-na.herokuapp.com/api/co_working_spaces/Facilites/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Facility: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={this.onChangeFacilites}
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