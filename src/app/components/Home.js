import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props){
        super();//execute parent constructors
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };

        setTimeout(()=>{
            this.state.status+=1;
        },1000);
        console.log('Constructor')
    }

    componentWillMount(){
        console.log('component will mount !')

    }

    componentDidMount(){
        console.log('component did mount !')

    }

    componentWillReceiveProps(nextProps){
        console.log('Component will receive props',nextProps)

    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('should component update',nextProps,nextState);
        return true;
    }

    componentWillUpdate(){
        console.log('component will update',nextProps,nextState);

    }

    componentDidUpdate(preProps,preState){
        console.log('component did update',preProps,preState);

    }

    componentWillUnmount(){
        console.log('component will unmount!')

    }
    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        })
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

                <hr/>

                <button onClick={this.props.greet} className='btn btn-primary'>Greet</button>

                <hr/>
                <input type="text" value={this.state.homeLink}
                       onChange={(event) => {this.onHandleChange(event)}}
                />
                <button onClick={this.onChangeLink.bind(this)} className='btn btn-primary'>Change Home Link</button>
            </div>
        );
    }
}

/*

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge : React.PropTypes.number,

};*/
