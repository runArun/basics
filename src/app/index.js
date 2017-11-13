import React from "react";
import {render} from "react-dom";

import Clock from './Clock/Clock-component'
import AutoFocusInput from './ref-Component'
class App extends React.Component {

    constructor () {
        super()
        this.state = { isShowClock: true }
    }

    handleShowOrHide () {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render() {
        return(
            <div>
                {this.state.isShowClock ? <Clock /> : null }
                <button onClick={this.handleShowOrHide.bind(this)}>显示或隐藏时钟</button>
                <hr/>
                <AutoFocusInput />
            </div>
        )
    }
}

render(<App />, window.document.getElementById('app'));