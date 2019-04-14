import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class update extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeInterest = this.onChangeInterest.bind(this);
        this.state = {
            Interest: ''
        }
    }
    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates/interests/`+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Interest: response.data.data
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

 
    onChangeInterest(e) {
        this.setState({
            Interest: e.target.value
        });
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Interest</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Interest: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Interest}
                                />
                    </div>
        <Link to={"/Candidates/Intrestsupdate/"+this.props.match.params.id}>Edit</Link><br></br>
        <Link to={"/Candidates/Intrestsadd/"+this.props.match.params.id}>Add</Link><br></br>
        <Link to={"/Candidates/Intrestsdelete/"+this.props.match.params.id}>delete</Link><br></br>
        <Link to={"/Candidates/get/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}
