import React from "react";

export class Home extends React.Component {
    render() {

        let content = '';
        if(true) {
            content = <h1>hello, this is just a test !</h1>
        }

        return (
            <div>
                <p>In a new Component!</p>
                {content}
            </div>
        );
    }
}