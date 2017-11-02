import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props){
        super();//execute parent constructors
        this.state = {
            age: props.initialAge,
            status: 0
        };
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }
    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>{this.state.status}</p>
                <hr/>

{/*                <button  onClick={this.onMakeOlder.bind(this)}   className="btn btn-primary">Make me olde</button>
// This is ES5;*/}

                <button  onClick={() => this.onMakeOlder()}   className="btn btn-primary">Make me older</button>

            </div>
        );
    }
}

/*

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge : React.PropTypes.number,

};*/
