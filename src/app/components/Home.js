import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props){
        super();//execute parent constructors
        this.age = props.age;
    }

    onMakeOlder(){
        this.age += 3;
    }
    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.age}</p>
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
    age : React.PropTypes.number,

};*/
