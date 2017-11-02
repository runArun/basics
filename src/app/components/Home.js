import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {

       /* let content = '';
        if(true) {
            content = <h1>hello, this is just a test !</h1>
        }*/

        console.log(this.props);

        var text = 'something';

        return (
            <div>
                <p>In a new Component!</p>
                {/*{content}*/}
                <p>{text}</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p>User Object => name: {this.props.user.name}</p>
                <div className="">
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                      {/*  ES6 looping*/}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

/*

Home.propTypes = {
    name: React.PropTypes.string,
    age : React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};*/
