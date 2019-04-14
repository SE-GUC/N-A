import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);

        this.onChangeBusiness_Plans_Offered = this.onChangeBusiness_Plans_Offered.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Business_Plans_Offered: ''
        }
    }
    onChangeBusiness_Plans_Offered(e) {
        this.setState({
            Business_Plans_Offered: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            Business_Plans_Offered: this.state.Business_Plans_Offered
        };
        console.log(this.props.match.params.id)
        axios.post('https://lirtenhub-na.herokuapp.com/api/co_working_spaces/Business_Plans_Offered/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/Business_Plans_Offered/get');
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Business_Plans_Offered: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={this.onChangeBusiness_Plans_Offered}
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