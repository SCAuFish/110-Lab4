import React, {Component} from 'react';
import db from '../base';

class TeamMembers extends Component{
    constructor(props){
        super(props);

        this.state = {
            name : '',
            age : ''
        };

        this.firebaseRef = db.database().ref("teamMates");
    }
    
    render() {
        return (
            <div>
                <label>Friend's Name</label>
                <input onChange = {e => this.setState({name: e.target.value})}/>
                <br />
                <label>Friend's Age</label>
                <input onChange = {e => this.setState({age: e.target.value})}/>
                <br />
                <button onClick={this.pushToFirebase.bind(this)}>
                    Submit
                </button>
            </div>
        );
    }

    componentWillUnmount(){
        this.firebaseRef.off();
    }

    pushToFirebase(event) {
        const {name, age} = this.state;
        event.preventDefault();
        this.firebaseRef.child(name).set({name: this.state.name, age: this.state.age});
        this.setState({name: '', age: ''});
    }
}

export default TeamMembers;