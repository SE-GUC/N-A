import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);

        this.onChangeoldvalue = this.onChangeoldvalue.bind(this);
        this.onChangenewvalue = this.onChangenewvalue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            oldvalue: '',
            newvalue:''
        }
    }
    onChangeoldvalue(e) {
        this.setState({
            oldvalue: e.target.value
        });
    }
    onChangenewvalue(e) {
        this.setState({
            newvalue: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.props.match.params.id)
        axios({
            method:'put',
            url:'https://lirtenhub-na.herokuapp.com/api/Candidates/projects/'+ this.props.match.params.id ,
            headers:{'Content-Type':'application/json'},
                      data: {
                        oldvalue: this.state.oldvalue,
                        newvalue:this.state.newvalue       
                      }
                    }).then(res => console.log(res.data))
                }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Update</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>oldvalue: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={this.onChangeoldvalue}
                                />
                    </div>
                    <div className="form-group">
                        <label>newvalue: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={this.onChangenewvalue}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}