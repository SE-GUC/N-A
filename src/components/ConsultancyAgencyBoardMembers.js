import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class update extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeBoardMembers = this.onChangeBoardMembers.bind(this);
        this.state = {
            BoardMembers: ''
        }
    }
    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/consultancyAgencies/BoardMembers/`+this.props.match.params.id)
            .then(response => {
                this.setState({
                    BoardMembers: response.data.data
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

 
    onChangeBoardMembers(e) {
        this.setState({
            BoardMembers: e.target.value
        });
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>BoardMembers</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>BoardMembers: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.BoardMembers}
                                />
                    </div>
                   
       <Link to={"/ConsultancyAgencies/BoardMembersupdate/"+this.props.match.params.id}>Edit</Link><br></br>
        <Link to={"/ConsultancyAgencies/BoardMembersadd/"+this.props.match.params.id}>Add</Link><br></br>
        <Link to={"/ConsultancyAgencies/BoardMembersdelete/"+this.props.match.params.id}>delete</Link><br></br>
        <Link to={"/ConsultancyAgencies/get/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}