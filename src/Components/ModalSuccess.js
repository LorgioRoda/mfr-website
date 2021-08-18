import React, { Component } from 'react'
import Portal from "./Portal"

export default class ModalSuccess extends Component {
    render() {
        const {children, toggle, active} = this.props
        return (
            <Portal>
                {active && (<div>
                    <h3>thanks for you message</h3>
                    <button onClick={toggle}></button>
                    <div>{children}</div>
                </div>)}
            </Portal>
        )
    }
}

