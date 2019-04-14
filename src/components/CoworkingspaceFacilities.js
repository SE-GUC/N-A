import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class update extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeFacilites = this.onChangeFacilites.bind(this);
        this.state = {
            Facilites: ''
        }
    }
    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/co_working_spaces/Facilites/`+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Facilites: response.data.data
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

 
    onChangeFacilites(e) {
        this.setState({
            Facilites: e.target.value
        });
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Facilites</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Facilites: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Facilites}
                                />
                    </div>
                   
       <Link to={"/co_working_spaces/Facilitesupdate/"+this.props.match.params.id}>Edit</Link><br></br>
        <Link to={"/co_working_spaces/Facilitesadd/"+this.props.match.params.id}>Add</Link><br></br>
        <Link to={"/co_working_spaces/Facilitesdelete/"+this.props.match.params.id}>delete</Link><br></br>
        <Link to={"/co_working_spaces/get/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}