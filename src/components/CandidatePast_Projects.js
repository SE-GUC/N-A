import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class update extends Component {
    
    constructor(props) {
        super(props);
        this.onChangePast_Projects = this.onChangePast_Projects.bind(this);
        this.state = {
            Past_Projects: ''
        }
    }
    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates/projects/`+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Past_Projects: response.data.data
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

 
    onChangePast_Projects(e) {
        this.setState({
            Past_Projects: e.target.value
        });
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Past_Projects</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Past_Projects: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Past_Projects}
                                />
                    </div>
                   
       <Link to={"/Candidates/Past_Projectsupdate/"+this.props.match.params.id}>Edit</Link><br></br>
        <Link to={"/Candidates/Past_Projectsadd/"+this.props.match.params.id}>Add</Link><br></br>
        <Link to={"/Candidates/past_Projectsdelete/"+this.props.match.params.id}>delete</Link><br></br>
        <Link to={"/Candidates/get/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}

 

   