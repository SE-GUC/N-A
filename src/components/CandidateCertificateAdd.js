import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        const obj = {
            Certificates: this.state.Certificates
        };
        console.log(this.props.match.params.id)
        axios.post('https://lirtenhub-na.herokuapp.com/api/Candidates/Certificates/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        //this.props.history.push('/Candidates/get');
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
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                    <Link to={"/Candidates/get/Certificate/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}