import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);
        this.onChangeFacilites = this.onChangeFacilites.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Facilites: ''
        }
    }
    onChangeFacilites(e) {
        this.setState({
            Facilites: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        axios({
            method:'delete',
            url:'https://lirtenhub-na.herokuapp.com/api/co_working_spaces/Facilites/'+ this.props.match.params.id,
            headers:{'Content-Type':'application/json'},
                      data: {
                        Facilites: this.state.Facilites       
                      }
                    }).then(res => console.log(res.data))
                }
    render() {
            return (
                <div style={{marginTop: 20}}>
                    <h3>Add</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Facilites: </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={this.onChangeFacilites}
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