import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class update extends Component {
    
    constructor(props) {
        super(props);
        this.onChangePast_Events = this.onChangePast_Events.bind(this);
        this.state = {
            Past_Events: ''
        }
    }
    componentDidMount() {
        axios.get('https://lirtenhub-na.herokuapp.com/api/consultancyAgencies/Past_Events/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Past_Events: response.data.data
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

 
    onChangePast_Events(e) {
        this.setState({
            Past_Events: e.target.value
        });
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Past_Events</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Past_Events: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Past_Events}
                                />
                    </div>
                   
       <Link to={"/ConsultancyAgencies/Past_Eventsupdate/"+this.props.match.params.id}>Edit</Link><br></br>
        <Link to={"/ConsultancyAgencies/Past_Eventsadd/"+this.props.match.params.id}>Add</Link><br></br>
        <Link to={"/ConsultancyAgencies/Past_Eventsdelete/"+this.props.match.params.id}>delete</Link><br></br>
        <Link to={"/ConsultancyAgencies/get/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}