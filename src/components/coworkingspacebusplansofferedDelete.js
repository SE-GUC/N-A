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
        axios({
            method:'delete',
            url:'https://lirtenhub-na.herokuapp.com/api/Candidates/projects/'+ this.props.match.params.id,
            headers:{'Content-Type':'application/json'},
                      data: {
                        Business_Plans_Offered: this.state.Business_Plans_Offered       
                      }
                    }).then(res => console.log(res.data))
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
                            <input type="submit" value="Delete" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            )
    }
}