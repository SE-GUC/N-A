import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        console.log(this.props.match.params.id)
        axios({
            method:'delete',
            url:'https://lirtenhub-na.herokuapp.com/api/consultancyAgencies/' + this.props.match.params.id,
            headers:{'Content-Type':'application/json'},
                      data: {
                                
                      }
                    }).then(res => console.log(res.data))
                        //this.props.history.push('/signup');
                }

    
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>delete your data</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="submit" value="delete" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}