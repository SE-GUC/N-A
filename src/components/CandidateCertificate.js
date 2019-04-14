import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class update extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeCertificates = this.onChangeCertificates.bind(this);
        this.state = {
            Certificates: ''
        }
    }
    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates/Certificates/`+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Certificates: response.data.data
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

 
    onChangeCertificates(e) {
        this.setState({
            Certificates: e.target.value
        });
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Certificates</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Certificates: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Certificates}
                                />
                    </div>
       <Link to={"/Candidates/Certificateupdate/"+this.props.match.params.id}>Edit</Link><br></br>
        <Link to={"/Candidates/Certificateadd/"+this.props.match.params.id}>Add</Link><br></br>
        <Link to={"/Candidates/Certificatedelete/"+this.props.match.params.id}>delete</Link><br></br>
        <Link to={"/Candidates/get/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}