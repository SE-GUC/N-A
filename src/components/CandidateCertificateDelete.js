import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);
        this.onChangeCertificates = this.onChangeCertificates.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Certificates: ''
        }
    }
    onChangeCertificates(e) {
        this.setState({
            Certificates: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        axios({
            method:'delete',
            url:'https://lirtenhub-na.herokuapp.com/api/Candidates/Certificates/'+ this.props.match.params.id,
            headers:{'Content-Type':'application/json'},
                      data: {
                        Certificates: this.state.Certificates       
                      }
                    }).then(res => console.log(res.data))
                }
    render() {
            return (
                <div style={{marginTop: 20}}>
                    <h3>Add</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Certificates: </label>
                            <input  type="text"
                                    className="form-control"
                                    onChange={this.onChangeCertificates}
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