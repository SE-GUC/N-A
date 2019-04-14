import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class update extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeBusiness_Plans_Offered = this.onChangeBusiness_Plans_Offered.bind(this);
        this.state = {
            Business_Plans_Offered: ''
        }
    }
    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/co_wokring_space/Business_Plans_Offered/`+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Business_Plans_Offered: response.data.data
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

 
    onChangeBusiness_Plans_Offered(e) {
        this.setState({
            Business_Plans_Offered: e.target.value
        });
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Business_Plans_Offered</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Business_Plans_Offered: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Business_Plans_Offered}
                                />
                    </div>
                   
       <Link to={"/co_working_spaces/Business_Plans_Offeredupdate/"+this.props.match.params.id}>Edit</Link><br></br>
        <Link to={"/co_working_spaces/Business_Plans_Offeredadd/"+this.props.match.params.id}>Add</Link><br></br>
        <Link to={"/co_working_spaces/Business_Plans_Offereddelete/"+this.props.match.params.id}>delete</Link><br></br>
        <Link to={"/co_working_spaces/get/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}