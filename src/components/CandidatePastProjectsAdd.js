import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);

        this.onChangePast_Projects = this.onChangePast_Projects.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Past_Projects: ''
        }
    }
    onChangePast_Projects(e) {
        this.setState({
            Past_Projects: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Past_Projects: this.state.Past_Projects
        };
        console.log(this.props.match.params.id)
        axios.post('https://lirtenhub-na.herokuapp.com/api/Candidates/projects/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Past_Projects: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={this.onChangePast_Projects}
                                />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}