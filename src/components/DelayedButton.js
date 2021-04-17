// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handleClick(e, onDelayedClick, delay) {
        e.persist()
        const timeout = onDelayedClick(e)
        setTimeout(timeout, delay)
    }

    render() {
        return (
            <button onClick = {e => this.handleClick(e, this.props.onDelayedClick, this.props.delay)}>

            </button>
        )
    }
}
