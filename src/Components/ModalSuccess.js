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
            <div className="modal__container">
              <h3>You form was send</h3>
              <div className="success-checkmark">
                <div className="check-icon">
                  <span className="icon-line line-tip"></span>
                  <span className="icon-line line-long"></span>
                  <div className="icon-circle"></div>
                  <div className="icon-fix"></div>
                </div>
                <button className="modal--buttom" onClick={toggle}>
                  Back
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>
        )}
      </Portal>
    );
  }
}
