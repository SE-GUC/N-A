import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);
        this.onChangePast_Events = this.onChangePast_Events.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Past_Events: ''
        }
    }
    onChangePast_Events(e) {
        this.setState({
            Past_Events: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        axios({
            method:'delete',
            url:'https://lirtenhub-na.herokuapp.com/api/consultancyAgencies/Past_Events/'+ this.props.match.params.id,
            headers:{'Content-Type':'application/json'},
                      data: {
                        Past_Events: this.state.Past_Events       
                      }
                    }).then(res => console.log(res.data))
                }
    render() {
            return (
                <div style={{marginTop: 20}}>
                    <h3>Add</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Past_Events: </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={this.onChangePast_Events}
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