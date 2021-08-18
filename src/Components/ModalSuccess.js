import React, { Component } from "react";
import Portal from "./Portal";
import "../assets/styles/Components/ModalSuccess.scss";

export default class ModalSuccess extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && (
          <div className="modal">
            <button onClick={toggle}>❌</button>
            <h3>You form was send</h3>
            <div class="success-checkmark">
              <div class="check-icon">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
              </div>
            </div>
            <div>{children}</div>
          </div>
        )}
      </Portal>
    );
  }
}
