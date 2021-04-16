// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handleClick(event, delayedClick, delay) {
        event.persist()
        setTimeout(delayedClick, delay)
    }
    
    render() {
        return (
            <button onClick = {handleClick(e, this.props.onDelayedClick, this.props.delay)}>

            </button>
        )
    }
}
